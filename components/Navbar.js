import Link from "next/link";

import { HomeButton, BackButton } from "../components/Buttons";
const Navbar = () => {
  return (
    <nav
      style={{
        width: "80%",
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        fontSize: "1.2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "75px",
          justifyContent: "space-between",
        }}
      >
        <HomeButton />
        <BackButton />
      </div>
      <Link href="/blog/">Blog</Link>
      <Link href="/clients">Clients</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
};

export default Navbar;
