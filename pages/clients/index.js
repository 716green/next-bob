import Link from "next/link";

const clients = [
  {
    id: "ashland",
    display: "Ashland",
  },
  {
    id: "narro",
    display: "Narro",
  },
];

const ClientsPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Clients Page</h1>
      <ul>
        {clients?.map(({ id, display }) => (
          <li key={id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id },
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

export default ClientsPage;
