import { Table } from "../../../../../Components/ui/table";
import UserEdits from "../../../../../Components/UserMgt/UserEdits";

const UserManagement = () => {
  return (
    <section className=" w-full flex flex-col">
      <UserEdits />
      <Table />
    </section>
  );
};

export default UserManagement;
