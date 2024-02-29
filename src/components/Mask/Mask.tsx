"use client";
import { MaskContainer } from "@/components/Mask/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden font-mono">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            La definición de auténtico es tu estilo y lo forjamos acá J·Barber. Nuestro secreto? mostrarte tu mejor versión. J·Barber ~
          </p>
        }
      >
        La definición de autentico es tu estilo y lo forjamos acá<span className="text-cyan-500"> J·Barber. </span> Nuestro secreto? mostrarte tu mejor versión.<span className="text-cyan-500"> J·Barber ~</span>.
      </MaskContainer>
    </div>
  );
}
