import "../styles/components/contact.css";

export default function Contact() {
    return (<section id="contact" className="contact container section">
        <h2 className="contact__title">Get In Contact</h2>
        <p className="contact__description">
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible.
        </p>
        <a className="contact__btn btn" href="mailto:slayingthedragon.io@gmail.com" target="_blank">
            React Out
        </a>
    </section>);
}