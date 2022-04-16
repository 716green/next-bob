import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  const { clientprojectid, id } = router.query;
  return (
    <div>
      <h1>
        The {clientprojectid} Project Page for {id}
      </h1>
      <h2></h2>
    </div>
  );
};

export default SelectedClientProjectPage;
