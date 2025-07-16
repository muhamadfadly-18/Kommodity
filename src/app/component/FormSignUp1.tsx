import Image from "next/image";
import Link from "next/link";

export default function FormSignUp1() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="padding-50 font-grey-200">
            <Link
              href="../pages/Login"
              className="font-grey-200 d-flex margin-b-50"
            >
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

            <h1 className="fw-bold Gabarito-Regular mb-2">Sign Up</h1>
            <p className="Gabarito-Regular mb-3">
              {" "}
              Become a diaspora member and grow together.
            </p>

            <div className="row mb-3 ">
              <div className="col">
                <input
                  type="text"
                  className="form-control padding-15 focus-green"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control padding-15 focus-green"
                  placeholder="Last Name"
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control padding-15 focus-green"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control padding-15 focus-green"
                placeholder="Phone"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control padding-15 focus-green"
                placeholder="Address"
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                rows={5}
                className="form-control padding-15 focus-green"
                placeholder="Reason to be Diaspora"
              />
            </div>
            <div className="form-check cursor">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="checkDefault"
              ></input>
              <label className="form-check-label">
                I accept Komodity's{" "}
                <Link href="/" className="font-core1">
                  Term & Condition
                </Link>{" "}
                &{" "}
                <Link href="/" className="font-core1">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Link href="../pages/SignUp2">
              <button className="btn-login2 mt-3 mb-3">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
