import { BarsOutlined } from "@ant-design/icons";
import { Affix, Drawer } from "antd";
import React, { useState } from "react";
import "./header.scss";
import Background from "./background";

interface link {
  title: string;
  url: string;
}

const MenuList: React.FC = () => {
  const links: link[] = [
    {
      title: "Αρχική",
      url: "/",
    },
    {
      title: "Workshops",
      url: "/workshops",
    },
    {
      title: "Talks",
      url: "/talks",
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
    <div className="header--drawer">
      <button className="header__toggle" onClick={showDrawer}>
        <BarsOutlined />
      </button>

      <Drawer placement="left" closable={true} onClose={onClose} visible={visible}>
        <MenuList />
      </Drawer>
    </div>
  );
};

const BarHeader: React.FC = () => (
  <div className="header--bar">
    <MenuList />
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <BarHeader />
      </div>
      <span className="header__background">
        <Background />
      </span>
    </header>
  );
};

export default Header;
