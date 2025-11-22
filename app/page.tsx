// import Section2 from "../components/Main/section2";
import NavBar from '@/app/ui/NavBar';
import Footer from "@/app/ui/footer";
import MainSection from "@/components/Main/MainSection";

export default function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      <MainSection />
      <Footer/>
    </main>
  );
}
