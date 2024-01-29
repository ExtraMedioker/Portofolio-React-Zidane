import "../styles/components/hero.css";

export default function Hero(props) {
    return (
        <section className="hero container">
            <img className="hero__img" src={props.img} alt="Profile picture" />
            <h2 className="hero__subtitle">Hi, I'm Zidan 👋</h2>
            <h1 className="hero__title">
                FRONT-END <br />
                WEB DEVELOPER.
            </h1>
            <p className="hero__description">
                A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
                developer and <strong>UI/UX</strong>
                enthusiast specialized in building stunning pixel-perfect interactive
                websites/applications.
            </p>
            <a className="hero__btn btn" href="#">
                Reach out
            </a>
        </section>
    );
}