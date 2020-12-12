import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./cheatsheet.scss";
import { theme } from "../../enums/theme";

interface cheatsheetChapterField {
  command: string;
  explanation: string;
}
export interface cheatsheetChapter {
  title: string;
  fields: Array<cheatsheetChapterField>;
}

export interface cheatsheetProps {
  theme: theme;
  chapters: Array<cheatsheetChapter>;
}

const Cheatsheet: React.FC<cheatsheetProps> = ({
  theme,
  chapters,
}: cheatsheetProps) => {
  return (
    <div className="cheatsheet">
      <h3 className="cheatsheet__title">Cheatsheet</h3>

      {chapters.map((chapter) => (
        <Accordion className="cheatsheet__accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{chapter.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="cheatsheet__field-wrapper">
              {chapter.fields.map((field) => (
                <span className="cheatsheet__field">
                  <span
                    className={`cheatsheet__field-command cheatsheet__field-command--${theme}`}
                  >
                    {field.command}
                  </span>{" "}
                  - {field.explanation}
                </span>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
      <div className="cheatsheet__body">
        {chapters.map((chapter) => (
          <div className="cheatsheet__chapter">
            <h4 className="cheatsheet__chapter-title">{chapter.title}</h4>
            <div className="cheatsheet__field-wrapper">
              {chapter.fields.map((field) => (
                <span className="cheatsheet__field">
                  <span
                    className={`cheatsheet__field-command cheatsheet__field-command--${theme}`}
                  >
                    {field.command}
                  </span>{" "}
                  - {field.explanation}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheatsheet;
