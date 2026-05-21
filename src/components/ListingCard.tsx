import React, { useState } from 'react';
import { Listing } from '../types';
import { MapPin, BedDouble, Bath, Maximize, CheckCircle2 } from 'lucide-react';

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-white flex flex-col border border-gray-200 shadow-sm overflow-hidden mb-6 md:mb-0 md:rounded-lg">
      <div className="relative h-64 md:h-56">
        <img
          src={listing.images[currentImageIndex]}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        
        {/* Badges top left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {listing.badges.map((badge, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded shadow-sm font-medium
                ${badge === 'Di Bawah NJOP' ? 'bg-[#ed7a2d] text-white' : 'bg-white text-gray-800'}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Ribbon top right */}
        {listing.ribbon && (
          <div className="absolute top-0 right-0 overflow-hidden w-[100px] h-[100px]">
            <div className="absolute transform rotate-45 bg-[#b94a08] text-white text-[10px] font-bold py-1 px-8 right-[-28px] top-[18px] text-center w-[120px] shadow-sm">
              {listing.ribbon}
            </div>
          </div>
        )}

        {/* Carousel Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {listing.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full ${
                idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-4 md:p-5 flex flex-col flex-grow">
        {listing.hotUnitMessage && (
          <div className="bg-[#fef4ed] border border-[#fce4d1] text-[#ed7a2d] px-3 py-2 rounded-md font-medium text-sm mb-4 flex items-start gap-2 leading-tight">
            <span>{listing.hotUnitMessage}</span>
          </div>
        )}

        <div className="flex justify-between items-end mb-2">
          <div>
            {listing.originalPrice && (
              <span className="text-gray-400 line-through text-lg font-medium block">
                {listing.originalPrice}
              </span>
            )}
            <span className={`text-2xl font-bold ${listing.priceStatus === 'sold' ? 'text-gray-800' : 'text-[#ed7a2d]'}`}>
              {listing.priceStatus === 'sold' ? (
                 <>
                   <span className="text-gray-900">SOLD - </span>
                   <span className="text-[#ed7a2d]">Waitlist Only</span>
                 </>
               ) : (
                listing.price
              )}
            </span>
          </div>
          {listing.yieldPercent && (
            <span className="text-gray-500 text-xs font-medium pb-1">
              Yield: {listing.yieldPercent}
            </span>
          )}
        </div>

        <h2 className="text-lg text-gray-900 font-bold leading-tight mb-2">
          {listing.title}
        </h2>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1 text-gray-400 shrink-0" />
          <span className="truncate">{listing.location}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm gap-3 mb-4">
          {listing.specs.studio ? (
             <div className="flex items-center">
               <BedDouble className="w-4 h-4 mr-1" /> Studio
             </div>
          ) : listing.specs.bed && (
            <div className="flex items-center">
              <BedDouble className="w-4 h-4 mr-1 text-gray-400" /> {listing.specs.bed} KT
            </div>
          )}
          {listing.specs.bath && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-gray-400" /> {listing.specs.bath} KM
            </div>
          )}
          {listing.specs.area && (
             <div className="flex items-center">
               <Maximize className="w-4 h-4 mr-1 text-gray-400" /> {listing.specs.area} m²
             </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {listing.tags.map((tag, idx) => (
            <span key={idx} className="border border-gray-200 text-gray-600 rounded bg-gray-50 px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Dynamic Sections */}
        {(listing.unitFacilities && listing.unitFacilities.length > 0) && (
          <div className="mb-5">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Fasilitas Unit</h3>
            <div className="flex flex-wrap gap-2">
              {listing.unitFacilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 border border-gray-100 bg-[#fdfaf8] rounded-full px-2.5 py-1 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ed7a2d] fill-[#ed7a2d]/10" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {(listing.apartmentFacilities && listing.apartmentFacilities.length > 0) && (
          <div className="mb-5">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Fasilitas Apartemen</h3>
            <div className="flex flex-wrap gap-2">
              {listing.apartmentFacilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 border border-gray-100 bg-[#fdfaf8] rounded-full px-2.5 py-1 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ed7a2d] fill-[#ed7a2d]/10" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {listing.locationPoints && listing.locationPoints.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Lokasi</h3>
            <div className="flex flex-col gap-2">
              {listing.locationPoints.map((point, idx) => (
                <div key={idx} className="flex items-start text-xs text-gray-600 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-[#e53e3e] fill-[#e53e3e]/10 mr-2 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-2">
          <button className="w-full bg-[#128c7e] hover:bg-[#075e54] text-white font-bold py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors">
            {/* Simple WhatsApp-like phone/chat icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
