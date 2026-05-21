export interface ListingSpec {
  bed?: number;
  bath?: number;
  area?: number;
  studio?: boolean;
}

export interface Listing {
  id: string;
  images: string[];
  badges: string[];
  ribbon?: string;
  hotUnitMessage?: string;
  originalPrice?: string;
  price: string;
  priceStatus?: 'sold' | 'available';
  yieldPercent?: string;
  title: string;
  location: string;
  specs: ListingSpec;
  tags: string[];
  unitFacilities?: string[];
  apartmentFacilities?: string[];
  locationPoints: string[];
}
