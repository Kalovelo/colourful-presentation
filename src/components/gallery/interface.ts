export interface IImage {
  url: string;
  alternativeText: string;
}

export interface IGalleryProps {
  images: Array<IImage>;
}
