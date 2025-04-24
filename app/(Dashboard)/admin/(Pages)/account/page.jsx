import Accounts from "@/Components/Accounts/Accounts";
import AdminInfo from "@/Components/AdminDashboard/AdminInfo";

const Account = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title="Account" />
      <Accounts />
    </section>
  );
};

export default Account;
