import Image from "next/image";
import Link from "next/link";

export default function ChooseInterest() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          
            <div className="padding-50 font-grey-200">
                    <div className="d-flex justify-content-center">
                        <div className="col-lg-8">
                              
                            <Link href="../pages/SignUp2" className="font-grey-200 d-flex margin-b-20">
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

                            <h1 className="fw-normal mb-5">Choose Your Interest 2/3</h1>      
                            <div className="row">
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Kopi.png"
                                            alt="coffee"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Coffee</p>  
                                    </div>
                                </div> 
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Sugar.png"
                                            alt="coffee"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Sugar</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Kelapa.png"
                                            alt="coffee"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Kelapa</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Teh.png"
                                            alt="coffee"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Tea</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Briket.png"
                                            alt="Briquette"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Briquette</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Kakao.png"
                                            alt="Cocoa"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Cocoa</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Sea-food.png"
                                            alt="Sea-food"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Seafood Fresh Water</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Tropic-Fruit.png"
                                            alt="Tropic-Fruit"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Tropical Fruit & Veggies</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Furniture.png"
                                            alt="Furniture"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Furniture & Rattan</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Fabric-leather.png"
                                            alt="Fabric-leather"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Fabric & Leather</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Spicey-Nuts.png"
                                            alt="Spicey-Nuts"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Spices & Nuts</p>  
                                    </div>
                                </div>
                                <div className="col-lg-2 mb-4">
                                    <div className="w-100 h-100 text-center card-product1 padding-20 radius-10 ">
                                        <Image
                                            src="/img-product/Essential-Oil.png"
                                            alt="Essential-Oil"
                                            width={75}
                                            height={75}
                                        />
                                        <p className="">Essence</p>  
                                    </div>
                                </div>  
                            </div>
                        </div> 
                    </div>
                    
                <div className="text-center">
                    <Link href="../pages/SignUp4">          
                        <button className="btn-crome1 mt-3 mb-3">CONTINUE</button>
                    </Link>          
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
