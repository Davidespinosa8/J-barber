import { Header } from '@/components/Header/Header'
import ImagesSliderDemo from '@/components/Hero/ImagesSliderDemo'
import { Servicios } from '@/components/Banner/Servicios'
import { SVGMaskEffectDemo } from '@/components/Mask/Mask'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
  <>
    <Header />
      <ImagesSliderDemo />
    <main>
      <Servicios />
      <SVGMaskEffectDemo />
      </main>
      <Footer />
  </>
  )
}
