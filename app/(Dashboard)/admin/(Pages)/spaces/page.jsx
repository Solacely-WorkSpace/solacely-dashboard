import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import Apartment from "@/Components/Space/Apartment";
const ApartmentPage = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title={"Apartment"} />
      <Apartment />
    </section>
  );
};

export default ApartmentPage;
