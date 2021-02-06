import React, { useEffect } from "react";
import Card from "../../components/card/card";
import Cheatsheet from "../cheatsheet/cheatsheet";
import Gallery from "../gallery/gallery";
import Hero from "../hero/hero";
import { link } from "../linkList/interface";
import LinkList from "../linkList/linkList";
import "./event.scss";
import Prism from "prismjs";

const Event = (props: any) => {
  console.log(props);
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });

  const renderCodeSnippet = (title: string, snippet: string, language: string) => {
    return (
      <div className="event__codeSnippet">
        <h4>{title}</h4>
        <pre className="event__codeSnippet-code">
          <code className={`language-${language}`}>{snippet}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="event">
      <Hero headTitle="lala" description="lala" cta={"lalaa"} element={Card}></Hero>
      {props.cheatsheet && (
        <Cheatsheet theme={props.type.title} chapters={props.cheatsheet.chapters} />
      )}
      {props.linkBundles && (
        <section className="event__linkList-wrapper">
          {props.linkBundles.map((linkList: { title: string; link: link[] }) => (
            <LinkList title={linkList.title} links={linkList.link} />
          ))}
        </section>
      )}
      {props.codesnippets.length > 0 && (
        <section className="event__codeSnippet-wrapper">
          <h2>Code Snippets</h2>
          {props.codesnippets.map((codeSnippet: ICodeSnippet) =>
            renderCodeSnippet(
              codeSnippet.title,
              codeSnippet.snippet,
              codeSnippet.language
            )
          )}
        </section>
      )}
      {props.gallery && <Gallery images={props.gallery.images} />}
    </div>
  );
};

export default Event;
