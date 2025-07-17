"use client";

export default function BackButton() {
  return (
    <button
      type="button"
      className="btn p-0 border-0 bg-transparent d-flex align-items-center"
      onClick={() => window.history.back()}
      style={{ color: "#000000", fontWeight: 500, fontSize: "25px" }}
    >
    <i className="bi bi-arrow-left-square-fill me-2 mt-1"></i> Request Quotation

    </button>
  );
}
