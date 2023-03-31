// "use client"

import Carousel,{CarouselItem} from "@/Component/Carousel"
import Container from "@/Component/Container"
import MicroCMSMyProfile from "@/Component/MicroCMSMyProfile"
import SeoComponent from "@/Component/SEO/SEO"
import { Metadata } from "next"
import dynamic from "next/dynamic"

export async function generateMetadata(): Promise<Metadata>{
    const title = "ウタちゃんのお部屋"
    return SeoComponent({
      title: title,
      description: title,
      url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
      imageUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${title}`
    }
  )
}

const TwitterTimeLine = dynamic(() => import("Component/TwitterTL"),{
  loading: () => (
    <h1 className="text-xl">Loading Utakata's Tweet's Data</h1>
  ),
  ssr: false
})

export const revalidate = 0;

export default async function Home(){

  const Item: CarouselItem[] = [
    {
      src: "/header.png",
      alt: "泡沫京水がよく使うヘッダー画像"
    },
  ]

  return (
    <>
      <Container>
        <Carousel CarouselList={Item}/>
      </Container>
      <Container Other="py-5">
        <div className="card shadow-xl">
          <div className="card-body card-bordered	bg-white">{await MicroCMSMyProfile()}</div>
        </div>
      </Container>
    </>
  )
}

// https://zenn.dev/denham/articles/b2378462d54823
// https://ogp.buta3.net/