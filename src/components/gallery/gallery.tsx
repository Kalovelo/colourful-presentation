import React from "react";
import "./gallery.scss";
import { range } from "../../utils/range";
import RandomInt from "../../utils/randomInt";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IGalleryProps, IImage } from "./interface";

const Gallery: React.FC<IGalleryProps> = ({ images }: IGalleryProps) => {
  const [open, setOpen] = React.useState(false);

  const getLargeImagesIndeces = () => {
    const maxLargeTiles = Math.ceil(images.length / 4);
    const largeTileIndeces = [];
    for (let _ of range(0, maxLargeTiles)) {
      largeTileIndeces.push(RandomInt(images.length));
    }
    return largeTileIndeces;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const largeTileIndeces: Array<number> = React.useMemo(getLargeImagesIndeces, []);

  return (
    <section className="gallery">
      {images.map((image: IImage, index: number) => (
        <>
          <img
            onClick={handleOpen}
            className={largeTileIndeces.includes(index) ? "gallery__large" : ""}
            key={index}
            src={process.env.API_URL + image.blob.url}
            alt={image.alternativeText}
          />
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
                src={process.env.API_URL + image.blob.url}
                alt={image.alternativeText}
              />
            </Fade>
          </Modal>
        </>
      ))}
    </section>
  );
};

export default Gallery;
