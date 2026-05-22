import { Menu, SlidersHorizontal } from 'lucide-react';
import { mockListings } from './data';
import ListingCard from './components/ListingCard';

export default function App() {
  const filters = [
    "Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Utara", "Jakarta Timur", "Tangerang"
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans w-full max-w-[1920px] mx-auto text-gray-900 pb-20 md:pb-0 relative">
      
      {/* Header */}
      <header className="bg-white px-4 h-14 flex items-center justify-between sticky top-0 z-50 border-b border-gray-200">
        <div className="font-extrabold text-[#ed7a2d] text-xl tracking-tight flex items-center">
          Properti<span className="bg-[#ed7a2d] text-white px-1 ml-0.5 rounded-sm">BU</span>
          <span className="text-gray-500 text-xs font-normal ml-0.5 mt-2">.com</span>
        </div>
        <button className="text-gray-600 p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <main className="flex flex-col mx-auto bg-white md:bg-transparent max-w-7xl">
        
        {/* Banner Section */}
        <section className="bg-white">
          <div className="w-full relative md:mt-4 md:max-w-5xl md:mx-auto md:rounded-xl md:overflow-hidden group cursor-pointer shadow-lg h-[500px] md:h-[600px]">
            <img 
              src={mockListings[0].images[0]} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Hero Property"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6 gap-2 md:gap-4">
              
              <div className="bg-black/50 py-1 md:py-2 px-4 md:px-6 max-w-full">
                <span className="text-white text-2xl md:text-4xl font-bold drop-shadow-md">
                  Rp. 690 Juta NET
                </span>
              </div>
              
              <div className="bg-black/50 py-2 md:py-3 px-4 md:px-6 flex flex-col items-center justify-center -space-y-0.5 max-w-full">
                <p className="text-white font-extrabold text-xl md:text-3xl drop-shadow-md">GARANSI TERMURAHHH</p>
                <p className="text-white font-bold text-lg md:text-2xl drop-shadow-md">Harga Beli Kosongan</p>
                <p className="text-white font-bold text-lg md:text-2xl drop-shadow-md">1.2 Milyar</p>
              </div>
              
              <div className="bg-black/50 py-1.5 md:py-2.5 px-4 md:px-6 max-w-full">
                <p className="text-white font-bold tracking-widest text-[19px] md:text-3xl uppercase drop-shadow-md leading-tight">
                   ROSEVILE SOHO &<br className="md:hidden" /> SUITES BSD
                </p>
              </div>

              <div className="bg-black/50 py-1.5 md:py-2.5 px-3 md:px-6 max-w-full">
                <p className="text-white font-bold drop-shadow-md text-[15px] md:text-xl leading-snug">
                  Fasilitas Bintang 5 | Parkir 1:1<br className="md:hidden" />
                  <span className="hidden md:inline"> | </span>Full Furnish Worth 300JT
                </p>
              </div>
              
            </div>
          </div>
          
          <div className="px-5 py-4 text-center md:pb-8 md:pt-6 bg-white max-w-4xl mx-auto">
             <h1 className="text-lg md:text-3xl font-extrabold text-gray-900 leading-snug">
               Apartemen Roseville BSD Fully Furnished Garansi TERMURAH Jual Rugi Harga BU
             </h1>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-white border-y border-gray-200 py-3 md:bg-transparent md:border-none md:py-6 sticky top-14 z-40 md:relative md:top-0">
          <div className="px-4 flex gap-2 overflow-x-auto no-scrollbar items-center pb-1 md:pb-0 md:flex-wrap md:justify-center">
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 whitespace-nowrap text-sm font-medium bg-white hover:bg-gray-50 shadow-sm transition-colors text-gray-700 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-[#ed7a2d]" /> Filter
            </button>
            {filters.map((filter, idx) => (
              <button key={idx} className="border border-gray-300 rounded-full px-4 py-1.5 whitespace-nowrap text-sm font-medium bg-white hover:bg-gray-50 text-gray-700 shadow-sm shrink-0">
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Property Grid */}
        <section className="p-0 md:p-4 mb-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 bg-[#f0f2f5] md:bg-transparent">
             {mockListings.map(listing => (
               <ListingCard key={listing.id} listing={listing} />
             ))}
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#e86b24] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
          <div className="flex-1">
            <div className="font-extrabold text-2xl tracking-tight flex items-center mb-6">
              Properti<span className="bg-white text-[#e86b24] px-1 ml-0.5 rounded-sm">BU</span>
              <span className="text-white/80 text-sm font-normal ml-1 mt-2">.com</span>
            </div>
            
            <div className="text-sm space-y-4 mb-8 opacity-90 leading-relaxed font-medium">
              <p>
                <strong className="block mb-1">PT. Vidi Vici Digital</strong>
                Ruko Komplek Business Park Blok AB-6<br/>
                Jl. Raya Meruya Ilir no 88, Kebon Jeruk, Jakarta Barat,<br/>
                DKI Jakarta 11620, Indonesia
              </p>
            </div>
          </div>
          
          <div className="flex-1 text-sm font-medium">
             <h4 className="font-bold mb-4 uppercase tracking-wider text-white/90">Customer Service</h4>
             <ul className="space-y-4 opacity-90">
               <li className="flex items-center gap-3">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                 +62 813-9900-148
               </li>
               <li className="flex items-center gap-3">
                 {/* Tiktok Icon approximation */}
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                 @propertibu
               </li>
               <li className="flex items-center gap-3">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 propertibu
               </li>
             </ul>

             <div className="mt-8 opacity-90">
                <h4 className="font-bold mb-2 uppercase tracking-wider text-white/90">Jam Operasional</h4>
                <p>Senin - Minggu, 08.00-22.00</p>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-xs font-medium text-white/70">
          © 2026 PropertiBU. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128c7e] transition-transform hover:scale-105 z-50 flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-white stroke-white">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </button>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
}
