import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import CustomerPage from "@/Components/Customer/CustomerPage";

const Customers = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title="Customers" />
      <CustomerPage />
    </section>
  );
};

export default Customers;
