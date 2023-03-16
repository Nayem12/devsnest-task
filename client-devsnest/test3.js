var baseSKU = "kf1097";

var variationOptions = [
  { name: "size", options: [40, 41, 42, 43] },
  { name: "color", options: ["black", "brown", "chocolate"] },
  { name: "price", options: [10, 15, 24, 40] },
];

function prepareCodes() {
  const codes = [];
  for (let size of variationOptions[0].options) {
    for (let color of variationOptions[1].options) {
      for (let price of variationOptions[2].options) {
        const code = `${baseSKU}-${size}-${color}-${price}`;
        codes.push(code);
      }
    }
  }
  return codes;
}
var productCodes = prepareCodes();
console.log(productCodes);
