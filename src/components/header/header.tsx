import React, { useState } from "react";
import "./header.scss";

import Background from "./background";
import { Menu, Popover, Button, ChevronDownIcon } from "evergreen-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { ISubmenuProps, topic } from "./interface";

const Submenu: React.FC<ISubmenuProps> = ({ main, subitems }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Menu.Item
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <div className="menu__wrapper">
        <Link className="menu__main-link" to={`/${main.toLowerCase()}`}>
          {main}
        </Link>

        {subitems?.length > 0 && (
          <Popover
            minWidth={"150px"}
            isShown={visibility}
            content={
              <div className="submenu">
                <Menu>
                  <Menu.Group>
                    {subitems.map((topic: topic, index: number) => (
                      <Menu.Item key={index} to={topic.url} is={Link}>
                        {topic.name}
                      </Menu.Item>
                    ))}
                  </Menu.Group>
                </Menu>
              </div>
            }
          >
            <Button marginX={0}>
              <ChevronDownIcon />
            </Button>
          </Popover>
        )}
      </div>
    </Menu.Item>
  );
};

const BarHeader: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      api {
        talkTopics: topics(eventType: "TALK") {
          name
          url
        }
        workshopTopics: topics(eventType: "WORKSHOP") {
          name
          url
        }
      }
    }
  `);

  return (
    <div className="header--bar">
      <Menu>
        <Menu.Item>
          <Link to="/" className="menu__main-link">
            Αρχική
          </Link>
        </Menu.Item>
        <Submenu main={"Workshops"} subitems={data.api.workshopTopics} />
        <Submenu main={"Talks"} subitems={data.api.talkTopics} />
      </Menu>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <BarHeader />
      </div>
      <span className="header__background">
        <Background />
      </span>
    </header>
  );
};

export default Header;
