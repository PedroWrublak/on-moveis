import Image from "next/image";
import PageHeader from "./components/PageHeader";
import HomeImage from "./components/HomeImage";
import Services from "./components/Services";
import Galery from "./components/Galery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <PageHeader />
      <HomeImage />
      <Services />
      <Galery />
      <Contact />
    </>
  );
}
