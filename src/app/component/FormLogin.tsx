import Image from "next/image";
import Link from "next/link";

export default function FormLogin() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          
            <div className="padding-50 font-grey-200">
                <h1 className="fw-bold Gabarito-Regular mb-2">Login</h1> 
                <p className="Gabarito-Regular mb-3"> If you are already a member you can login with your email address and password.</p>      
                
                <div className="mb-3">
                    <input type="text" className="form-control padding-15 focus-green" placeholder="Email"></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control padding-15 focus-green" placeholder="Password"></input>
                </div>      
                <div className="form-check cursor">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                    <label className="form-check-label">
                        Remember Me
                    </label>
                </div>
                <button className="btn-login2 mt-3 mb-3">Login</button>  
                <p className="text-center">Dont have an account ? <Link href="../pages/SignUp1" className="font-core1">Sign up here</Link></p>    
            </div>

        </div>
      </div>
    </>
  );
}
