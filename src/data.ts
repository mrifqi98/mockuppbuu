import { Listing } from './types';
import rosevilleUnitImg from './assets/images/roseville_unit_1779361951101.png';

export const mockListings: Listing[] = [
  {
    id: "1",
    images: [
      rosevilleUnitImg,
      "https://images.unsplash.com/photo-1502672260266-1c1de2d96674?w=800&q=80"
    ],
    badges: ["Di Bawah NJOP", "Fully Furnished"],
    ribbon: "Newly Renovated",
    hotUnitMessage: "🔥 Hot unit - typically sold under 2 weeks",
    originalPrice: "Rp. 740.000.000",
    price: "Rp. 690.000.000",
    yieldPercent: "6.23%",
    title: "Jual BU Apartemen Roseville SOHO & Suites BSD 1BR Full Furnished Dekat Akses Toll BSD",
    location: "BSD City, Tangerang Selatan",
    specs: { bed: 1, bath: 1, area: 40 },
    tags: [
      "Fully Furnished", "Tower: West", "Lantai: Middle", 
      "Hadap: Selatan", "Sertifikat: SHM", "View: City", 
      "Newly Renovated"
    ],
    unitFacilities: [
      "Bed", "AC", "Lemari", "Sofa", "TV", "Kitchen Set", 
      "Kompor Tanam", "Cooker Hood", "Meja Makan", 
      "Kulkas", "Water Heater"
    ],
    apartmentFacilities: [
      "Function Room", "Gym", "Kolam Renang", "Laundry", 
      "Playground", "Security", "Supermarket"
    ],
    locationPoints: [
      "Selangkah ke BSD Square & Sunburst CBD",
      "5 menit ke Eka Hospital BSD",
      "5 menit ke Green Office Park BSD",
      "5 menit ke Akses Tol BSD (Jakarta-Serpong)",
      "7 menit ke AEON Mall BSD",
      "10 menit ke ICE BSD City",
      "10 menit ke Pasar Modern BSD"
    ]
  },
  {
    id: "2",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    badges: ["Di Bawah NJOP", "Fully Furnished"],
    ribbon: "Newly Renovated",
    originalPrice: "Rp. 980.000.000",
    price: "Rp. 567.000.000",
    yieldPercent: "8.01%",
    title: "Jual Cepat Apartemen Springwood Residence Alam Sutera 2BR Full Custom Furnished Dekat Binus",
    location: "Alam Sutera, Tangerang",
    specs: { bed: 2, bath: 1, area: 40 },
    tags: [
      "Fully Furnished", "Tower: Wing B", "Lantai: Middle", 
      "Hadap: Utara", "Sertifikat: PPJB", "View: City", 
      "Newly Renovated"
    ],
    unitFacilities: [],
    apartmentFacilities: [
      "Function Room", "Gym", "Kolam Renang", "Playground", 
      "Security", "Supermarket"
    ],
    locationPoints: [
      "5 menit ke Binus Alam Sutera, UBM, Mall Alam Sutera",
      "2 menit dari pintu tol Tangerang",
      "Dekat dengan Mall Alam Sutera, Living World, IKEA Alam Sutera",
      "Free shutle bus ke area Binus"
    ]
  },
  {
    id: "3",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"
    ],
    badges: ["Fully Furnished"],
    originalPrice: "Rp. 450.000.000",
    price: "SOLD - Waitlist Only",
    priceStatus: "sold",
    yieldPercent: "11.43%",
    title: "Jual Di Bawah Harga Pasar Apartemen Green Pramuka City 2BR Cempaka Putih Rawamangun",
    location: "Cempaka Putih, Jakarta Pusat",
    specs: { bed: 2, bath: 1, area: 33 },
    tags: [
      "Fully Furnished", "Tower: Fagio", "Lantai: High", 
      "Hadap: Timur", "Sertifikat: PPJB", "View: City"
    ],
    unitFacilities: [
      "AC", "Kulkas", "TV", "Kasur", "Sofa", "Water heater", 
      "Kompor", "Lemari", "Swimming Pool", "Jogging Track", 
      "Playground"
    ],
    apartmentFacilities: [
      "ATM", "Function Room", "Gym", "Internet & TV Kabel", 
      "Jogging Track", "Kolam Renang", "Lapangan Tenis", 
      "Laundry", "Playground", "Restaurant", "Security", 
      "Supermarket"
    ],
    locationPoints: [
      "Direct access ke Green Pramuka Square Mall",
      "2 menit ke gerbang Tol Dalam Kota",
      "2 menit ke Halte TransJakarta",
      "5 menit ke Cempaka Putih & Kelapa Gading"
    ]
  },
  {
    id: "4",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"
    ],
    badges: ["Di Bawah NJOP", "Fully Furnished"],
    originalPrice: "Rp. 390.000.000",
    price: "SOLD - Waitlist Only",
    priceStatus: "sold",
    yieldPercent: "9.14%",
    title: "Jual Termurah Best View Apartemen Tree Park BSD Full Furnished - 5 menit ke The Breeze",
    location: "Serpong, Tangerang Selatan",
    specs: { studio: true, bath: 1, area: 25 },
    tags: [
      "Fully Furnished", "Tower: -", "Lantai: Low", 
      "Hadap: Selatan", "Sertifikat: PPJB", "View: City"
    ],
    unitFacilities: [
      "Bed", "AC", "Lemari", "TV", "Meja Makan", 
      "Kompor Tanam", "Kulkas", "Kitchen Set", 
      "Water Heater", "Dispenser"
    ],
    apartmentFacilities: [],
    locationPoints: [
      "5 menit ke Green Office Park, The Breeze, AEON Mall BSD",
      "7 menit ke Universitas Prasetiya Mulya",
      "3 menit ke acess Tol Jakarta-Serpong & JORR",
      "Sebelah McDonald's dan Sinarmas World Academy"
    ]
  }
];
