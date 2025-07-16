import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/Navbar";
import ProductCategory from "./component/ProductCategory";
import Bestseller from "./component/Bestseller";
import ContactDetail from "./component/ContactDetail";
import Footer from "./component/Footer";
import Login from "./pages/Login/page";
import BannerCarouselHome from "./component/BannerCarousellHome";



export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <BannerCarouselHome></BannerCarouselHome>
      <ProductCategory></ProductCategory>
      <Bestseller></Bestseller>
      <ContactDetail></ContactDetail>
      {/* <Footer></Footer> */}
    </>
  );
}
