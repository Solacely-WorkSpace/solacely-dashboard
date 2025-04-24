import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import Table from "@/Components/UserMgt/Table";
import UserEdits from "@/Components/UserMgt/UserEdits";

const UserManagement = () => {
  return (
    <section className=" w-full flex flex-col">
      <AdminInfo title="User Management" />
      <UserEdits />
      <Table />
    </section>
  );
};

export default UserManagement;
