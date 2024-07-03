export function Publications() {
    const data = require('../data/articles.json');
    console.log(data)
    var sortedArticles = {}

    data.articles.forEach((item) => {
        console.log(item.id)
        if (!(item.year in sortedArticles)) {
            sortedArticles[item.year] = []
        }
        sortedArticles[item.year].push({'id': item.id, 'title': item.title, 'url': item.url})
    })
    
    console.log(sortedArticles)

    const articleSections = Object.keys(sortedArticles).reverse().map((year) => {
        console.log(year, sortedArticles[year])
        return (
            <div key={year} className='year-section'>
                <div className='article-year'>
                    {year}
                </div>
                <ul>
                    <ArticleCards yearData={sortedArticles[year]}/>
                </ul>
            </div>
        )
    })

    return (
        <div className='home-container'>
            <div className='fade-item page-content publications-page'>
                <h1 className='page-title'>
                    PUBLICATIONS
                </h1>
                {articleSections}
            </div>
        </div>
    )
}

function ArticleCards(props) {
    const articleArr = props.yearData

    const articleCardsArr = articleArr.map((article) => {
        return (
            <li key={article.id} className='article-card'>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="external-link">
                {article.title}
                </a>
            </li>
        )
    })
    return articleCardsArr
}