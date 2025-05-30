import Endpoint from "@/api/Endpoint";

import { toast } from "react-toastify";
import { z } from "zod";

export const CurrencyFormatter = (data) => {
  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  
   return formatter.format(data);
} 

export const shortName = (fullname) => {
  const name = fullname;
  const splitName = name.split(" ");
  const firstName = splitName[0];
  const lastInitial = splitName[1] ? splitName[1][0] + "." : "";
  
  return `${firstName} ${lastInitial}`
}

export const UploadApartment = async (data, setIsLoading, user) => {
   const token = user?.tokens?.access;
  try {
      setIsLoading(true);
      console.log(token)
      const response = await Endpoint.post("apart/listings/", data, {headers: { Authorization: `Bearer ${token}`}});
      if(response.status === 200) {

         toast.success("Apartment Listed");
         
      } 
  } catch (error) {
    console.log("Error:", error.response?.data);
    toast.error("Something went wrong try again later");
  }finally {
    setIsLoading(false);
  }

}

