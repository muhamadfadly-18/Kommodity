import Image from "next/image";
import Link from "next/link";

export default function FormSignUp2() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          
            <div className="padding-50 font-grey-200">
                      
                <Link href="../pages/SignUp1" className="font-grey-200 d-flex margin-b-100">
                <div className="align-content-center">
                    <Image
                    src="/icon/icon-left1.png"
                    alt="Logo-white"
                    width={15}
                    height={15}
                    />
                </div>
                <p className="margin-l-5 margin-t-3 align-content-center">Back</p>
                </Link>
                <h1 className="fw-bold Gabarito-Regular mb-2">Create Password</h1> 
                <p className="Gabarito-Regular mb-3"> Your password must be at least 8 characters including a lowercase letter, an uppercase letter.</p>      
                
                <div className="mb-3">
                    <input type="password" className="form-control padding-15 focus-green" placeholder="Password"></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control padding-15 focus-green" placeholder="Confirm Password"></input>
                </div>      
                <Link href="../pages/SignUp3"><button className="btn-login2 mt-3 mb-3">continue</button></Link>
            </div>

        </div>
      </div>
    </>
  );
}
