import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import LoginCarousel from "@/app/component/LoginCarousel";
import FormLogin from "@/app/component/FormLogin";
import Footer from "@/app/component/Footer";

export default function Login() {
  return (
    <>
        <Navbar></Navbar> 
        <div className="h-100">
            <div className="row">
                <div className="col-lg-6">
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className="col-lg-6 align-content-center">
                    <FormLogin></FormLogin>
                </div>  
            </div>      
        </div>
        <Footer></Footer>  
    
    </>
  );
}
