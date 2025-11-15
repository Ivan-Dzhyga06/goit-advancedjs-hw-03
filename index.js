import{S as d,i}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const p="53253736-a3cf91f55509a87605f2e1ca6",m="https://pixabay.com/api/";async function y(s){const e=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(`${m}?${e}`);if(!o.ok)throw new Error("Pixabay error");return o.json()}function h(s){return s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </li>
    `).join("")}function g(){return new d(".gallery-link")}const l=document.querySelector("#search-form"),u=document.querySelector("#gallery"),f=document.querySelector("#loader");let a;l.addEventListener("submit",async s=>{s.preventDefault();const e=s.target.query.value.trim();if(!e){i.error({message:"Enter search query!",position:"topRight"});return}u.innerHTML="",f.classList.remove("hidden");try{const o=await y(e);if(o.hits.length===0){i.warning({message:"Sorry, no images found. Try again!",position:"topRight"});return}u.insertAdjacentHTML("beforeend",h(o.hits)),a&&a.destroy(),a=g()}catch{i.error({message:"Server error, please try again!",position:"topRight"})}finally{f.classList.add("hidden"),l.reset()}});
//# sourceMappingURL=index.js.map
