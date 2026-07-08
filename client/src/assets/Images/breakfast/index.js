// Helper to import all images dynamically
function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    const name = key
      .replace("./", "")
      .replace(/\.(png|jpe?g|svg)$/i, "")
      .toLowerCase()
      .replace(/\s+/g, "_"); // convert all spaces to underscore
    images[name] = r(key);
  });
  return images;
}


// 🔹 Import all breakfast images (png/jpg) automatically
const breakfastImages = importAll(
  require.context("./", false, /\.(png|jpe?g)$/)
);

export default breakfastImages;
