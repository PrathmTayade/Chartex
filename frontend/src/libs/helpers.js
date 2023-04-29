export function getRandomColor(brightness = 255) {
  // Calculate random RGB values
  const randomColor = `rgb(${Math.floor(
    Math.random() * brightness
  )},${Math.floor(Math.random() * brightness)},${Math.floor(
    Math.random() * brightness
  )})`;

  // Create a hex color string from the RGB values
  const hexColor = `#${randomColor
    .slice(4, -1)
    .split(", ")
    .map((colorValue) => Number(colorValue).toString(16).padStart(2, "0"))
    .join("")}`;

  return {
    backgroundColor: hexColor + "80", // 80 is the alpha value, adjust as needed
    borderColor: hexColor,
  };
}
