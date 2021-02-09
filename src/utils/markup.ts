const createMarkup = (richText: string) => {
  return {
    __html: richText,
  };
};

export default createMarkup;
