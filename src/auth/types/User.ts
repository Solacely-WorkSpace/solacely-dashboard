export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  gender: string | null;
  verifiedAt: string | null;
  AgentProfile: AgentProfile[];
  CustomerProfile: CustomerProfile[];
  LandlordProfile: LandlordProfile[];
  UserRoles: UserRole[];
};

export type AgentProfile = {
  id: string;
  userId: string;
  gender: string | null;
};

export type CustomerProfile = {
  id: string;
  userId: string;
  gender: string | null;
  dob: string | null;
  addressId: string | null;
  phone: string;
  whatsapp: string | null;
  createdAt: string;
  updatedAt: string;
};

export type LandlordProfile = {
  id: string;
  userId: string;
  gender: string | null;
};

export type UserRole = {
  id: string;
  userId: string;
  role: "USER" | "AGENT" | "CUSTOMER" | "LANDLORD" | "ADMIN";
  createdAt: string;
  updatedAt: string;
};
