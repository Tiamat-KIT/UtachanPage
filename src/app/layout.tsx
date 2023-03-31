"use client"
import '../css/global.css';
import Navbar from "@/Component/Navbar"
import { SessionProvider } from "next-auth/react";
import Footer,{FooterItemProps} from '@/Component/Footer';
import localFont from "next/font/local"

const Myfont = localFont({src: [{path:"../../font/ringo.otf"}],adjustFontFallback: "Arial"})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Hobby: FooterItemProps[] = [
    {text:"ついったー",url:"https://twitter.com/Utakata1336"},
    {text:"ますとどん",url:"https://mstdn.jp/@UtakataKyosui"}
  ]

  const Dev: FooterItemProps[] = [
    {text: "きーた",url:"https://qiita.com/Tiamat-KIT"},
    {text: "ぜん" ,url:"https://zenn.dev/ayaextech_fill"},
    {text: "らぷらす",url: "https://lapras.com/public/UW09DHN"}
  ]

  return (
    <html lang="ja" className='bg-slate-50'>
      <body className={`${Myfont.className} font-sans`}>
        <SessionProvider>
          <Navbar />
          {children}
          {/* <hr className='divide-y pt-2'/> */}
          <div className='divider'/>
          <Footer HobbySNSList={Hobby} DevelopSNSList={Dev} />
        </SessionProvider>
      </body>
    </html>
  )
}
