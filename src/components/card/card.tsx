import {
  LaptopOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import "./card.scss";

interface cardProps {
  type: string;
  image: string;
  title: string;
  date: string;
  place: string;
  link: string;
}

const Card: React.FC<cardProps> = (props) => {
  const getTypeIcon = (): JSX.Element => {
    return props.type === "Workshop" ? <LaptopOutlined /> : <AudioOutlined />;
  };

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <a href={props.link}>
          <img src={props.image} />
        </a>
      </div>
      <div className="card__content">
        <a href={props.link}>
          <h3 className="card__title">{props.title}</h3>
        </a>{" "}
        <div className="card__meta">
          <span className={`card__type card__type--${props.type}`}>
            {getTypeIcon()} {props.type}
            <Divider type="vertical" />
          </span>
          <span>
            <EnvironmentOutlined />
            {props.place}
          </span>
          <Divider type="vertical" />
          <span>
            <CalendarOutlined />
            {props.date}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
