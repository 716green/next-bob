import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  const toPreviousPage = () => router.back();

  return (
    <button
      style={{
        border: "none",
        borderRadius: "0.2rem",
        background: "none",
        cursor: "pointer",
      }}
      onClick={toPreviousPage}
    >
      🔙
    </button>
  );
};

export const HomeButton = () => {
  const router = useRouter();
  const toHomePage = () =>
    router.push({
      pathname: "/",
    });

  return (
    <button
      style={{
        border: "none",
        borderRadius: "0.2rem",
        background: "none",
        cursor: "pointer",
      }}
      onClick={toHomePage}
    >
      🏠
    </button>
  );
};
