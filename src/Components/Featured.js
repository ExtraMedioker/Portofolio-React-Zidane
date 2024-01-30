import "../styles/components/featured.css";

export default function Featured() {
    return (
        <section id="featured" className="featured container section">
            <h3 className="featured__subtitle">Featured</h3>
            <div className="featured__wrapper">
                <h2 className="featured__title">ExtraMedioker</h2>
                <a aria-label="link featured projects" className="featured__link" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                    </svg>
                </a>
            </div>
            <p className="featured__description">
                Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
                voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
                consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
                do aliquip nulla laboris.
            </p>
            <div className="featured__info-container">
                <div>
                    <h3 className="featured__label">Tech stack</h3>
                    <ul className="featured__tech-stack">
                        <li className="featured__info">TailwindCSS</li>
                        <li className="featured__info">ReactJS</li>
                        <li className="featured__info">Java</li>
                        <li className="featured__info">Flutter</li>
                    </ul>
                </div>
                <div>
                    <h3 className="featured__label">Social Media</h3>
                    <p className="featured__info">
                        <a href="https://github.com/ExtraMedioker">Github</a>
                    </p>
                </div>
                <div>
                    <h3 className="featured__label">Timeline</h3>
                    <p className="featured__info">2021 - 2024</p>
                </div>
            </div>
        </section>
    );
}