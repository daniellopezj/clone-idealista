import Head from 'next/head'

import { Inter } from '@next/font/google'
import Navbar from '@/components/common/navbar/Navbar'
import MainView from '@/components/home/mainView/MainView'
import BodyHome from '@/components/home/bodyHome/BodyHome'
import Footer from '@/components/common/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container'>
        <Navbar/>
        <MainView/>
        <BodyHome/>
        aqui la primera vista
        aqui cualquier cosita bonita
        el footer y scale
        <Footer/>
      </div>
    </>
  )
}
