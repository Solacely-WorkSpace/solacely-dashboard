import AdminInfo from "@/Components/AdminDashboard/AdminInfo";
import Commentts from "@/Components/Comments/Commentts";

const CommentsPage = () => {
  return (
    <section className=" w-full flex flex-col gap-10">
      <AdminInfo title="Comments" />
      <Commentts />
    </section>
  );
};

export default CommentsPage;
