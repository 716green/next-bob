import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

const getClientProjects = (clientId) => {
  console.log({ clientId });
  const cid = clientId?.toLowerCase() || "";
  switch (cid) {
    case "ashland":
      return [
        { clientId: "midlanerecovery", display: "Midlane Recovery" },
        { clientId: "sbmacquisitions", display: "SBM Acquisition" },
      ];
    case "narro":
      return [
        { clientId: "debtos", display: "DebtOS" },
        { clientId: "projectnextapp", display: "Project NextApp" },
      ];
    default:
      return [];
  }
};

const ClientProjectsPage = () => {
  const router = useRouter();
  const [clientProjects, setClientProjects] = useState();

  const { id } = router.query;
  useEffect(() => {
    setClientProjects(getClientProjects(id));
  }, [id]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Client Projects for {id}</h1>
      <ul>
        {clientProjects?.map(({ display, clientId }, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: "/clients/[id]/[project]",
                query: { id, project: clientId },
              }}
            >
              {display}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientProjectsPage;
