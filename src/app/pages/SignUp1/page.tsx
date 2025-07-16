import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import LoginCarousel from "@/app/component/LoginCarousel";
import FormSignUp1 from "@/app/component/FormSignUp1";
import Footer from "@/app/component/Footer";

export default function SignUp1() {
  return (
    <>
       
        <div className="h-100">
            <div className="row">
                <div className="col-lg-6">
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className="col-lg-6 align-content-center">
                    <FormSignUp1></FormSignUp1>
                </div>  
            </div>      
        </div>
      
    </>
  );
}
