import * as yup from "yup";

export const addApartmentSchema = yup.object().shape({
  title: yup.string().required("Property title is required"),
  price: yup
    .number()
    .transform((value, originalValue) => {
      if (typeof originalValue === "string") {
        const numeric = Number(originalValue.replace(/[^0-9.-]+/g, ""));
        return isNaN(numeric) ? undefined : numeric;
      }
      return value;
    })
    .typeError("Rent price must be a number")
    .required("Rent price is required"),

  building_type: yup.string().required("Building type is required"),
  period: yup.string(),
  status: yup.string().required("Availability is required"),
  agent_email: yup.string(),
  location: yup.string().required("Property address is required"),
  description: yup.string().required("Details are required"),
  area_size_sqm: yup
    .number()
    .typeError("Area size must be a number")
    .positive("Must be a positive number")
    .required("Area size is required"),
  number_of_bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .integer()
    .min(0)
    .required("Number of bedrooms is required"),
  number_of_bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .integer()
    .min(0)
    .required("Number of bathrooms is required"),
  garage: yup.number().typeError("Garage must be a number").integer().min(0),
  vrVideoFiles: yup.array().of(yup.mixed<File>()),
  videoFiles: yup.array().of(yup.mixed<File>()),
  images: yup.array().of(yup.mixed<File>()),
  homeDetails: yup.array().of(
    yup.object().shape({
      key: yup.string(),
    })
  ),

  homeDefects: yup.array().of(
    yup.object().shape({
      key: yup.string(),
      value: yup.string(),
    })
  ),
});
