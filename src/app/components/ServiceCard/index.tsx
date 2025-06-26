import Image from "next/image";

function serviceCard() {
  return (
    <section id="services" className="scroll-mt-28">

    
    <div className=" flex flex-col bg-white rounded-2xl overflow-hidden hover:opacity-70 transition-shadow">
      <div className="relative h-[15rem]">
        <Image
          src="/galery/living-room-ex.jpg"
          alt="Imagem do mobiliário"
          fill
          className="object-cover z-0"
        />
      </div>
    <div className="p-6 text-center z-10 bg-amber-100 select-none">
        <h2 className="text-2xl font-serif mb-2 text-black">SALA</h2>
        <p className="font-serif text-black">Ambiente altamente personlizável</p>
    </div>
    </div>
    </section>
  );
}

export default serviceCard;
