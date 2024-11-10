import Image from "next/image";
import Header from "./src/componets/header";
import HomeSection from "./src/componets/container/sectionone";
import SectionAbout from "./src/componets/container/sectionTwo";
import EventSection from "./src/componets/container/sectionThree";

export default function Home() {
  return (
    <div className=" ">

      <main className="">

        <HomeSection />
        <SectionAbout />
        <EventSection />
        <Header />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div >
  );
}
