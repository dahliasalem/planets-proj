type Info = {
  overview: string;
  structure: string;
  surface: string;
};

type Numbers = {
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
};

export class Planet {
  info: Info;
  numbers: Numbers;

  constructor() {
    this.info = {
      overview: "",
      structure: "",
      surface: "",
    };
    this.numbers = {
      rotationTime: "8435",
      revolutionTime: "389",
      radius: "378",
      averageTemp: "38",
    };
  }
}