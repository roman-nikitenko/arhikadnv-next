import { Body } from "@/components/Body";
import { CallMe } from "@/components/CallMe";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <>
      <CallMe />
      <Header />
      <Body />
      <Footer />
    </>
  );
}
