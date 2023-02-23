import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import * as cheerio from "cheerio";

const WIKI_SUMMARY = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const WIKI_SECTIONS = "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/";

export const usePlanetStore = defineStore("planet", () => {
  const mercury = ref({
    title: '',
    overview: '',
    structure: '',
    surface: '',
  });
  const venus = ref({
    title: '',
    overview: '',
    structure: '',
    surface: '',
  });
  
  async function fetchPlanetData(){
    mercury.value = {
      title: 'Mercury',
      overview: await fetchPlanetOverview("Mercury_(planet)"),
      structure: await fetchPlanetStructure("Mercury_(planet)"),
      surface: await fetchPlanetSurface("Mercury_(planet)")
    };
    venus.value = {
      title: 'Venus',
      overview: await fetchPlanetOverview("Venus"),
      structure: await fetchPlanetStructure("Venus"),
      surface: await fetchPlanetSurface("Venus")
    };
  }
  async function fetchPlanetOverview(wikiId: string) {
    let planetName = encodeURIComponent(wikiId);
    let endpoint = WIKI_SUMMARY + planetName;
    const res = await axios.get(endpoint);
    if (res.status != 200) {
      throw Error(res.statusText);
    }
    let first3Sentences = res.data.extract
      .split(".")
      .slice(0, 4)
      .join(". ")
      .concat(".");
    return first3Sentences;
  }

  async function fetchPlanetStructure(wikiId: string) {
    let planetName = encodeURIComponent(wikiId);
    let endpoint = WIKI_SECTIONS + planetName;
    const res = await axios.get(endpoint);
    if (res.status != 200) {
      throw Error(res.statusText);
    }
    let sections = res.data.remaining.sections;
    for (const section of sections) {
      if (section.anchor == "Internal_structure") {
        const $ = cheerio.load(section.text);
        const $p = $("p:first");
        return $p.text();
      }
    }
    return "";
  }

  async function fetchPlanetSurface(wikiId: string) {
    let planetName = encodeURIComponent(wikiId);
    let endpoint = WIKI_SECTIONS + planetName;
    const res = await axios.get(endpoint);
    if (res.status != 200) {
      throw Error(res.statusText);
    }
    let sections = res.data.remaining.sections;
    for (const section of sections) {
      if (section.anchor == "Surface_geology") {
        const $ = cheerio.load(section.text);
        const $p = $("p:first");
        return $p.text();
      }
    }
    return "";
  }

  return {
    fetchPlanetOverview,
    fetchPlanetStructure,
    fetchPlanetSurface,
    fetchPlanetData,
    mercury,
    venus
  };
});