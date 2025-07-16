import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import LoginCarousel from "@/app/component/LoginCarousel";
import FormSignUp1 from "@/app/component/FormSignUp1";
import Footer from "@/app/component/Footer";

export default function SignUp4() {
  return (
    <>
        <Navbar></Navbar>      
        <div className="h-100">
            <div className="row">
                <div className="col-lg-6">
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className="col-lg-6 text-center align-content-center">
                    <Image
                    src="/image/img-started1.png"
                    alt="Logo-white"
                    width={220}
                    height={260}
                    />
                    <h1 className="fw-medium font-grey-300">Let's Get Started</h1>  
                </div>  
            </div>      
        </div>
        <Footer></Footer>  
    </>
  );
}
