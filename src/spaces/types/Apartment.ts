export type Apartment = {
  id: number;
  agent: number;
  amenities: string;
  area_size_sqm: number | null;
  building_type: BuildingType;
  created_at: string;
  updated_at: string;
  description: string;
  has_visitor_bathroom: boolean;
  latitude: number;
  longitude: number;
  location: string;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  price: string;
  status: ListingStatus;
  title: string;
  images: any[]
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
