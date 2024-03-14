import { Request } from "express";

interface Any {
  [key: string]: any;
}

const requestBodyArray: string[] = ["website", "password", "username"];

function allKeysPresent(obj: Any): boolean {
  // Check for exactly 3 keys
  if (Object.keys(obj).length !== 3) {
    return false;
  }
  // Check if all keys are present and non-null/undefined
  return requestBodyArray.every(
    (key) =>
      key in obj &&
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== ""
  );
}

export const validateRequest = (req: Request): boolean => {
  return allKeysPresent(req.body) as boolean;
};
