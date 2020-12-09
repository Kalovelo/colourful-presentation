import React from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import LottieAnimation from "../../components/Lottie/Lottie";
import SEO from "../../components/seo";
import "./index.scss";

const animation = require("./lottie__codetext.json");
const visualAnimation = <LottieAnimation animation={animation} shouldPlay={true} />;

const talkImage = require("./images/talk.png");
const workshopImage = require("./images/workshop.png");

const cardProps = {
  type: "Talk",
  image:
    "https://events.stellarouzi.com/static/media/git-zero-hero-poster.7eea4e56.png",
  title: "Code Management with Git: from Zero to Hero!",
  date: "10 Μαΐου",
  place: "Θεσσαλονίκη",
  link: "http://localhost:8000/",
};

const card = <Card {...cardProps} />;

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

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Hero
          element={visualAnimation}
          cta="adasd"
          headTitle="Ο οδηγός σου στα προγραμματιστικά σου ταξίδια."
          description="Νέες τεχνολογίες, νέα δρόμενα. Γίνε κόμβος της κοινότητας και έλα να το εξερευνήσουμε
          μαζί!"
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
