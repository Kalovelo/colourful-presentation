import {
  FacebookOutlined,
  GithubOutlined,
  GitlabOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./footer.scss";
import Newsletter from "../newsletter/newsletter";

const Footer: React.FC = () => {
  const [LoadingOutlined, setshouldPlayAnimation] = useState(false);

  const Links: [
    {
      title: string;
      url: string;
    }
  ] = [
    {
      title: "About",
      url: "/About",
    },
    {
      title: "Contact",
      url: "/About",
    },
    {
      title: "TOU",
      url: "/About",
    },
  ];

  const social = [
    {
      link: "https://www.facebook.com/differentreality",
      icon: FacebookOutlined,
    },
    {
      url: "https://www.instagram.com/differentrealitystella/",
      icon: InstagramOutlined,
    },
    {
      url: "https://linkedin.com/in/differentreality",
      icon: LinkedinOutlined,
    },
    {
      url: "https://gitlab.com/differentreality",
      icon: GitlabOutlined,
    },
    {
      ur: "https://github.com/differentreality",
      icon: GithubOutlined,
    },
  ];

  return (
    <footer
      onClick={() => {
        setshouldPlayAnimation(true);
      }}
      className="Footer"
    >
      <Newsletter />
      <div className="Footer__pit">
        <ul className="Footer__links Footer__links--main">
          {Links.map((link, index) => (
            <li key={index} className="Footer__link">
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <ul className="Footer__links Footer__links--social">
          {social.map((link, index) => (
            <li key={index} className="Footer__link">
              <a target="_blank" href={link.url}>
                {<link.icon />}
              </a>
            </li>
          ))}
        </ul>
        <span className="Footer__credits">
          powered by{" "}
          <a href="https://kalovelo.com" target="_blank">
            Kalovelo
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;