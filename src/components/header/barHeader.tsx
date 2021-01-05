import { Fade, MenuList, Popper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "gatsby";
import React from "react";
import "./barHeader.scss";
import "./header.scss";
import { IBarSubMenuProps, ITopic, IType } from "./interface";

const BarSubmenu: React.FC<IBarSubMenuProps> = ({
  main,
  subitems,
  popperId,
}: IBarSubMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLeave = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const popId = open ? popperId : undefined;
  const shouldShowPopper = subitems?.length > 0;

  return (
    <div
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      className="barHeader__toggle-menu-wrapper"
    >
      <Link
        aria-describedby={popId}
        className="barHeader__main-link"
        to={`/${main.toLowerCase()}`}
      >
        {main}
      </Link>
      {shouldShowPopper ? (
        <>
          <IconButton
            onClick={handleClick}
            className="barHeader__icon"
            id="menu-list-grow"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <Popper id={popId} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <MenuList className="barHeader__submenu">
                  {subitems.map((topic: ITopic, index: number) => (
                    <MenuItem key={index}>
                      <Link
                        className="barHeader__submenu-item"
                        to={`/${main}/${topic.slug}`}
                      >
                        {topic.title}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Fade>
            )}
          </Popper>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const BarHeader: React.FC<any> = ({ data }: any) => {
  return (
    <div className="barHeader">
      <nav>
        <Link to="/" className="barHeader__main-link">
          Αρχική
        </Link>
        {data.api.types.map((type: IType) => {
          return (
            <BarSubmenu
              popperId="popper-worshops"
              main={type.slug}
              subitems={type.topics}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default BarHeader;
