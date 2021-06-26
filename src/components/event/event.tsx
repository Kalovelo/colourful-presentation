import { LinkOutlined } from "@ant-design/icons";
import Prism from "prismjs";
import React, { useEffect } from "react";
import { formatDateWithHour } from "../../utils/Date";
import Cheatsheet from "../cheatsheet/cheatsheet";
import Gallery from "../gallery/gallery";
import Hero from "../hero/hero";
import { link } from "../linkList/interface";
import LinkList from "../linkList/linkList";
import Snippet from "../snippet/snippet";
import "./event.scss";

const eventDetails = (
  date: string,
  place: string,
  poster: string,
  facebookEvent: string
) => {
  const data = [];
  if (date) data.push({ headTitle: "Πότε;", content: formatDateWithHour(date) });
  if (place) data.push({ headTitle: "Που;", content: place });
  if (facebookEvent)
    data.push({
      headTitle: "Συμμετοχή",
      content: (
        <a
          className="event__details-table-link"
          href={facebookEvent}
          target="_blank"
        >
          <span>Facebook</span>
          <LinkOutlined />
        </a>
      ),
    });
  return (
    <div className="event__details-wrapper">
      <img className="event__details-poster" src={poster}></img>
      <table className="event__details-table">
        <thead>
          <tr>
            {data.map((item, index) => (
              <th key={index}>{item.headTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((item, index) => (
              <td key={index}>
                <span>{item.content}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Event = (props: any) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <div className="event">
        <div className="event__hero">
          <Hero
            headTitle={props.title}
            description={props.description}
            element={eventDetails(
              props.date,
              props.place,
              props.poster.url,
              props.facebookEvent
            )}
          ></Hero>
        </div>
        {props.cheatsheet && (
          <section>
            <Cheatsheet
              theme={props.type.title}
              chapters={props.cheatsheet.chapters}
            />
          </section>
        )}
        {props.linkBundles.length > 0 && (
          <section>
            <h2>Εξωτερικό βοηθητικό υλικό</h2>
            <div className="event__linkList-wrapper">
              {props.linkBundles.map(
                (linkList: { title: string; link: link[] }, index: number) => (
                  <LinkList
                    key={index}
                    title={linkList.title}
                    links={linkList.link}
                  />
                )
              )}
            </div>
          </section>
        )}
        {props.codesnippets.length > 0 && (
          <section className="event__codeSnippet-wrapper">
            <h2>Code Snippets</h2>
            {props.codesnippets.map((snippet: ISnippet, index: number) => (
              <Snippet key={index} {...snippet} />
            ))}
          </section>
        )}
        {props.gallery && <Gallery images={props.gallery.images} />}
      </div>
    </>
  );
};

export default Event;
