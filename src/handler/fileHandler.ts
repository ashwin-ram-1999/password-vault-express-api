import fs from "fs-extra";
import { FILENAME } from "../constants/constants";
import path from "path";
import { Password } from "../model/passwordStructure";

const filename = path.resolve(__dirname, process.env.FILENAME || FILENAME);

console.log(filename);
console.log(fs.existsSync(filename));

export const createOrModifyFile = () => {
  const contents: string = fs.readFileSync(filename, "utf8");
  const dataArray: object[] = contents.length === 0 ? [] : JSON.parse(contents);
  return dataArray;
};

export const appendObjectToFile = (obj: object) => {
  const dataToWrite = JSON.stringify(obj, null, 4);

  try {
    fs.writeFileSync(filename, dataToWrite, "utf8");
  } catch (err) {
    console.error(err);
  }
};

export const readFileOutput = (): Password[] => {
  const passwordArray: Password[] = JSON.parse(
    fs.readFileSync(filename, "utf8")
  );
  return passwordArray;
};
