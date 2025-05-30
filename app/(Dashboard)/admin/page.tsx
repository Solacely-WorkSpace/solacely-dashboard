import Analytics from "../../../Components/AdminDashboard/Analytics";
import LineChart from "../../../Components/AdminDashboard/LineChart";
import View from "../../../Components/AdminDashboard/View";

const AdminDashboard = () => {
  return (
    <section className="flex flex-col mx-auto gap-4 w-full">
      <Analytics />
      <View />
      <LineChart />
    </section>
  );
};

export default AdminDashboard;
