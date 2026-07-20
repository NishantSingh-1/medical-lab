export type UserRole =
  | "PATIENT"
  | "STAFF"
  | "ADMIN";

export type RoleOption = {
  id: UserRole;
  title: string;
  description: string;
};