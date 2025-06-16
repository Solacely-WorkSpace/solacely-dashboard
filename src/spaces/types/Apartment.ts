export type Apartment = {
  id: number;
  title: string;
  date: number;
  location: string;
  amount: string;
  status: string;
  type: string;
};

export type ListingStatus = "available" | "rented" | "pending" | "unavailable";

export type ImageType =
  | "bedroom"
  | "bathroom"
  | "kitchen"
  | "living_room"
  | "exterior"
  | "visitor_bathroom"
  | "thumbnail"
  | "other";

export type BuildingType =
  | "apartment"
  | "studio"
  | "bungalow"
  | "duplex"
  | "semi_detached_apartment"
  | "other";
