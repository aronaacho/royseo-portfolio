export function About() {
    const photoJson = require('../data/photos.json');
    console.log(photoJson)
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
                    <h1 className='page-title'>
                        A LOOK INTO ROY'S MIND
                    </h1>
                    <p className='bio-text'>
                    I'm a psychologist with a Ph.D., currently focused on applying machine learning to medical imaging analysis. My work aims to improve disease detection through innovative computational methods.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eu tincidunt aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nunc. Donec euismod, nunc sit amet aliquam tincidunt, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nunc. Sed euismod, nunc sit amet aliquam tincidunt, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nunc.
                    </p>
                    <h2 className='subheading'>
                        LET'S KEEP IN TOUCH
                    </h2>
                    <ul className="contact-section-container">
                        <div className="contact-links contact-section-container">
                            <div className="contact-section">
                                <li>
                                <a href="mailto:royseo@uw.edu" aria-label="Send email to royseo@uw.edu">
                                    royseo@uw.edu
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="tel:+18123273053" aria-label="Call +1-812-327-3053">
                                    +1-812-327-3053
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="tel:+821021436634" aria-label="Call +82–10-2143-6634">
                                    +82–10-2143-6634
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="https://scholar.google.com/citations?user=g1RCvm8AAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar profile (opens in a new tab)">
                                    Google Scholar
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="https://www.linkedin.com/in/roy-seo-ph-d-a9710b84/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
                                    LinkedIn
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="https://www.goodreads.com/user/show/161510895" target="_blank" rel="noopener noreferrer" aria-label="Goodreads profile (opens in a new tab)">
                                    Goodreads
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                                </li>
                            </div>
                            <div className="contact-section">
                                <li>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github profile (opens in a new tab)">
                                    Github
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='photo-wrapper'>
                    <img key="0" src={"/img/roy-headshot.jpg"} alt={"Headshot of Roy Seo"} className="roy-img"/>
                </div>
            </div>
        </div>
    )
}