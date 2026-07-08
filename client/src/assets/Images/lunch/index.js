function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    const key = item.replace("./", "").replace(/\.(png|jpe?g)$/,""); // remove extension
    images[key] = r(item);
  });
  return images;
}

// 🔹 Import all lunch images (png/jpg) automatically
export const lunchImages = importAll(
  require.context("./", false, /\.(png|jpe?g)$/)
);
