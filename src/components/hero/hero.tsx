import React from "react";
import Button from "../button/button";
import "./hero.scss";

interface heroProps {
  cta: JSX.Element;
}

const Hero: React.FC<heroProps> = ({ cta }: any) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">
          Τα frameworks πληθαίνουν. Ας τα ανακαλύψουμε μαζί.
        </h1>
        <p className="hero__subtitle">
          Όσο επιταχύνεται ο ρυθμός ανάπτυξης νέων τεχνολογιών, τόσο ευκολότερα
          χανόμαστε στο δάσος. Γίνε κόμβος της κοινότητας και έλα να το εξερευνήσουμε
          μαζί!
        </p>
        <Button>Περισσότερα</Button>
      </div>
      {cta}
    </div>
  );
};

export default Hero;
