import React from "react";
import "./gallery.scss";
import { range } from "../../utils/range";
import RandomInt from "../../utils/randomInt";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IGalleryProps, IImage } from "./interface";

const Gallery: React.FC<IGalleryProps> = ({ images }: IGalleryProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [chosenImage, setChosenImage] = React.useState<number>(0);

  const getLargeImagesIndeces = () => {
    const maxLargeTiles = Math.ceil(images.length / 4);
    const largeTileIndeces = [];
    for (let _ of range(0, maxLargeTiles)) {
      largeTileIndeces.push(RandomInt(images.length));
    }
    return largeTileIndeces;
  };

  const handleOpen = (index: number) => {
    setChosenImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const largeTileIndeces: Array<number> = React.useMemo(getLargeImagesIndeces, []);

  return (
    <section className="gallery">
      <h2 className="gallery__title">Moments</h2>
      <div className="gallery__wrapper">
        {images.map((image: IImage, index: number) => (
          <span key={index}>
            <img
              onClick={() => handleOpen(index)}
              className={largeTileIndeces.includes(index) ? "gallery__large" : ""}
              src={image.url}
              alt={image.alternativeText}
            />
          </span>
        ))}
        <Modal
          aria-labelledby="transition-modal-title"
          className="gallery__modal"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <img
              src={images[chosenImage].url}
              alt={images[chosenImage].alternativeText}
            />
          </Fade>
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
