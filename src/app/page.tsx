import { SiteHeader } from "@/components/raw/site-header";
import { SiteFooter } from "@/components/raw/site-footer";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stack } from "@/components/sections/stack";
import { Lab } from "@/components/sections/lab";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Manifesto />
        <Services />
        <Process />
        <Stack />
        <Lab />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
