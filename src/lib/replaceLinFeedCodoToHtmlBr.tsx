export const replaceLinFeedCodoToHtmlBr = (str: string) => {
  return str.split(/(\n)/).map((item) => {
    return item.match(/\n/) ? <br /> : item;
  });
};
