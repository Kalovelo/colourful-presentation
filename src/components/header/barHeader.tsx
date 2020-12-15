import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "gatsby";
import {
  anchorRef,
  bindHover,
  bindMenu,
  bindToggle,
  usePopupState,
} from "material-ui-popup-state/hooks";
import Menu from "material-ui-popup-state/HoverMenu";
import React from "react";
import "./barHeader.scss";
import "./header.scss";
import { IMenuProps, ITopic } from "./interface";

const BarSubmenu: React.FC<IMenuProps> = ({ main, subitems }: any) => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  return (
    <div {...bindHover(popupState)} className="menu__wrapper">
      <span ref={anchorRef(popupState)}>
        <Link className="menu__main-link" to={`/${main.toLowerCase()}`}>
          {main}
        </Link>
      </span>
      <IconButton {...bindToggle(popupState)} className="menu__icon">
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        className="submenu"
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {subitems?.length > 0 &&
          subitems.map((topic: ITopic, index: number) => (
            <MenuItem key={index}>
              <Link to={topic.url}>{topic.name}</Link>
            </MenuItem>
          ))}
        <MenuItem>
          <Link className="submenu__item" to="lalalla">
            llaal
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

const BarHeader: React.FC = ({ data }: any) => {
  return (
    <div className="barHeader">
      <nav>
        <Link to="/" className="menu__main-link">
          Αρχική
        </Link>
        <BarSubmenu main={"Workshops"} subitems={data.api.workshopTopics} />
        <BarSubmenu main={"Talks"} subitems={data.api.talkTopics} />
      </nav>
    </div>
  );
};

export default BarHeader;
