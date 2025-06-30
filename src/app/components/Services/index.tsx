import ServiceCard from "../ServiceCard";

const services = [
    {
        image: "/galery/living-room-ex.jpg",
        title: "SALA",
        description: "Elegância, conforto e funcionalidade"
    },
    {
        image: "/galery/kitchen-ex.JPEG",
        title: "COZINHAS",
        description: "Elegância, conforto e funcionalidade"
    },
    {
        image: "/galery/living-room-ex.jpg",
        title: "BANHEIROS",
        description: "Elegância, conforto e funcionalidade"
    },
    {
        image: "/galery/living-room-ex.jpg",
        title: "DORMITÓRIOS",
        description: "Elegância, conforto e funcionalidade"
    },
    {
        image: "/galery/living-room-ex.jpg",
        title: "LAVANDERIAS",
        description: "Elegância, conforto e funcionalidade"
    },
    {
        image: "/galery/living-room-ex.jpg",
        title: "ESCRITÓRIOS",
        description: "Elegância, conforto e funcionalidade"
    },
    
]


function Services() {
    return (
        <div className="flex flex-col items-center p-20 bg-white">
            <h1 className="text-4xl text-center font-serif mb-12">SERVIÇOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {services.map((item, index) => (
                    <ServiceCard key={index} image={item.image} title={item.title} description={item.description} />
                ))}
                
            </div>
           
        </div>
    )
}

export default Services;