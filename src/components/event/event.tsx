import Card from "../../components/card/card";
import React, { useEffect, useState } from "react";
import Hero from "../hero/hero";
import Cheatsheet from "../cheatsheet/cheatsheet";
import Gallery from "../gallery/gallery";
import LinkList from "../linkList/linkList";
import { link } from "../linkList/interface";

const Event = (props: any) => {
  console.log(props);
  const eventCard = () => (
    <Card
      link="lalal"
      date={props.date}
      eventType={props.type.title}
      image={props.poster.url}
      name={props.title}
      place={props.place}
    />
  );
  return (
    <>
      <Hero headTitle="lala" description="lala" cta={"lalaa"} element={Card}></Hero>
      <Cheatsheet theme={props.type.title} chapters={props.cheatsheet.chapters} />
      <Gallery images={props.gallery.images} />
      {props.linkBundles.map((linkList: { title: string; link: link[] }) => (
        <LinkList title={linkList.title} links={linkList.link} />
      ))}
    </>
  );
};

export default Event;
