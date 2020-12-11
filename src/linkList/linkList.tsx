import React from "react";
import "./linkList.scss";
import { LinkOutlined } from "@ant-design/icons";
export interface link {
  title: string;
  url: string;
}
export interface linkListProps {
  title: string;
  links: [link];
}

const LinkList: React.FC<linkListProps> = ({ title, links }: linkListProps) => {
  return (
    <table className="linkList">
      <thead className="linkList__head">
        <tr>
          <th className="linkList__title">{title}</th>
        </tr>
      </thead>
      <tbody>
        {links.map((link, index) => (
          <tr key={index}>
            <a href={link.url} className="linkList__link" target="_blank">
              <span className="linkList__link-title">{link.title}</span>
              <LinkOutlined />
            </a>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LinkList;
