// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        return response.data;
    })
    .then(data => {
        return Object.keys(data.articles).map(i => data.articles[i]);
    })
    .then(articles => {
        console.log(articles);
        articles.forEach(category => {
            category.forEach(article => {
                cardsContainer.append(Card(article));
            })
        })
    });

const cardsContainer = document.querySelector(".cards-container");


function Card(article) {
    // Elements
    const card = document.createElement("div");
    card.classList.add("card");

    const headLine = document.createElement("div");
    headLine.classList.add("headLine");
    headLine.textContent = article.headline;

    const author = document.createElement("div");
    author.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const authorImg = document.createElement("img");
    authorImg.src = article.authorPhoto;

    const authorName = document.createElement("span");
    authorName.textContent = `By: ${article.authorName}`;

    // Structure
    card.append(headLine);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImg);
    author.append(authorName);

    return card;
}