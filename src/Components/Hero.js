import "../styles/components/hero.css";

export default function Hero(props) {
    return (
        <section class="hero container">
            <img class="hero__img" src={props.img} alt="Profile picture" />
            <h2 class="hero__subtitle">Hi, I'm Zidan 👋</h2>
            <h1 class="hero__title">
                FRONT-END <br />
                WEB DEVELOPER.
            </h1>
            <p class="hero__description">
                A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
                developer and <strong>UI/UX</strong>
                enthusiast specialized in building stunning pixel-perfect interactive
                websites/applications.
            </p>
            <a class="hero__btn btn" href="#">
                Reach out
            </a>
        </section>
    );
}