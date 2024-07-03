export function MobileFooter() {
    return (

            <footer role="contentinfo" aria-label="Site footer">
            <nav aria-label="Footer navigation">
                <ul>
                <li>
                    <a href="/about" aria-label="About page">
                    <span className='footer-links' aria-hidden="true">ABOUT</span>
                    <span className="sr-only">About page</span>
                    </a>
                </li>
                {/* <li>
                    <a href="/contact" aria-label="Contact page">
                    <span className='footer-links' aria-hidden="true">CONTACT</span>
                    <span className="sr-only">Contact page</span>
                    </a>
                </li> */}
                <li>
                    <a href="/publications" aria-label="Publications page">
                    <span className='footer-links' aria-hidden="true">PUBLICATIONS</span>
                    <span className="sr-only">Publications page</span>
                    </a>
                </li>
                <li>
                    <a href="/cv" aria-label="Curriculum Vitae page">
                    <span className='footer-links' aria-hidden="true">CV</span>
                    <span className="sr-only">Curriculum Vitae page</span>
                    </a>
                </li>
                </ul>
            </nav>
            </footer>

        
    )
}