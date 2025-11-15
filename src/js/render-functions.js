import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
  return images.map(img => {
    return `
      <li class="gallery-item">
        <a href="${img.largeImageURL}" class="gallery-link">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${img.likes}</p>
          <p>Views: ${img.views}</p>
          <p>Comments: ${img.comments}</p>
          <p>Downloads: ${img.downloads}</p>
        </div>
      </li>
    `;
  }).join("");
}

export function initLightbox() {
  return new SimpleLightbox(".gallery-link");
}
