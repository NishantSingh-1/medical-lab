export type BookingStep =
  | "SEARCH"
  | "CART"
  | "PATIENT"
  | "COLLECTION"
  | "ADDRESS"
  | "SLOT"
  | "PRESCRIPTION"
  | "REVIEW";

export type CollectionType = "HOME" | "WALK_IN";

export type TestPackage = {
  id: string;
  title: string;
  type: "TEST" | "PACKAGE";
  price: number;
  reportTime: string;
};

export type Patient = {
  id: string;
  name: string;
  relation: string;
  age: string;
  gender: string;
};

export type Address = {
  id: string;
  fullName: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

export type Slot = {
  date: string;
  time: string;
  available: boolean;
};