"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const images = [
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 1 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 2 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 3 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 4 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 5 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 6 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 7 " },
  { src: "/galery/kitchen-ex.JPEG", alt: "Projeto 8 " },
];

function Galery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galery" className="py-20 px-4 bg-gradient-to-b from-[#E1E7E1] to-[#F1EFE7]">
      <h2 className="text-3xl md:text-4xl text-center text-[#264653] font-serif mb-12 select-none">
        GALERIA
      </h2>

      <div className="max-w-5xl mx-auto columns-1 sm:columns-2 md:columns-2 gap-2 space-y-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="border-3 break-inside-avoid overflow-hidden shadow hover:shadow-lg transition-shadow select-none"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover rounded-xs hover:opacity-70 transition duration-300"
              loading="lazy" // Utilized to load the images after
            />
          </div>
        ))}
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
