import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import PartnerComponenent from "@/Components/Partner/Partner";

const Partner = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title=" Partners " />
      <PartnerComponenent />
    </section>
  );
};

export default Partner;
