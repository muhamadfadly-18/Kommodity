import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #08A199FF 0%, #00C3A5 100%)",
        padding: "50px 0",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 10px",
        }}
      >
        {/* FOOTER INFORMATION */}
        <div className="row mb-4">
          <div className="col-lg-12 mb-4">
            <Image
              src="/Logo/logo-commodity-white.png"
              alt="Logo-white"
              width={250}
              height={50}
            />
          </div>

          <div className="col-lg-3">
            <p className="text-white">
              Indosources is an export platform for Indonesian commodities based
              on demand overseas. We are focusing to raise the value of Indonesian
              commodity exporters and create new opportunities for Indonesian
              farmers and producers to upsell their products overseas with more
              dignity.
            </p>
          </div>

          <div className="col-lg-3">
            <h5 className="fw-bold text-white mb-2">Office:</h5>
            <p className="text-white mb-2">
              <strong>PT Indosources Export Indonesia</strong><br />
              Gedung Masindo. Jl. Mampang Prapatan Raya No. 73A, Jakarta Selatan
              12790 Indonesia
            </p>
            <p className="text-white mb-2">
              <strong>Indosources Trading LLP</strong><br />
              410 Seven Sisters Road, Finsbury Park, London N4 2LX, United Kingdom
            </p>

            <h5 className="fw-bold text-white mt-4 mb-2">Contact Us:</h5>
            <div className="d-flex">
              <div className="me-5">
                <h6 className="fw-bold text-white">Hotline</h6>
                <p className="text-white">+447423474190</p>
              </div>
              <div>
                <h6 className="fw-bold text-white">Email</h6>
                <p className="text-white">info@Indosources.tech</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="fw-bold text-white mb-3">Supported By:</h5>
            <div className="row">
              {[
                { href: "https://www.kemendag.go.id/", src: "/image/support1.png" },
                { href: "https://www.pertanian.go.id/", src: "/image/support4.png" },
                { href: "https://www.kemenperin.go.id/", src: "/image/support2.png" },
                { href: "https://www.britishchambers.org.uk/", src: "/image/support5.png" },
                { href: "https://nle.kemenkeu.go.id/", src: "/image/support3.png" },
                { href: "https://www.maritim.go.id/", src: "/image/support6.png" },
              ].map(({ href, src }, i) => (
                <div className="col-6 mb-3" key={i}>
                  <Link href={href} target="_blank">
                    <Image src={src} alt={`support-${i}`} width={160} height={60} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-2">
            <h5 className="fw-bold text-white mb-3">Certified:</h5>
            <Link href="https://www.kemendag.go.id/" target="_blank">
              <Image
                src="/image/indonesia-bisa.svg"
                alt="Certified"
                width={170}
                height={90}
                className="mb-3"
              />
            </Link>

            <div className="d-flex gap-2">
              {[
                { href: "https://www.linkedin.com/company/Indosourcestech/", src: "/icon/icon-linkin.svg" },
                { href: "https://www.facebook.com/", src: "/icon/icon-fb.svg" },
                { href: "https://www.instagram.com/", src: "/icon/icon-ig.svg" },
                { href: "https://www.youtube.com/", src: "/icon/icon-yt.svg" },
              ].map(({ href, src }, i) => (
                <Link href={href} key={i} target="_blank">
                  <Image src={src} alt={`social-${i}`} width={31} height={31} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <p className="text-white mb-2 mb-md-0">
            © 2025 Indosources. All rights reserved.
          </p>
          <div className="d-flex align-items-center gap-2 bg-white px-4 py-1 rounded-pill">
            <span className="fw-medium text-dark">Built with</span>
            <Image src="/icon/heart1.svg" alt="Heart" width={20} height={20} />
            <span className="fw-medium text-dark">in Indonesia</span>
          </div>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <Link href="/" className="text-white text-decoration-none fw-medium">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white text-decoration-none fw-medium">
              Cookie Policy
            </Link>
            <Link href="/" className="text-white text-decoration-none fw-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
