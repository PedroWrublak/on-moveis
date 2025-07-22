import ServiceCard from "../ServiceCard";

const services = [
  {
    image: "/galery/living-room-ex.jpg",
    title: "LIVINGS",
    description: "Salas aconchegantes, elegantes e com seu estilo",
  },
  {
    image: "/galery/kitchen-ex.JPEG",
    title: "COZINHAS",
    description: "Praticidade, beleza e aproveitamento total do espaço.",
  },
  {
    image: "/banheiro-ex.jpg",
    title: "BANHEIROS",
    description: "Design clean, organização e sofisticação",
  },
  {
    image: "/galery/living-room-ex.jpg",
    title: "DORMITÓRIOS",
    description: "Planejados para otimizar espaço com conforto e personalidade",
  },
  {
    image: "/lavan-ex2.jpg",
    title: "LAVANDERIAS",
    description: "Lavanderias organizadas, funcionais e modernas",
  },
  {
    image: "/galery/living-room-ex.jpg",
    title: "ESCRITÓRIOS",
    description:
      "Ambientes planejados para produtividade, estilo e praticidade",
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center p-20 bg-[#e8e8e6]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#264653] font-serif mb-12 select-none">
        SERVIÇOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
