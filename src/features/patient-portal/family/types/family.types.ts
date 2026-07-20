export type FamilyRelation =
  | "Father"
  | "Mother"
  | "Brother"
  | "Sister"
  | "Spouse"
  | "Son"
  | "Daughter"
  | "Other";

export type FamilyMember = {
  id: string;
  fullName: string;
  relation: FamilyRelation;
  age: number;
  gender: "Male" | "Female" | "Other";
  mobile: string;
  bloodGroup: string;
};