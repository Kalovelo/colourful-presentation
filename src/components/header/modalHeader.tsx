import { Backdrop, Collapse, List, ListItem, Modal } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";
import React from "react";
import "./header.scss";
import { IMenuProps, ITopic } from "./interface";
import "./modalHeader.scss";

const ModalMenu: React.FC<IMenuProps> = ({ main, listItems }: any) => {
  const [openCollapse, setOpenCollapse] = React.useState(false);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <div className="modalHeader__list-toggle-wrapper">
      <ListItem className="modalHeader__list-item">
        <Link to={`/${main.toLowerCase()}`}>{main}</Link>
        {listItems?.length > 0 ? (
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
        {listItems?.length > 0 &&
          listItems.map((topic: ITopic, index: number) => (
            <ListItem
              className="modalHeader__list-item modalHeader__list-item--sub"
              key={index}
            >
              <Link to={`/${main.toLowerCase()}`}>{topic.name}</Link>
            </ListItem>
          ))}
      </Collapse>
    </div>
  );
};

const ModalHeader: React.FC = ({ data }: any) => {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

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
          timeout: 500,
        }}
      >
        <List className="modalHeader__list">
          <ListItem>
            <Link to="/" className="modalHeader__list-item">
              Αρχική
            </Link>
          </ListItem>
          <ModalMenu main={"Workshops"} listItems={data.api.workshopTopics} />
          <ModalMenu main={"Talks"} listItems={data.api.talkTopics} />
        </List>
      </Modal>
    </nav>
  );
};

export default ModalHeader;
