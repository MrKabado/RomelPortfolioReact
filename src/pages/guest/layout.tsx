import { Outlet } from "react-router";

import { Header } from "../../components/common/header";
import { Footer } from "../../components/common/footer";

const pages = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function GuestLayout() {
  return (
    <>
      <Header pages={pages} />

      <main className="flex-1 px-25 py-10">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}