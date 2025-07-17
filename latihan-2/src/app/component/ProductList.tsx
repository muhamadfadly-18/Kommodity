import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <>
        <div className="bg-monochrome1">      
            
            <div className="d-flex justify-content-center padding-t-70 padding-b-100">
                <div className="col-lg-8">
                    <div className="text-center mb-5"> 
                        <h1 className="font-black fw-bold">Products</h1>
                    </div>
                      
                    <div className="d-flex justify-content-center pb-3">
                        <div className="row">
                            <div className="w-12p me-1 mb-4">
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
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Sugar.png"
                                        alt="Sugar"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="">Sugar</p>  
                                </div>      
                            </div>  
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Kelapa.png"
                                        alt="Coconut"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="">Coconut</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Teh.png"
                                        alt="Tea"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="">Tea</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Briket.png"
                                        alt="Briquette"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="">Briquette</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Kakao.png"
                                        alt="Cocoa"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="">Cocoa</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Sea-food.png"
                                        alt="Seafood"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Seafood Fresh Water</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Tropic-Fruit.png"
                                        alt="Seafood"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Tropical Fruit & Veggies</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Furniture.png"
                                        alt="Furniture"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Furniture & Rattan</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Fabric-leather.png"
                                        alt="Furniture"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Fabric & Leather</p>  
                                </div>      
                            </div> 
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Spicey-Nuts.png"
                                        alt="spices"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Spices & Nuts</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Essential-Oil.png"
                                        alt="Essence"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Essence</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Palm.png"
                                        alt="Palm"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Palm</p>  
                                </div>      
                            </div>
                            <div className="w-12p me-1 mb-4">
                                <div className="w-100 h-100 text-center card-product1 padding-20 radius-10">
                                    <Image
                                        src="/img-product/Others.png"
                                        alt="Others"
                                        width={75}
                                        height={75}
                                    />
                                    <p className="text-line-16">Others</p>  
                                </div>      
                            </div>
                        </div>  
                    </div>
                    <div className="text-center">
                        <button className="btn-crome1">SEE MORE OUR CATALOG</button>
                    </div>  
                </div>      
            </div>
         
        </div>  
       
    </>

  );
}
