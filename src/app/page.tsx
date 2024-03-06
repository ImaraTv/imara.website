import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CarouselHome } from '@/components/Carousel'
import { Trending } from '@/components/Trending'
import {Recommended} from "@/components/Recommended";
import {ActorsHero} from "@/components/ActorsHero";
import {Newsletter} from "@/components/Newsletter";


export default function Home() {
  return (
    <>
      <Header />
      <main>
         <CarouselHome />
          <Trending />
          <Recommended />

          <ActorsHero />

          <Newsletter />



      </main>
        <Footer/>
    </>
  )
}
