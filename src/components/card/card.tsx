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
}

const Card: React.FC<cardProps> = (props) => {
  const getTypeIcon = (): JSX.Element => {
    return props.type === "Workshop" ? <LaptopOutlined /> : <AudioOutlined />;
  };

  return (
    <article>
      <div className="card">
        <div className="card__image-wrapper">
          <img src={props.image} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{props.title}</h3>
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
      </div>
    </article>
  );
};

export default Card;
