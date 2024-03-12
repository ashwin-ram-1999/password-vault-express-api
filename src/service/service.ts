import { encryptData } from "../handler/cryptoHandler";
import dotenv from "dotenv";
import {
  appendObjectToFile,
  createOrModifyFile,
  getCurrentId,
  readFileOutput,
} from "../handler/fileHandler";
import { Password } from "../model/passwordStructure";

dotenv.config();

let currentId: number = getCurrentId();

export const savePassword = (passwordObject: Password): Password => {
  const array: object[] = createOrModifyFile();

  currentId++;
  let updatedWithId: Password = {
    ...passwordObject,
    id: currentId,
  };

  updatedWithId["password"] = encryptData(updatedWithId.password);
  array.push(updatedWithId);

  appendObjectToFile(array);

  return passwordObject;
};

export const getAllPasswords = (): Password[] => {
  return readFileOutput();
};

// export const getPasswordById = (): Password => {};
