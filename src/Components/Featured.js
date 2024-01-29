import "../styles/components/featured.css";

export default function Featured() {
    return (
        <section id="featured" class="featured container section">
            <h3 class="featured__subtitle">Featured</h3>
            <div class="featured__wrapper">
                <h2 class="featured__title">ExtraMedioker</h2>
                <a aria-label="link featured projects" class="featured__link" href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                    </svg>
                </a>
            </div>
            <p class="featured__description">
                Cillum voluptate tempor cillum culpa cupidatat labore voluptate ullamco
                voluptate culpa sunt nulla non. Ad cupidatat dolore quis amet pariatur
                consectetur ullamco. Officia quis id velit duis cupidatat sunt deserunt
                do aliquip nulla laboris.
            </p>
            <div class="featured__info-container">
                <div>
                    <h3 class="featured__label">Tech stack</h3>
                    <ul class="featured__tech-stack">
                        <li class="featured__info">TailwindCSS</li>
                        <li class="featured__info">ReactJS</li>
                    </ul>
                </div>
                <div>
                    <h3 class="featured__label">Social Media</h3>
                    <p class="featured__info">
                        <a href="https://github.com/ExtraMedioker">Github</a>
                    </p>
                </div>
                <div>
                    <h3 class="featured__label">Timeline</h3>
                    <p class="featured__info">2021 - 2024</p>
                </div>
            </div>
        </section>
    );
}