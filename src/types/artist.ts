
export interface Artist {
  id: number;
  name: string;
  category: string;
  location: string;
  bio: string;
  price: string;
  imageUrl: string;
  isExclusive: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isActive: boolean;
  rating: number;
  eventsCount: number;
  videoUrl?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
