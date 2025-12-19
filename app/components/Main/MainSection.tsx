import PublierAn from './button/voirAn';
import Text from "./text";

export default function MainSection() {

  return (
    <section className="flex flex-1 overflow-auto row-span-2 flex-col md:flex-row justify-center	md:justify-evenly items-center my-10"
    >

        <div className="flex flex-col justify-center items-center ">
          <Text />
          <PublierAn />
        </div>

        <iframe
            className="hidden md:block lg:w-[400px] lg:h-[330px] w-[300px] h-[250px]"
            src="https://www.youtube.com/embed/mo5PExrurGY?si=GER8ZI5lplDHf9-u"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>

    </section>
  );
}
