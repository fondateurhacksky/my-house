// import Section2 from "../components/Main/section2";
import NavBar from "./ui/NavBar";
import Footer from "./ui/footer";
import MainSection from "../components/Main/MainSection";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <NavBar />
      <MainSection />
      <Footer/>
    </main>
  );
}
