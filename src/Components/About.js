import "../styles/components/about.css";

export default function About() {
    return (
        <section id="about" className="about container section">
            <div className="about__content">
                <h2 className="about__title">About</h2>
                <p className="about__description">
                    Hello there! I'm Zidan, a
                    <strong> Programmers </strong> web developer/Android applications
                </p>
                <p className="about__description">
                    People who know me say I'm obsessed, that's fair, I am very driven and
                    love learning new things.
                </p>
                <hr className="about__hr" />
                <h3 className="about__subtitle">Technologies</h3>
                <div className="about__ul-container">
                    <ul className="about__ul">
                        <li className="about__list">JavaScript (ES6+)</li>
                        <li className="about__list">CSS</li>
                        <li className="about__list">HTML</li>
                    </ul>
                    <ul className="about__ul">
                        <li className="about__list">ReactJS</li>
                        <li className="about__list">NextJS</li>
                        <li className="about__list">TailwindCSS</li>
                    </ul>
                </div>
            </div>
            <div className="about__img-wrapper">
                <img
                    className="about__img lazy loading"
                    src="https://via.placeholder.com/720"
                    data-src="/about.jpg"
                    alt="Profile picture"
                />
            </div>
        </section>
    );
}