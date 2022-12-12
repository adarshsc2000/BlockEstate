import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import Footer from "../components/Footer.jsx";
import Landing from "./Landing.jsx";
import Image from 'next/image';
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navigationbar pageType="landing" />
      <Meta />
      <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image 
          src="/assets/landingpage.jpg"
          alt="Mountains with snow"
          layout="fill"
          objectFit='cover'
        />
      </div>
      <Landing />
    </>
      
      <Footer />
    </div>
  );
}
