import BaseAPIService from "../../common/services/BaseAPIService";

class ApartmentService extends BaseAPIService {
  constructor() {
    super("/apart/listings");
  }

}

export const apartmentService = new ApartmentService();
