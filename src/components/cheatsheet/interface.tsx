import { theme } from "../../enums/theme";

export interface cheatsheetProps {
  theme: theme;
  chapters: Array<cheatsheetChapter>;
}

export interface cheatsheetChapterField {
  command: string;
  explanation: string;
}
export interface cheatsheetChapter {
  title: string;
  fields: Array<cheatsheetChapterField>;
}
