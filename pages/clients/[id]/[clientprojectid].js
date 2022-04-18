import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  const { clientprojectid, id } = router.query;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        The {clientprojectid} Project Page for {id}
      </h1>
    </div>
  );
};

export default SelectedClientProjectPage;
