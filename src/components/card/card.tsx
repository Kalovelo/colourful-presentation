import {
  LaptopOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  AudioOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
import "./card.scss";
import { formatDate } from "../../utils/Date";
import { ICardProps } from "./interface";
import { Link } from "gatsby";

const Card: React.FC<ICardProps> = (props) => {
  const getTypeIcon = (): JSX.Element => {
    switch (props.eventType.toLowerCase()) {
      case "workshop":
        return <LaptopOutlined />;
      case "talk":
        return <AudioOutlined />;
      default:
        return <StarOutlined />;
    }
  };

  return (
    <article className="card fade-in">
      <Link to={props.link}>
        <div className="card__image-wrapper">
          <img src={props.image} />
        </div>
        <div className="card__content">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__summary">{props.summary}</p>
          <div className="card__meta">
            <span
              className={`card__type card__type--${props.eventType.toLowerCase()}`}
            >
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
