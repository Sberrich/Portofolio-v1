import Hero from "@/components/Hero";
import {HeroHighlightDemo} from "@/components/HeroHighlightDemo";
import {FloatingNav} from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
export default function Home() {
  return (
  <div className="relative bg-black-100 flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className=" w-full">
      <FloatingNav navItems={navItems}/>
      {/* <Hero/> */}
      <HeroHighlightDemo/>
      <Grid/>
    </div>
  </div>
  );
}
