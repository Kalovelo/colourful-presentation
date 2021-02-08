import {
  LaptopOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import React from "react";
import "./card.scss";
import { formatDate } from "../../utils/Date";
import { ICardProps } from "./interface";
import { Link } from "gatsby";

const Card: React.FC<ICardProps> = (props) => {
  const getTypeIcon = (): JSX.Element => {
    return props.eventType === "workshop" ? <LaptopOutlined /> : <AudioOutlined />;
  };

  return (
    <article className="card">
      <Link to={props.link}>
        <div className="card__image-wrapper">
          <img src={"http://localhost:1337" + props.image} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{props.title}</h3>
          <div className="card__meta">
            <span className={`card__type card__type--${props.eventType}`}>
              {getTypeIcon()} {props.eventType}
            </span>
            <span>
              <EnvironmentOutlined />
              {props.place}
            </span>
            <span>
              <CalendarOutlined />
              {formatDate(props.date)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
