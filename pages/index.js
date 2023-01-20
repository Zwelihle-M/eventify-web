import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Aos from "aos";
import "aos/dist/aos.css"
import Pricing from "../components/Pricing";

export default function Home() {

  // Aos.init({
  //   duration: 3000,
  //   delay:200,
  // })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <About/>
      <Faq/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}
