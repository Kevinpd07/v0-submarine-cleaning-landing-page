import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/*<Services />
      <Benefits />
      <Contact />*/}
      <Footer />
    </main>
  );
}
