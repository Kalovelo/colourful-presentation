import { BarsOutlined } from "@ant-design/icons";
import { Affix, Drawer } from "antd";
import React, { useState } from "react";
import "./header.scss";

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
  const [affixed, setAffixed] = useState(false);

  const headerClass = affixed
    ? "header__wrapper header__wrapper--affixed"
    : "header__wrapper";
  return (
    <Affix
      onChange={(isAffixed) => {
        setAffixed(!!isAffixed);
      }}
    >
      <header className={headerClass}>
        <DrawerHeader />
        <BarHeader />
      </header>
    </Affix>
  );
};

export default Header;
