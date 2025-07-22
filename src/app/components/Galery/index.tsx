"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import Image from 'next/image'

const images = [
  { src: "/banheiro-ex.jpg", alt: "Projeto 1 ", span: 2 },
  { src: "/galery/living-room-ex.jpg", alt: "Projeto 2 ", span: 1 },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 5 ", span: 1 },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 8 ", span: 1 },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 9 ", span: 1 },
  { src: "/banheiro-ex.jpg", alt: "Projeto 6 ", span: 2 },
  { src: "/lavan-ex2.jpg", alt: "Projeto 2 ", span: 2 },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 9 ", span: 1 },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 9 ", span: 1 },
];

function Galery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="galery"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-80 bg-gradient-to-b from-[#f5f5f5] to-[#eaeaea]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#545a5b] font-serif mb-12 select-none">
        GALERIA
      </h2>

      <div className="mx-auto columns-1 sm:columns-2 md:columns-3 gap-2 space-y-4">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className=" break-inside-avoid overflow-hidden shadow hover:shadow-lg transition-shadow select-none"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className={`w-full ${
                  img.span === 2 ? "h-[61vh]" : "h-[30vh]" // Replace for REM if needed
                } object-cover rounded-xs hover:opacity-70 transition duration-300`}
                width={800}
                height={400}
                loading="lazy" // Utilized to load the images after
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close on click out of the image
          >
            <button
              className="absolute top-10 right-10 text-white hover:text-red-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div
              className="relative max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Galery;
