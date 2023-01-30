// The value saved to kevin will stay constant

const kelvin = 293;

// Celsius is 273 degrees less than Kelvin

var celsius = kelvin - 273;
console.log(celsius);

// Formula for fahrenheit
// Rounded down

var fahrenheit = celsius * (9/5) + 32;
console.log(Math.floor(fahrenheit));

console.log(`the temperature is ${fahrenheit} degrees fahrenheit.`);











