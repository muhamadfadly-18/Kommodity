import Image from "next/image";
import Link from "next/link";

export default function BannerCarouselHome() {
  return (
    <div className="bg-banner" style={{ backgroundColor: "#f0f0f0", padding: "0 10px" }}>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: "100%", // Lebar penuh
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div className="carousel-inner">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={(index + 1) * 10000}
            >
              <div className="position-relative w-100" style={{ height: "500px" }}>
                <Image
                  src="/image/img-banner1.png"
                  alt="Background"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className="position-absolute top-0 start-0 w-100 d-flex align-items-center"
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                  }}
                >
                  <div style={{ maxWidth: "70%" }}>
                    <h1 className="text-white mb-4">
                      The best products
                      <br />
                      from Indonesia's
                      <br />
                      most trusted suppliers
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
