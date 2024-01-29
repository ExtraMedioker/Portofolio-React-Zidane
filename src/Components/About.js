import "../styles/components/about.css";

export default function About() {
    return (
        <section id="about" class="about container section">
            <div class="about__content">
                <h2 class="about__title">About</h2>
                <p class="about__description">
                    Hello there! I'm Zidan, a
                    <strong> Frontend / Fullstack-Jamstack </strong> web developer based
                </p>
                <p class="about__description">
                    People who know me say I'm obsessed, that's fair, I am very driven and
                    love learning new things.
                </p>
                <hr class="about__hr" />
                <h3 class="about__subtitle">Technologies</h3>
                <div class="about__ul-container">
                    <ul class="about__ul">
                        <li class="about__list">JavaScript (ES6+)</li>
                        <li class="about__list">CSS</li>
                        <li class="about__list">HTML</li>
                    </ul>
                    <ul class="about__ul">
                        <li class="about__list">ReactJS</li>
                        <li class="about__list">NextJS</li>
                        <li class="about__list">TailwindCSS</li>
                    </ul>
                </div>
            </div>
            <div class="about__img-wrapper">
                <img
                    class="about__img lazy loading"
                    src="https://via.placeholder.com/720"
                    data-src="/about.jpg"
                    alt="Profile picture"
                />
            </div>
        </section>
    );
}