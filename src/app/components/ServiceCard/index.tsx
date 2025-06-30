import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

function serviceCard({image, title, description}: ServiceCardProps) {
  return (
    <section id="services" className="scroll-mt-28">

    <a href="#services">
    <div className=" flex flex-col bg-white rounded-md overflow-hidden hover:opacity-70 transition-shadow">
      <div className="relative h-[15rem]">
        <Image
          src={image}
          alt="Imagem do mobiliário"
          fill
          className="object-cover z-0"
        />
      </div>
    <div className="p-6 text-center z-10 bg-[#D9E5DE] select-none">
        <h2 className="text-2xl font-serif mb-2 text-black">{title}</h2>
        <p className="font-serif text-black">{description}</p>
    </div>
    </div></a>
    </section>
  );
}

export default serviceCard;
