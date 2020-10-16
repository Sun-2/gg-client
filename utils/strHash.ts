import hash from "string-hash";

export const strHash = (string: string) => {
  return Math.abs(hash(string)).toString();
};
