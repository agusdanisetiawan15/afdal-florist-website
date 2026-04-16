export interface Product {
  id: string;
  name: string;
  category: "buket" | "papan" | "standing" | "meja" | "kustomisasi";
  image: string;
  price: string;
}

export const WHATSAPP_NUMBER = "6288905882925";

export const STORE_INFO = {
  name: "Afdal Florist",
  address:
    "Jl. Siliwangi, RT.01/RW.02, Rangkasbitung Tim., Kec. Rangkasbitung, Kabupaten Lebak, Banten 42313",
  whatsapp: WHATSAPP_NUMBER,
  instagram: "#",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d106.2556478!3d-6.3626386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4211a305fed0c3%3A0xbcf87642595c816e!2sAfdal%20Florist!5e0!3m2!1sid!2sid",
  googleMapsLink:
    "https://maps.app.goo.gl/UPFh16xNFdTaimGV9",
};

export const products: Product[] = [
  // Buket Bunga
  { id: "buket-1", name: "Buket Mawar Merah", category: "buket", image: "/images/katalog-1-removebg-preview.png", price: "Hubungi Kami" },
  { id: "buket-2", name: "Buket Bunga Campuran", category: "buket", image: "/images/katalog-2-removebg-preview.png", price: "Hubungi Kami" },
  { id: "buket-3", name: "Buket Bunga Elegan", category: "buket", image: "/images/katalog-3-removebg-preview.png", price: "Hubungi Kami" },
  { id: "buket-4", name: "Buket Bunga Premium", category: "buket", image: "/images/katalog-4-removebg-preview.png", price: "Hubungi Kami" },
  { id: "buket-5", name: "Buket Bunga Spesial", category: "buket", image: "/images/katalog-6-removebg-preview.png", price: "Hubungi Kami" },
  // Papan Bunga
  { id: "papan-1", name: "Papan Duka Cita #1", category: "papan", image: "/images/papan-dukacita-1.png", price: "Hubungi Kami" },
  { id: "papan-2", name: "Papan Duka Cita #2", category: "papan", image: "/images/papan-dukacita-2.png", price: "Hubungi Kami" },
  { id: "papan-3", name: "Papan Ucapan Selamat #1", category: "papan", image: "/images/papan-selamat-1.png", price: "Hubungi Kami" },
  { id: "papan-4", name: "Papan Ucapan Selamat #2", category: "papan", image: "/images/papan-selamat-2.png", price: "Hubungi Kami" },
  // Standing Flower
  { id: "standing-1", name: "Standing Flower #1", category: "standing", image: "/images/standing-1.jpeg", price: "Hubungi Kami" },
  { id: "standing-2", name: "Standing Flower #2", category: "standing", image: "/images/standing-2.jpeg", price: "Hubungi Kami" },
  { id: "standing-3", name: "Standing Flower #3", category: "standing", image: "/images/standing-3.jpeg", price: "Hubungi Kami" },
  { id: "standing-4", name: "Standing Flower #4", category: "standing", image: "/images/standing-4.jpeg", price: "Hubungi Kami" },
  // Bunga Meja
  { id: "meja-1", name: "Bunga Meja #1", category: "meja", image: "/images/bunga-meja-1.jpeg", price: "Hubungi Kami" },
  { id: "meja-2", name: "Bunga Meja #2", category: "meja", image: "/images/bunga-meja-2.jpeg", price: "Hubungi Kami" },
  { id: "meja-3", name: "Bunga Meja #3", category: "meja", image: "/images/bunga-meja-3.jpeg", price: "Hubungi Kami" },
  { id: "meja-4", name: "Bunga Meja #4", category: "meja", image: "/images/bunga-meja-4.jpeg", price: "Hubungi Kami" },
  // Kustomisasi
  { id: "custom-1", name: "Rangkaian Kustom #1", category: "kustomisasi", image: "/images/custom-1.jpeg", price: "Hubungi Kami" },
  { id: "custom-2", name: "Rangkaian Kustom #2", category: "kustomisasi", image: "/images/kustomisasi-2.jpeg", price: "Hubungi Kami" },
  { id: "custom-3", name: "Rangkaian Kustom #3", category: "kustomisasi", image: "/images/kustomisasi-3.jpeg", price: "Hubungi Kami" },
  { id: "custom-4", name: "Rangkaian Kustom #4", category: "kustomisasi", image: "/images/kustomisasi-4.jpeg", price: "Hubungi Kami" },
];

export const categories = [
  { id: "buket" as const, label: "Buket Bunga", description: "Buket bunga segar untuk berbagai momen spesial", image: "/images/katalog-1-removebg-preview.png" },
  { id: "papan" as const, label: "Papan Bunga", description: "Papan bunga untuk ucapan selamat & duka cita", image: "/images/papan-selamat-1.png" },
  { id: "standing" as const, label: "Standing Flower", description: "Standing flower elegan untuk berbagai acara", image: "/images/standing-1.jpeg" },
  { id: "meja" as const, label: "Bunga Meja", description: "Rangkaian bunga meja untuk dekorasi ruangan", image: "/images/bunga-meja-1.jpeg" },
  { id: "kustomisasi" as const, label: "Kustomisasi", description: "Rangkaian bunga sesuai keinginan Anda", image: "/images/custom-1.jpeg" },
];

export function getWhatsAppUrl(productName?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (productName) {
    const text = encodeURIComponent(
      `Halo, saya tertarik dengan ${productName}. Apakah masih tersedia?`
    );
    return `${base}?text=${text}`;
  }
  return `${base}?text=${encodeURIComponent("Halo, saya ingin bertanya tentang produk Afdal Florist.")}`;
}
