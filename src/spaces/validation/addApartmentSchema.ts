import * as yup from "yup";

export const addApartmentSchema = yup.object().shape({
  title: yup.string().required("Property title is required"),
  price: yup
    .number()
    .typeError("Rent price must be a number")
    .positive("Price must be positive")
    .required("Rent price is required"),
  buildingType: yup.string().required("Building type is required"),
  period: yup.string().required("Period is required"),
  availability: yup.string().required("Availability is required"),
  agent: yup.string().required("Agent selection is required"),
  address: yup.string().required("Property address is required"),
  details: yup.string().required("Details are required"),
  areaSize: yup
    .number()
    .typeError("Area size must be a number")
    .positive("Must be a positive number")
    .required("Area size is required"),
  bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .integer()
    .min(0)
    .required("Number of bedrooms is required"),
  bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .integer()
    .min(0)
    .required("Number of bathrooms is required"),
  garage: yup
    .number()
    .typeError("Garage must be a number")
    .integer()
    .min(0)
    .required("Number of garage spaces is required"),

  vrVideoFiles: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Upload at least one VR video")
    .required(),
  videoFiles: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Upload at least one video")
    .required(),
  livingRoomImages: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Upload at least one living room image")
    .required(),

  homeDetails: yup
    .array()
    .of(
      yup.object().shape({
        key: yup.string().required("Key is required"),
        value: yup.string().required("Value is required"),
      })
    )
    .min(1, "At least one home detail is required"),

  homeDefects: yup
    .array()
    .of(
      yup.object().shape({
        key: yup.string().required("Title is required"),
        value: yup.string().required("Value is required"),
      })
    )
    .min(1, "At least one defect is required"),
});
