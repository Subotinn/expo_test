function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// https://en.wikipedia.org/wiki/Relative_luminance
const isDarkColor = (r: number,g: number,b: number) => {
  const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
  return lum < 0.5;
};

export const colorGenerator = () => {
  const result = [];

  for (let i = 0; i < 3; i++) {
    result.push(getRandomNumber(255))
  }

  return {
    color: `rgb(${result.join(',')})`,
    isDark: isDarkColor(...result)
  }
}
