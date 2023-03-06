export function validarImg(arrImg) {
  if (
    Array.isArray(arrImg) &&
    arrImg.length > 0 &&
    typeof arrImg[0] === "object"
  ) {
    return arrImg[0].url;
  }
}

export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const convertCurrency = ({ currency, value }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency,
  });
  return formatter.format(value);
};
