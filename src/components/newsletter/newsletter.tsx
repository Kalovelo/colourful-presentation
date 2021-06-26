import React, { useContext } from "react";
import "./newsletter.scss";
import { RightOutlined } from "@ant-design/icons";
import { OnlineContext } from "../context/NetworkContext";

const arrowIcon = <RightOutlined style={{ fontSize: 14 }} />;

const Newsletter = () => {
  const onlineContext = useContext(OnlineContext);

  const [disableButton, setdisableButton] = React.useState(false);
  React.useEffect(() => {
    setdisableButton(!onlineContext?.isOnline);
  }, [onlineContext, onlineContext?.isOnline]);

  const getSubmissionText = () =>
    onlineContext?.isOnline ? "Εγγραφή" : " Αναμονή για σύνδεση";

  return (
    <div className="newsletter">
      <form
        action={`${process.env.GATSBY_MAILCHIMP_FORM_URL}/subscribe/post?u=${process.env.GATSBY_MAILCHIMP_FORM_U}&amp;id=${process.env.GATSBY_MAILCHIMP_FORM_ID}`}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div className="newsletter__text">
          <h4 className="newsletter__title">Newsletter</h4>
          <p className="newsletter__description">
            Μπες στη λίστα και ενημερώσου άμεσα για το επόμενο event!
          </p>
          <input
            placeholder="example@domain.com"
            className="newsletter__form"
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
          ></input>

          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            disabled={disableButton}
          >
            {arrowIcon}
            {getSubmissionText()}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
