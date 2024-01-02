const accesskey = "Zm9XBasZJhssIz6trolxWkRsgc3_aMRcL363HGIperI";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value; // Change from inputEl.Value to inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result"); // Change from imagewrapper to imageWrapper
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt =  result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html; // Change from imageLink.rel to imageLink.href
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper); // Change from imagewrapper to imageWrapper
    });

    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
    
     if (page > 1) {
    showMore.classList.add("show"); 
}
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
    
});

