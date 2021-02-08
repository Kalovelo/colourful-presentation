import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import LottieAnimation from "../../components/Lottie/Lottie";
import SEO from "../../components/seo";
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
    "Παρουσίαση μιας νέας τεχνολογίας. Βλέπουμε επίσης ποιος έχει τα καλύτερα αυτοκόλλητα στο λαπτοπ.",
};

const banner2Props = {
  type: "square",
  icon: <img src={talkImage} />,
  title: "Talks",
  text:
    "Συζητάμε για εργαλεία, τεχνολογίες και δρώμενα. Επίσης ανταλλάζουμε αυτοκόλλητα.",
};

const IndexHero: React.FC = () => {
  const [heroElement, setHeroElement] = useState<JSX.Element | null>(null);

  const lottieAnimation = (
    <LottieAnimation animation={animation} shouldPlay={true} />
  );

  const fetchUpcomingEvents = async (today: string) => {
    const res = await fetch(
      `http://localhost:1337/events?_where[date_gte]=${today}&_sort=date:ASC`,
      {
        credentials: "same-origin",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      }
    );
    const events = await res.json();
    setHeroElement(
      events.length > 0 ? (
        <Card
          link={`/${events[0].type.slug}/${events[0].topic.slug}/${events[0].slug}/`}
          image={events[0].poster.url}
          title={events[0].title}
          place={events[0].place}
          eventType={events[0].type.title}
          date={formatDate(events[0].date)}
          summary={events[0].summary}
        />
      ) : (
        lottieAnimation
      )
    );
  };

  useEffect(() => {
    const today: string = new Date().toISOString();
    fetchUpcomingEvents(today);
  }, []);

  return (
    <Hero
      element={heroElement!}
      headTitle="Ο οδηγός σου στα προγραμματιστικά σου ταξίδια."
      description="Νέες τεχνολογίες, νέα δρόμενα. Γίνε κόμβος της κοινότητας και έλα να το εξερευνήσουμε
          μαζί!"
    />
  );
};

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <IndexHero />
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
