export class Planet {
  info: any;
  image: any;
  numbers: any;

  constructor(imgOverview: any, imgStruc: any, imgSurface: any) {
    this.info = {
      overview: "",
      structure: "",
      surface: "",
    };
    this.image = {
      overview: imgOverview,
      structure: imgStruc,
      surface: imgSurface,
    };
    this.numbers = {
      rotationTime: "8435",
      revolutionTime: "389",
      radius: "378",
      averageTemp: "38",
    };
  }
}
