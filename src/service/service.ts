import { encryptData } from "../handler/cryptoHandler";
import dotenv from "dotenv";
import {
  appendObjectToFile,
  createOrModifyFile,
  readFileOutput,
} from "../handler/fileHandler";
import { Password } from "../model/passwordStructure";

dotenv.config();

export const savePassword = (passwordObject: Password) => {
  const array: object[] = createOrModifyFile();

  passwordObject["password"] = encryptData(passwordObject.password);
  array.push(passwordObject);

  appendObjectToFile(array);

  return passwordObject;
};

export const getAllPasswords = (): Password[] => {
  return readFileOutput();
};
