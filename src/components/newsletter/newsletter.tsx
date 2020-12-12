import React from "react";
import "./newsletter.scss";
import { RightOutlined } from "@ant-design/icons";

const arrowIcon = <RightOutlined style={{ fontSize: 14 }} />;

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__text">
        <h4 className="newsletter__title">Newsletter</h4>
        <p className="newsletter__description">
          Μπες στη λίστα και ενημερώσου άμεσα για το επόμενο event!
        </p>
        <input
          placeholder="example@domain.com"
          type="text"
          className="newsletter__form"
        ></input>

        <button className="button">{arrowIcon}Εγγραφή</button>
      </div>
    </div>
  );
};

export default Newsletter;
