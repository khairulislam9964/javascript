function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const distanceMiles = 2;
const distanceKm = milesToKilometer (distanceMiles);
console.log(distanceKm);