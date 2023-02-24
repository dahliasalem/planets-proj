import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import * as cheerio from "cheerio";
import { Planet } from "../model/planet";

const WIKI_SUMMARY = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const WIKI_SECTIONS =
  "https://en.wikipedia.org/api/rest_v1/page/mobile-sections/";

export const usePlanetStore = defineStore("planet", () => {
  const mercury = ref(new Planet());
  const venus = ref(new Planet());
  const earth = ref(new Planet());
  const mars = ref(new Planet());
  const jupiter = ref(new Planet());
  const saturn = ref(new Planet());
  const uranus = ref(new Planet());
  const neptune = ref(new Planet());

  async function fetchPlanetData() {
    mercury.value.info = await fetchPlanetInfo("Mercury_(planet)");
    venus.value.info = await fetchPlanetInfo("Venus");
    earth.value.info = await fetchPlanetInfo("Earth");
    mars.value.info = await fetchPlanetInfo("Mars");
    jupiter.value.info = await fetchPlanetInfo("Jupiter");
    saturn.value.info = await fetchPlanetInfo("Saturn");
    uranus.value.info = await fetchPlanetInfo("Uranus");
    neptune.value.info = await fetchPlanetInfo("Neptune");
  }
  async function fetchPlanetInfo(wikiId: string) {
    return {
      overview: await fetchPlanetOverview(wikiId),
      structure: await fetchPlanetStructure(wikiId),
      surface: await fetchPlanetSurface(wikiId),
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
      if (
        section.anchor == "Surface_geology" ||
        section.anchor == "Geography" ||
        section.anchor == "Composition" ||
        section.anchor == "Atmosphere" ||
        section.anchor == "Size and shape"
      ) {
        const $ = cheerio.load(section.text);
        const $p = $("p:first");
        return $p.text();
      }
    }
    return "";
  }

  return {
    fetchPlanetData,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
  };
});
