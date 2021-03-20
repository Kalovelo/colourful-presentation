import { string } from "prop-types";

export interface IExperience {
  title: string;
  brief: string;
}

export interface IAboutData {
  api: {
    about: {
      title: string;
      description: string;
      experience_section_title: string;
      experience: [IExperience];
      primary_image: {
        url: string;
        alternativeText: string | undefined;
      };
      secondary_image: {
        url: string;
        alternativeText: string | undefined;
      };
      quote: {
        person: string;
        saying: string;
      };
    };
  };
}
