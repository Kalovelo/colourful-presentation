import { theme } from "../../enums/theme";

export interface ICheatsheetProps {
  theme: theme;
  chapters: Array<ICheatsheetChapter>;
}

export interface ICheatsheetChapterField {
  command: string;
  explanation: string;
}
export interface ICheatsheetChapter {
  title: string;
  fields: Array<ICheatsheetChapterField>;
}
