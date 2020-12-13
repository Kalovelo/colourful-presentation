export interface IImage {
  src: string;
  title: string;
  altText: string;
}

export interface IGalleryProps {
  images: Array<IImage>;
}
