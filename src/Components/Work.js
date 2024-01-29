import "../styles/components/work.css";

export default function Work() {
    return (
        <section className="work container section">
            <h2 className="work__title">Projects</h2>
            <p className="work__description">
                Mollit pariatur tempor nisi dolor non consequat magna cupidatat
                reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo
                deserunt ipsum.
            </p>
            <div className="work__container">
                {/* <!-- Project 1 --> */}
                <h3 className="work__project-title">Project 1</h3>
                <div className="work__img-wrapper work__image1">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/waxmoney.png"
                        alt="Project 1"
                    />
                </div>
                <div className="work__project work__content1">
                    <h3 className="work__project-subtitle">Project 1</h3>
                    <p className="work__project-description1">
                        Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim
                        pariatur deserunt do ad exercitation.
                    </p>
                    <p className="work__project-description2">
                        Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum
                        commodo. Do esse excepteur cillum deserunt duis incididunt. Eu
                        tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris
                        adipisicing cupidatat sint.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
                {/* <!-- Project 2 --> */}
                <h3 className="work__project-title">Project 2</h3>
                <div className="work__img-wrapper work__image2">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/drazeforce.png"
                        alt="Project 2"
                    />
                </div>
                <div className="work__project work__content2">
                    <h3 className="work__project-subtitle">Project 2</h3>
                    <p className="work__project-description1">
                        Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt
                        exercitation excepteur do reprehenderit fugiat Lorem sint ut.
                    </p>
                    <p className="work__project-description2">
                        Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
                        adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non
                        amet nostrud officia duis.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
                {/* <!-- Project 3 --> */}
                <h3 className="work__project-title">Project 3</h3>
                <div className="work__img-wrapper work__image3">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/artren.png"
                        alt="Project 3"
                    />
                </div>
                <div className="work__project work__content3">
                    <h3 className="work__project-subtitle">Project 3</h3>
                    <p className="work__project-description1">
                        Aliquip eu ad est reprehenderit veniam irure exercitation in velit
                        enim ipsum.
                    </p>
                    <p className="work__project-description2">
                        Elit est amet quis incididunt officia velit eiusmod do amet. Sint
                        non qui nulla sit ex cillum non pariatur velit proident ut aliqua
                        fugiat incididunt id minim.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
                {/* <!-- Project 4 --> */}
                <h3 className="work__project-title">Project 4</h3>
                <div className="work__img-wrapper work__image4">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/platformpro.png"
                        alt="Project 4"
                    />
                </div>
                <div className="work__project work__content4">
                    <h3 className="work__project-subtitle">Project 4</h3>
                    <p className="work__project-description1">
                        Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim
                        pariatur deserunt do ad exercitation.
                    </p>
                    <p className="work__project-description2">
                        Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum
                        commodo. Do esse excepteur cillum deserunt duis incididunt. Eu
                        tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris
                        adipisicing cupidatat sint.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
                {/* <!-- Project 5 --> */}
                <h3 className="work__project-title">project 5</h3>
                <div className="work__img-wrapper work__image5">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/wallysvegan.png"
                        alt="Project 5"
                    />
                </div>
                <div className="work__project work__content5">
                    <h3 className="work__project-subtitle">project 5</h3>
                    <p className="work__project-description1">
                        Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt
                        exercitation excepteur do reprehenderit fugiat Lorem sint ut.
                    </p>
                    <p className="work__project-description2">
                        Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
                        adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non
                        amet nostrud officia duis.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
                {/* <!-- Project 6 --> */}
                <h3 className="work__project-title">project 6</h3>
                <div className="work__img-wrapper work__image6">
                    <img
                        className="lazy loading"
                        src="https://via.placeholder.com/900"
                        data-src="/portfolio.png"
                        alt="Project 6"
                    />
                </div>
                <div className="work__project work__content6">
                    <h3 className="work__project-subtitle">project 6</h3>
                    <p className="work__project-description1">
                        Aliquip eu ad est reprehenderit veniam irure exercitation in velit
                        enim ipsum.
                    </p>
                    <p className="work__project-description2">
                        Elit est amet quis incididunt officia velit eiusmod do amet. Sint
                        non qui nulla sit ex cillum non pariatur velit proident ut aliqua
                        fugiat incididunt id minim.
                    </p>
                    <a className="btn work__project-btn" href="#">
                        Website
                    </a>
                </div>
            </div>
        </section>
    );
}
