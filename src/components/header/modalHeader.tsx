import { Backdrop, Collapse, Fade, List, ListItem, Modal } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";
import React, { useContext } from "react";
import "./header.scss";
import { IMenuProps, ITopic, IType } from "./interface";
import "./modalHeader.scss";
import CloseIcon from "@material-ui/icons/Close";
import { OnlineContext } from "../context/NetworkContext";

const ModalMenu: React.FC<IMenuProps> = ({ main, subitems }: any) => {
  const [openCollapse, setOpenCollapse] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <div className="modalHeader__list-toggle-wrapper">
      <ListItem className="modalHeader__list-item modalHeader__list-item--capitalize">
        <Link to={`/${main}`}>{main}</Link>
        {subitems?.length > 0 ? (
          openCollapse ? (
            <ExpandLess className="modalHeader__list-toggle" onClick={handleClick} />
          ) : (
            <ExpandMore className="modalHeader__list-toggle" onClick={handleClick} />
          )
        ) : (
          ""
        )}
      </ListItem>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        {subitems?.length > 0 &&
          subitems.map((topic: ITopic, index: number) => (
            <ListItem
              className="modalHeader__list-item modalHeader__list-item--sub"
              key={index}
            >
              <Link to={`/${main}/${topic.slug}`}>{topic.title}</Link>
            </ListItem>
          ))}
      </Collapse>
    </div>
  );
};

const ModalHeader: React.FC<any> = ({ data }: any) => {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const context = useContext(OnlineContext);

  console.log(context);

  return (
    <nav className="modalHeader">
      <button className="modalHeader__toggle" onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state}
        className="modalHeader__modal"
        onClose={() => toggleDrawer(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          className: "modalHeader__backdrop",
          timeout: 500,
        }}
      >
        <Fade in={state}>
          <List className="modalHeader__list">
            <button
              className="modalHeader__toggle-close"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </button>
            <ListItem className="modalHeader__list-item">
              <Link to="/">Αρχική</Link>
            </ListItem>
            {Object.keys(data).map((type: string, index: number) => {
              return (
                <ModalMenu
                  key={index}
                  main={data[type].slug}
                  subitems={data[type].topics}
                />
              );
            })}
          </List>
        </Fade>
      </Modal>
    </nav>
  );
};

export default ModalHeader;
