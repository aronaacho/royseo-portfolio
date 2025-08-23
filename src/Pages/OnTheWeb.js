import Lenis from 'lenis';
export function OnTheWeb() {
    const data = require('../data/ontheweb.json');
    // console.log(data)
    var sortedArticles = {}

    data.articles.forEach((item) => {
        console.log(item.id)
        if (!(item.year in sortedArticles)) {
            sortedArticles[item.year] = []
        }
        sortedArticles[item.year].push({'id': item.id, 'title': item.title, 'url': item.url})
    })
    
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

    const lenis = new Lenis()

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return (
        <div className='home-container'>
            <div className='fade-item page-content publications-page'>
                <h1 className='page-title'>
                    ON THE WEB
                </h1>
                <div>
                    {articleSections}
                    {/* WE_CARE_RESET Journey: */}
                <video controls className='video-we-care-reset'>
                    <source src='img/we-care-interview.mp4' type="video/mp4"/>
                </video>     
                </div>
            </div>
        </div>
        
    )
}

function ArticleCards(props) {
    const articleArr = props.yearData

    const articleCardsArr = articleArr.map((article) => {
        return (
            <li key={article.id} className='article-card'>
                <a href={article.url} rel="noopener noreferrer" className="external-link">
                {article.title}
                </a>
            </li>
        )
    })
    return articleCardsArr
}