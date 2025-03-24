import { parse } from "csv-parse";
import fs from "fs";

export const loadFile = async () => {
  return new Promise((resolve, reject) => {
    const result = [];
    // will be usign streams incase that there are alot of data
    fs.createReadStream("data/kepler_data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true, // this will return each row as a key value pair
        })
      )
      .on("data", (row) => {
        if (returnHabitablePlanets(row))
          // filter out unwanted planets based on a condition.
          result.push(row);
      })
      .on("end", () => {
        console.log("parsing is done");
        console.log("total planets that meet the condition ", result.length);
        resolve(
          result.map((planet) => {
            return planet["kepler_name"];
          })
        );
      })
      .on("error", (error) => {
        console.error("Error reading file:", error);
        reject(error);
      });
  });
};

const returnHabitablePlanets = (planet) => {
  const res =
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6;
  return res;
};
