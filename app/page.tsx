import Section1 from "../components/Main/section1";
import Section2 from "../components/Main/section2";
import NavBar from "../components/Navbar/NavBar";

export default function Home() {
  return (
    <main className="h-screen	">
      <NavBar />
      <Section1 />
      <Section2 />
    </main>
  );
}
