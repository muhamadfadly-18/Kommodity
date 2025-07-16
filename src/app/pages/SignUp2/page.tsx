import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import LoginCarousel from "@/app/component/LoginCarousel";
import FormSignUp2 from "@/app/component/FormSignUp2";
import Footer from "@/app/component/Footer";

export default function SignUp2() {
  return (
    <>
        <Navbar></Navbar> 
        <div className="h-100">
            <div className="row">
                <div className="col-lg-6">
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className="col-lg-6 align-content-center">
                    <FormSignUp2></FormSignUp2>
                </div>  
            </div>      
        </div>
        <Footer></Footer>  
    
    </>
  );
}
