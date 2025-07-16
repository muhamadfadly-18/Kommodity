import Image from "next/image";
import Link from "next/link";

export default function LoginCarousel() {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="position-relative w-100 hg-100p">
                  <Image
                    src="/image/img-login1.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="20000">
                <div className="position-relative w-100 hg-100p">
                  <Image
                    src="/image/img-login2.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
