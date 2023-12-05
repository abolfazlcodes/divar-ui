export interface ProductProps {
  id: number;
  title: string;
  description: [string, string];
  createdAt: string;
  imageUrls: [{ src: string; fileType: string }, { src: string; alt: string }];
}
