const addressLat = 4;
const addressLong = 8;
const positionLat = -10;
const positionLong = 34;

distance = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) ** 2);

console.log(`Координаты точки A - (${addressLat}, ${addressLong})`);
console.log(`Координаты точки B - (${positionLat}, ${positionLong})`);
console.log(`Расстояние между точками A и B - ${distance.toFixed(2)}`);