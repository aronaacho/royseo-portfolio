export function About() {
    // when we will add more images...
    // const photoJson = require('../data/photos.json');
    // const photoCards = photoJson.photos.map((item) => {
    //     console.log(item.url)
    //     return (
    //         <img key={item.id} src={item.url} alt={item.description} className="roy-img"/>
    //     )
    // })

    // console.log(photoCards)
    return (
        <div className='home-container'>
            <div className="page-content about-page fade-item">
                <div className='fade-item about-text'>
                <b>ROY SEO</b> (Hebrew: ro’eh; Korean: 서로이), Ph.D., is a cognitive neuroscientist passionate about understanding how individual differences—both inherent and experiential—shape brain structure and function. With expertise in neuroimaging and computational modeling, she applies machine learning techniques to analyze MRI data, aiming to improve the prediction of neurodegenerative disorders while uncovering protective factors against cognitive decline.
                <br/>
                <br/>
                Her research explores individual differences in language acquisition and processing and their potential contributions to cognitive advantages. This includes infants' word learning using preferential looking paradigms and eye tracking, children's language and music processing through fMRI, and bilingual language control mechanisms, with a focus on rule-based behaviors.
                <br/>
                <br/>
                Beyond research, Roy loves reading about God and people (autobiographies) and is always eager to discuss the latest additions on her (or your!) shelf.



                </div>
                <div className='photo-wrapper'>
                    <img key="0" src={"/img/roy-headshot.jpg"} alt={"Headshot of Roy Seo"} className="roy-img"/>
                </div>
            </div>
        </div>
    )
}