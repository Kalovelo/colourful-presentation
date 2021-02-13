import {
  FacebookOutlined,
  GithubOutlined,
  GitlabOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "gatsby";
import React from "react";
import Newsletter from "../newsletter/newsletter";
import "./footer.scss";

const Footer: React.FC = () => {
  const Links: Array<ILinks> = [
    {
      title: "Contact",
      url: "/contact/",
    },
    {
      title: "TOU",
      url: "/tou/",
    },
  ];

  const social: Array<ISocial> = [
    {
      url: "https://www.facebook.com/differentreality",
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
      url: "https://github.com/differentreality",
      icon: GithubOutlined,
    },
  ];

  return (
    <footer className="Footer">
      <Newsletter />
      <div className="Footer__pit">
        <ul className="Footer__links Footer__links--main">
          {Links.map((link, index) => (
            <li key={index} className="Footer__link">
              <Link to={link.url}>{link.title}</Link>
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
