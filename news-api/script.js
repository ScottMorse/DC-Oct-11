const articleArea = document.querySelector('#article-area')
const pageWrap = document.querySelector('#article-area')
let mobile = false

const articles = news.articles
let i = 0
articles.forEach(article=>{
    const newDiv = document.createElement('div')
    newDiv.classList.add('article')
    if(i % 2 == 1){
        newDiv.classList.add('reverse')
    }
    newDiv.innerHTML = `
        <div class="article-header${i % 2 == 1 ? ' push-right' : ''}">
            <a class="title-link" target="_blank" href="${article.url}" noopener><h2>${article.title}</h2></a>
            <a class="url-link" target="_blank" href="${article.url}" noopener>Read full article here</a>
            <div class="article-subhead">
                <div class="source">Source: ${article.source.name} | </div><div class="author"> Author: ${article.author} | </div><div class="publish-date">Date: ${article.publishedAt.slice(0,10)}</div>
            </div>
            <p class="article-desc">${article.description}</p>
        </div>
        <a class="image-link" target="_blank" href="${article.url}" style='background-image: url(${article.urlToImage})' noopener></a>
    `
    articleArea.appendChild(newDiv)
    i++
})