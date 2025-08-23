import Lenis from 'lenis';
export function Publications() {
    const data = require('../data/articles.json');
    console.log(data)
    var sortedArticles = {}

    data.articles.forEach((item) => {
        console.log(item.id)
        if (!(item.year in sortedArticles)) {
            sortedArticles[item.year] = []
        }
        sortedArticles[item.year].push({'id': item.id, 'title': item.title, 'url': item.url, 'authors': item.authors, 'abstract': item.abstract, 'image': item.image, 'pdf': item.pdf})
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

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return (
        <div className='home-container'>
            <div className='fade-item page-content publications-page'>
                <h1 className='page-title'>
                    RESEARCH
                </h1>
                <i className='article-year' style={{color : 'black', border: '1px solid black', padding: '5px', margin: '5px 0px'}}>
                    2025: In Preparation
                </i>
                {articleSections}
            </div>
        </div>
    )
}

function ArticleCards(props) {
    const articleArr = props.yearData


    const articleCardsArr = articleArr.map((article) => {
        if (!article.image) {
            return (
                <li key={article.id} className='article-card' style={{color: 'pink'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div>
                            <a href={article.url}>
                                {article.title}
                            </a>
                            <div>
                                <em className='author-names'>
                                    {article.authors.join(', ')}
                                </em>
                                <p className='abstract'>
                                    {article.abstract}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        } else {
            return (
                <li key={article.id} className='article-card'>
                    <div className="img-article-card">
                        <div>
                            <a href={article.url} target="" rel="noopener noreferrer">
                                {article.title}
                            </a>
                            <div>
                                <em className='author-names'>
                                    {article.authors.join(', ')}
                                </em>
                                <div>
                                    <a href={article.pdf} download={article.title + " Roy Seo"} className='pdf-button' style={{color: 'white'}}>PDF</a>
                                </div>
                                <p className='abstract'>
                                    {article.abstract}
                                </p>
                            </div>
                        </div>
                        <div className="article-image">
                        <img key="0" src={article.image} alt={article.title}/>
                        </div >
                    </div>

                </li>
            )
        }
    })
    return articleCardsArr
}