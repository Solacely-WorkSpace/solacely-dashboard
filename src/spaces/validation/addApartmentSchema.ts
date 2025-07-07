import * as yup from "yup";

export const addApartmentSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  agentId: yup.string().uuid().optional(),

  price: yup.number().positive().optional(),
  period: yup
    .mixed()
    .oneOf(["MONTHLY", "WEEKLY", "DAILY", "YEARLY"])
    .optional(),
  type: yup
    .mixed()
    .oneOf(["APARTMENT", "HOUSE", "OFFICE", "SHOP"])
    .optional(),
  avalaibilty: yup
    .mixed()
    .oneOf(["NOW", "SOON", "FUTURE"])
    .optional(),
  spaceType: yup
    .mixed()
    .oneOf(["SHARED", "PRIVATE"])
    .optional(),
  buidlingType: yup
    .mixed()
    .oneOf(["HOUSE", "FLAT", "TOWNHOUSE", "DUPLEX", "VILLA"])
    .optional(),

  address: yup.object().shape({
    street: yup.string().optional().nullable(),
    city: yup.string().optional().nullable(),
    state: yup.string().optional().nullable(),
    country: yup.string().optional().nullable(),
    zipCode: yup.string().optional().nullable(),
    latitude: yup.number().optional(),
    longitude: yup.number().optional(),
  }),

  details: yup.object().shape({
    phone: yup.string().optional().nullable(),
    email: yup.string().email().optional().nullable(),
    area: yup.number().required("Area is required"),
    bedrooms: yup.number().required("Bedrooms are required"),
    bathrooms: yup.number().optional(),
    garage: yup.number().optional(),
    airCondition: yup.number().optional(),
    desks: yup.number().optional(),
    capacity: yup.number().optional(),
  }),

  paymentBreak: yup.object().shape({
    ligthFee: yup.number().required("Light Fee is required"),
    securityFee: yup.number().required("Security Fee is required"),
    estateDue: yup.number().required("Estate Due is required"),
    bin: yup.number().required("Bin Fee is required"),
  }),

  files: yup
    .array()
    .of(
      yup.object().shape({
        fileId: yup.string().uuid().required(),
        type: yup
          .mixed()
          .oneOf(["IMAGE", "VIDEO", "VR", "FLOOR_PLAN"])
          .required(),
      })
    )
    .optional(),
});
