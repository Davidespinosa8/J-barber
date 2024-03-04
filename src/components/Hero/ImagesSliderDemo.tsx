"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { Modal } from "@/components/Modal/Modal";

export default function ImagesSliderDemo() {
  const images = [
    "/assestment/teñido2.png",
    "/assestment/Chinfull.png",
    "/assestment/font2.png",
    "/assestment/execorte2.png",
    "/assestment/luz.png",
  ];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-radial from-cyan-500 to-blue-100 py-4 font-Oswald">
            Barberia con Estilo
          </motion.p>
          <button
            className="px-4 py-2 backdrop-blur-sm border bg-teal-300/10 border-teal-600/20 text-white mx-auto text-center rounded-full relative mt-4"
            onClick={() => setShowModal(true)}
          >
            <span>Turnos →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-800 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {showModal && (
        <Modal onClose={closeModal}>
          {/* Código del calendario de Calendly */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/j-barber/j-barber?month=2024-03" style={{ minWidth: '300px', maxWidth: '30vw', height: '600px', maxHeight: '60vh' }} />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </Modal>
      )}
    </>
  );
}
