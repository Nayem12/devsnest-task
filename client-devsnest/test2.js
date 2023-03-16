const myCars = [
  { name: "Axio 2018 WXB", priceLakh: 22.5 },
  { name: "Premio 2015", priceLakh: 26 },
  { name: "Rickshaw", priceLakh: 0.5 },
  { name: "Civic 2019", priceLakh: 34.5 },
];

const totalExceptCars = myCars
  .filter((car) => car.name !== "Rickshaw")
  .reduce((prev, {priceLakh}) => prev + priceLakh, 0);

console.log(`Total Price of Cars = ${totalExceptCars} lac`);
