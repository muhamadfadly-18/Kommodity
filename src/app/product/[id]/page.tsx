import { notFound } from 'next/navigation';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Di sini kamu bisa fetch detail API atau cari di array lokal
  // Contoh sederhana:
  // const product = await fetch(`/api/products/${id}`).then(r => r.json());

  if (!id) return notFound();

  return (
    <div className="container my-5">
      <h1>Detail Produk #{id}</h1>
      <p>Konten detail produk di sini…</p>
    </div>
  );
}
