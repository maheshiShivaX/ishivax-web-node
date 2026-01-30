import "../../ComponentsCss/VectorLine.css";

const VectorLineDots = ({ heading }) => {
    return (
        <div className="section-vector">
            <div className="section-vector__container">

                <img
                    className="section-vector__line section-vector__line--top"
                    src="/images/Vector-upper-arrow.png"
                    alt=""
                />

                <div className="section-vector__row">
                    <div className="section-vector__content">

                        {/* Left Decoration */}
                        <div className="section-vector__decor">
                            <div className="section-vector__dots section-vector__dots--top">
                                <span className="section-vector__dot"></span>
                                <span className="section-vector__dot"></span>
                            </div>

                            <img
                                className="section-vector__cross"
                                src="/images/vector.png"
                                alt=""
                            />

                            <div className="section-vector__dots section-vector__dots--bottom">
                                <span className="section-vector__dot"></span>
                                <span className="section-vector__dot"></span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="section-vector__heading-wrapper d-flex justify-content-center align-items-center">
                           <h2 className='fw-special-title vector-heading'>{heading}</h2>
                        </div>

                        {/* Right Decoration */}
                        <div className="section-vector__decor">
                            <div className="section-vector__dots section-vector__dots--top">
                                <span className="section-vector__dot"></span>
                                <span className="section-vector__dot"></span>
                            </div>

                            <img
                                className="section-vector__cross"
                                src="/images/vector.png"
                                alt=""
                            />

                            <div className="section-vector__dots section-vector__dots--bottom">
                                <span className="section-vector__dot"></span>
                                <span className="section-vector__dot"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <img
                    className="section-vector__line section-vector__line--bottom"
                    src="/images/Vector-upper-arrow.png"
                    alt=""
                />

            </div>
        </div>
    )
}

export default VectorLineDots;