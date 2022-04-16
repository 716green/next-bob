import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Client Projects for {id}</h1>
    </div>
  );
};

export default ClientProjectsPage;
