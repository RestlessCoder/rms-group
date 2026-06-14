import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const StepServices = () => {
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
                            <div className="block__right">
                                <div className="block__content block__content--static block__content--md-padding">
                                    <div className="services">
                                        <h2>Choose Your Service
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
                                        <div className="services__lists">
                                        <div className="grid-x grid-padding-x">
                                            <div className="cell small-12 msmall-4 medium-4 mb--md--12">
                                                <a href="confirmation.php">
                                                    <div className="services__block">
                                                        <img className="show-for-medium" src="./assets/images/calender.svg" alt="calender" />
                                                        <p>Book A Collection</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="cell small-12 msmall-4 medium-4 mb--md--12">
                                                <a href="confirmation.php">
                                                    <div className="services__block">
                                                        <img className="show-for-medium" src="./assets/images/delivery.svg" alt="delivery" /> 
                                                        <p>Book A Delivery</p>
                                                    </div>
                                                </a>
                                            </div>
                                                <div className="cell small-12 msmall-4 medium-4 mb--md--12 ">
                                                    <a href="confirmation.php">
                                                        <div className="services__block">
                                                            <img className="show-for-medium" src="./assets/images/collection.svg" alt="collection" />
                                                            <p>Book Collection & Delivery</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="grid-x hide-for-medium mt--md--16">
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

export default StepServices;