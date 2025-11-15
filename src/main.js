import { fetchImages } from "./js/pixabay-api.js";
import { renderImages, initLightbox } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector("#search-form");
const gallery = document.querySelector("#gallery");
const loader = document.querySelector("#loader");

let lightbox;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.query.value.trim();

  if (!query) {
    iziToast.error({
      message: "Enter search query!",
      position: "topRight",
    });
    return;
  }

  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        message: "Sorry, no images found. Try again!",
        position: "topRight",
      });
      return;
    }

    gallery.insertAdjacentHTML("beforeend", renderImages(data.hits));

    if (lightbox) lightbox.destroy();
    lightbox = initLightbox();

  } catch (err) {
    iziToast.error({
      message: "Server error, please try again!",
      position: "topRight",
    });
  } finally {
    loader.classList.add("hidden");
    form.reset();
  }
});
