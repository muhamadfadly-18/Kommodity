"use client";

import Image from "next/image";

export default function BackButton() {
  return (
    <button
      type="button"
      className="btn p-0 border-0 bg-transparent d-flex align-items-center"
      onClick={() => window.history.back()}
    >
      <Image
        src="/icon/Arrow.png"
        alt="Back"
        width={24}
        height={24}
        className="me-2"
      />
      <Image
        src="/icon/Teks-requestion.png"
        alt="Request Quotation"
        width={150}
        height={30}
      />
    </button>
  );
}
