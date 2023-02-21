export function validarImg(arrImg) {
  if (
    Array.isArray(arrImg) &&
    arrImg.length > 0 &&
    typeof arrImg[0] === "object"
  ) {
    return arrImg[0].url;
  }
}
