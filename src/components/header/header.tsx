import React, { useState } from "react";
import { Affix } from "antd";
import "./header.scss";
import useWindowSize from "../../utils/useWindowSize";

interface link {
  title: string;
  url: string;
}
const Header = () => {
  const windowSize = useWindowSize();
  const [affixed, setAffixed] = useState(false);

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

  const headerClass = affixed ? "header header--affixed" : "header";
  return (
    <Affix
      onChange={(isAffined) => {
        setAffixed(!!isAffined);
      }}
    >
      <header className={headerClass}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </header>
    </Affix>
  );
};

export default Header;
