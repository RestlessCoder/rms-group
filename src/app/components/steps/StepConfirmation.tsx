import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const StepConfirmation = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <main className="page-body">
                <section className="login-section">
                    <div className="grid-container grid-container--width-viewport">
                        <div className="block__container">
                            <div className="block__left" style={{ backgroundImage: "url(./assets/images/building.jpg)" }}>
                                <div className="block__content">
                                    <div className="highlighted-text">
                                        <h2>Magna pars studiorum prodita quaerimus.</h2>
                                        <p>Magna pars studiorum, prodita quaerimus. Cum ceteris in veneratione
                                        tui montes, nascetur mus. Vivamus sagittis lacus vel augue laoreet
                                        rutrum faucibus. Morbi fringilla convallis sapien, id pulvinar odio
                                        volutpat
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="block__right block__right--static">
                                <div className="block__content block__content--static block__content--md-padding block__content--relative">
                                    <div className="collection">
                                        <h2>Confirmation
                                            <button 
                                                type="button"
                                                className="info-lightbox-link hide-for-medium" 
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                <FaInfoCircle />
                                            </button>
                                        </h2>
                                        <p>Quam diu etiam furor iste tuus nos eludet? Pellentesque habitant morbi
                                        tristique senectus et netus.</p>

                                        <div className="collection-slider">
                                            <div className="item">
                                                <div className="collection-slider__content">
                                                <div className="grid-x grid-padding-x align-center">
                                                    <div className="cell small-12 medium-8 large-10">
                                                        <div className="collection__block">
                                                            <h4>Collection</h4>
                                                            <div className="location"><span>Location:</span> Belfast BT6 8DQ</div>
                                                            <div className="date"><span>Date:</span> Thurs 10th Oct 2019</div>
                                                            <div className="cost"><span>Cost:</span> &#163;30.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="collection-slider__content">
                                                    <div className="grid-x grid-padding-x align-center">
                                                        <div className="cell small-12 medium-8 large-10">
                                                        <div className="collection__block">
                                                            <h4>Collection</h4>
                                                            <div className="location"><span>Location:</span> Belfast BT6 8DQ</div>
                                                            <div className="date"><span>Date:</span> Thurs 10th Oct 2019</div>
                                                            <div className="cost"><span>Cost:</span> &#163;30.00</div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="total-payment">
                                            <p><span>Total:</span> &#163;84.00</p>
                                        </div>

                                        <div className="grid-x mt--md--16">
                                            <div className="cell small-12">
                                                <button type="button" className="btn btn--secondary btn--lg-width35">
                                                    Continue
                                                    <MdKeyboardArrowRight className="icon-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div 
                className={`reveal-overlay ${isModalOpen ? "is-active" : ""}`}
                onClick={() => setIsModalOpen(false)}
                    >
                <div className="reveal">
                    <div 
                        className="highlighted-text highlighted-text--black highlighted-text--padding"
                        onClick={(e) => e.stopPropagation()} 
                        >
                        <button 
                            className="close-button" 
                            onClick={() => setIsModalOpen(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h2>Secure Coin Logistics & Bulk Cash Solutions.</h2>
                        <p>
                            Managing your daily currency needs shouldn't be a hassle. We specialize in secure, reliable coin delivery and collection services for 
                            businesses of all sizes. We ensure your floats are perfectly balanced and securely transported.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );  
}

export default StepConfirmation;