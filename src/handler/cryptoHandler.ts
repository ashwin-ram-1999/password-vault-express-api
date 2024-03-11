import * as crypto from "crypto";

export const encryptData = (password: string): string => {
  const algorithm: string = "aes-256-cbc";
  const key: Buffer = crypto.randomBytes(32); // For AES-256, a 32-byte key is required
  const iv: Buffer = crypto.randomBytes(16); // CBC mode needs a 16-byte IV

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
};

export const decryptData = (encrypted: string): string => {
  const algorithm: string = "aes-256-cbc";
  const key: Buffer = crypto.randomBytes(32); // For AES-256, a 32-byte key is required
  const iv: Buffer = crypto.randomBytes(16); // CBC mode needs a 16-byte IV

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
