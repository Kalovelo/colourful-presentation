import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import LottieAnimation from "../../components/Lottie/Lottie";
import SEO from "../../components/seo/seo";
import { formatDate } from "../../utils/Date";
import "./index.scss";

const animation = require("./lottie__codetext.json");

const talkImage = require("./images/talk.png");
const workshopImage = require("./images/workshop.png");

const banner1Props = {
  type: "square",
  icon: <img src={workshopImage} />,
  title: "Workshops",
  text:
    "Hands-on training on tools and technologies. We, also, check out who's got the best laptop stickers.",
};

const banner2Props = {
  type: "square",
  icon: <img src={talkImage} />,
  title: "Talks",
  text:
    "Learn technologies and best practices. Exchange ideas, and stickers.",
};

interface IIndexHeroProps {
  title: string;
  description: string;
}

interface IIndexPageProps {
  location: {
    href: string;
  };
}

const IndexHero: React.FC<IIndexHeroProps> = ({ title, description }) => {
  const lottieAnimation = (
    <LottieAnimation animation={animation} shouldPlay={true} />
  );

  return (
    <Hero element={lottieAnimation} headTitle={title} description={description} />
  );
};

const IndexPage: React.FC<IIndexPageProps> = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      api {
        homepage {
          title
          description
          SEOImage {
            url
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={data.api.homepage.title}
        description={data.api.homepage.description}
        image={data.api.homepage.SEOImage.url}
        url={location.href}
      />
      <section>
        <IndexHero
          title={data.api.homepage.title}
          description={data.api.homepage.description}
        />
      </section>
      <section className="index__banners-wrapper">
        <h2 className="index__banners-title">Featuring both</h2>
        <div className="index__banners">
          <Banner {...banner1Props} />
          <div className="index__banners-divider">
            <span>&</span>
          </div>
          <Banner {...banner2Props} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
