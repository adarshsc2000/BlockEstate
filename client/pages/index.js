import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import Footer from "../components/Footer.jsx";
import Landing from "./Landing.jsx"
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navigationbar pageType="landing" />
      <Meta />
      <Landing />
      <Footer />
    </div>
  );
}
