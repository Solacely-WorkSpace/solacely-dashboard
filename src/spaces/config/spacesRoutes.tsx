import { lazy } from "react";
import SPACES_ROUTES from "./spacesRouteList";
import AuthLayout from "../../common/layouts/AuthLayout";

const ApartmentList = lazy(() => import("../pages/apartment/ApartmentList"));
const AddApartment = lazy(() => import("../pages/apartment/AddApartment"));
const ApartmentView = lazy(() => import("../pages/apartment/ApartmentView"));

const apartmentRoutes = {
  path: SPACES_ROUTES.BASE.PATH,
  element: <AuthLayout />,
  children: [
    { path: SPACES_ROUTES.APARTMENT.PATH, element: <ApartmentList /> },
    { path: SPACES_ROUTES.ADD_APARTMENT.PATH, element: <AddApartment /> },
    { path: SPACES_ROUTES.VIEW_APARTMENT.PATH, element: <ApartmentView /> },
    { path: SPACES_ROUTES.UPDATE_APARTMENT.PATH, element: <AddApartment /> },
  ],
};

export default apartmentRoutes;
