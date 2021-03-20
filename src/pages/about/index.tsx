import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout/layout";
import { IAboutData, IExperience } from "./interface";
import "./about.scss";
// import SEO from "../components/seo/seo";

const NotFoundPage = () => {
  const data: IAboutData = useStaticQuery(graphql`
    query {
      api {
        about {
          primary_image {
            url
            alternativeText
          }
          secondary_image {
            url
            alternativeText
          }
          title
          description
          experience_section_title
          experience {
            title
            brief
          }
          quote {
            person
            saying
          }
        }
      }
    }
  `);
  const {
    primary_image,
    title,
    experience_section_title,
    description,
    experience,
    quote,
    secondary_image,
  } = {
    ...data.api.about,
  };
  console.log(primary_image);

  return (
    <Layout className="about">
      <section className="about__hero">
        <div className="about__image-wrapper">
          <img src={primary_image.url} alt={primary_image.alternativeText} />
          <img src={primary_image.url} alt={secondary_image.alternativeText} />
        </div>
        <div className="about__description-wrapper">
          <h1>{title}</h1>
          <ReactMarkdown source={description} />
        </div>
      </section>
      <section className="about__experience">
        <h2>{experience_section_title}</h2>
        <div className="about__experience-wrapper">
          {experience.map((experience: IExperience) => (
            <article className="about__experience">
              <h3>{experience.title}</h3>
              <ReactMarkdown source={experience.brief} />
            </article>
          ))}
        </div>
      </section>
      <section className="about__quote-wrapper">
        <p className="about__quote">"{quote.saying}"</p>
        <span className="about__quote-by">--{quote.person}</span>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
