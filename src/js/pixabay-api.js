const API_KEY = "53253736-a3cf91f55509a87605f2e1ca6"; 
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  const response = await fetch(`${BASE_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Pixabay error");
  }

  return response.json();
}
