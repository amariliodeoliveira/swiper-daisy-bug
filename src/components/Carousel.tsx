"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const mockData = [
  {
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "João Silva",
    role: "Designer Gráfico",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Maria Souza",
    role: "Engenheira de Software",
  },
  {
    testimony: "Serviço rápido e de muita qualidade.",
    name: "Carlos Oliveira",
    role: "Empreendedor",
  },
  {
    testimony: "Recomendo a todos que buscam excelência.",
    name: "Ana Paula",
    role: "Médica",
  },
  {
    testimony: "Uma das melhores experiências que já tive.",
    name: "Rafael Lima",
    role: "Arquiteto",
  },
  {
    testimony: "Fiquei muito satisfeito com o resultado.",
    name: "Fernanda Alves",
    role: "Consultora de Negócios",
  },
] as const;

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      className="size-full"
    >
      {mockData.map(({ testimony, name, role }, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col h-full items-center justify-center">
            {/* Chat Bubble */}
            <div className="chat chat-start">
              <div className="chat-bubble max-w-xs bg-base-300 bg-opacity-50 p-6 text-base-content">
                {testimony}
              </div>
            </div>

            {/* Info */}
            <span className="mt-4 inline-flex items-center justify-start gap-4">
              {/* Avatar */}
              <div className="avatar">
                <div className="size-12 rounded-full overflow-hidden">
                  <img
                    className="size-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <p className="font-bold">{name}</p>
                <small className="font-light">{role}</small>
              </div>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
