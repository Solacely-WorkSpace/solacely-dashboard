export type User = {
  id: number;
  email: string;
  username: string;
  full_name: string;
  profile_image: string | null;
  phone_number: string;
  location: string;
  is_tenant: boolean;
  is_landlord: boolean;
  is_staff: boolean;
  is_verified: boolean;
  created_at: string; 
};
