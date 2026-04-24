import { SiteHeader } from "@/components/raw/site-header";
import { SiteFooter } from "@/components/raw/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Lab } from "@/components/sections/lab";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Process />
        <Lab />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
