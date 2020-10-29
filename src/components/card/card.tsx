import {
  LaptopOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import "./card.scss";
import { formatDate } from "../../utils/Date";

interface cardProps {
  eventType: string;
  image: string;
  name: string;
  date: string;
  place: string;
  link: string;
}

const Card: React.FC<cardProps> = (props) => {
  const getTypeIcon = (): JSX.Element => {
    return props.eventType === "WORKSHOP" ? <LaptopOutlined /> : <AudioOutlined />;
  };

  return (
    <article className="card">
      <a href={props.link}>
        <div className="card__image-wrapper">
          <img src={props.image} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{props.name}</h3>
          <div className="card__meta">
            <span className={`card__type card__type--${props.eventType}`}>
              {getTypeIcon()} {props.eventType}
              <Divider type="vertical" />
            </span>
            <span>
              <EnvironmentOutlined />
              {props.place}
            </span>
            <Divider type="vertical" />
            <span>
              <CalendarOutlined />
              {formatDate(props.date)}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Card;
