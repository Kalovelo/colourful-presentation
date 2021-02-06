export interface IImage {
  blob: {
    url: string;
  };
  alternativeText: string;
}

export interface IGalleryProps {
  images: Array<IImage>;
}
