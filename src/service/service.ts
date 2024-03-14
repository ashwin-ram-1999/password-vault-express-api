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
    id: currentId,
    website: passwordObject.website,
    username: passwordObject.username,
    password: passwordObject.password,
  };

  updatedWithId["password"] = encryptData(updatedWithId.password);
  array.push(updatedWithId);

  appendObjectToFile(array);

  return updatedWithId;
};

export const getAllPasswords = (): Password[] => {
  return readFileOutput();
};

// export const getPasswordById = (): Password => {};
