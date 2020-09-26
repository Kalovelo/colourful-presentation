import React, { useState } from "react";
import { Affix, Drawer } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import "./header.scss";
import useWindowSize from "../../utils/useWindowSize";

interface link {
  title: string;
  url: string;
}

const MenuList: React.FC = () => {
  const links: link[] = [
    {
      title: "Workshops",
      url: "/workshops",
    },
    {
      title: "Talks",
      url: "/talks",
    },
    {
      title: "Επικοινωνία",
      url: "/contact",
    },
  ];

  return (
    <ul className="header__menu">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

const DrawerHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <button className="header__toggle" onClick={showDrawer}>
        <BarsOutlined />
      </button>
      <Drawer placement="left" closable={true} onClose={onClose} visible={visible}>
        <MenuList />
      </Drawer>
    </div>
  );
};

const Header: React.FC = () => {
  const [affixed, setAffixed] = useState(false);

  const mobile = useWindowSize();

  const headerClass = affixed ? "header header--affixed" : "header";
  return (
    <Affix
      onChange={(isAffined) => {
        setAffixed(!!isAffined);
      }}
    >
      <header className={headerClass}>
        {mobile ? <DrawerHeader /> : <MenuList />}
      </header>
    </Affix>
  );
};

export default Header;
