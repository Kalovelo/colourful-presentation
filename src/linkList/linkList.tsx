import { LinkOutlined } from "@ant-design/icons";
import React from "react";
import { linkListProps } from "./interface";
import "./linkList.scss";

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
            <td>
              <a href={link.url} className="linkList__link" target="_blank">
                <span className="linkList__link-title">{link.title}</span>
                <LinkOutlined />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LinkList;
