import ServiceCard from "../ServiceCard";


function Services() {
    return (
        <div className="flex flex-col items-center p-20 bg-white">
            <h1 className="text-4xl text-center font-serif mb-12">SERVIÇOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
           
        </div>
    )
}

export default Services;