import { useState } from "react";
import { 
    FaInfoCircle, 
    FaMapMarker, 
    FaCalendarAlt
} from "react-icons/fa";
import Calendar from "../Calendar";

const StepLocationAndDate = () => {
    const [isModalOpen, setIsModalOpen] = useState({ location: false, date: false, info: false });

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
                                        <h2>Collection Details
                                            <button 
                                                type="button"
                                                className="info-lightbox-link hide-for-medium" 
                                                onClick={() => setIsModalOpen(prevState => ({ ...prevState, info: true }))}
                                            >
                                                <FaInfoCircle />
                                            </button>
                                        </h2>
                                        <p>Quam diu etiam furor iste tuus nos eludet? Pellentesque habitant morbi
                                        tristique senectus et netus.</p>

                                        <div className="location__lists">
                                            <div className="grid-x grid-padding-x">
                                                <div className="cell small-12 msmall-6 medium-6 mb--md--12">
                                                    <a 
                                                        className="is-active is-selected"
                                                        onClick={() => setIsModalOpen(prevState => ({ ...prevState, location: true }))}
                                                    >
                                                        <div className="location__block">
                                                            <FaMapMarker className="icon-marker show-for-medium" />
                                                            <p>Select Location</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="cell small-12 msmall-6 medium-6 mb--md--12">
                                                    <a data-toggle="date" onClick={() => setIsModalOpen(prevState => ({ ...prevState, date: true }))}>
                                                        <div className="location__block">
                                                            <FaCalendarAlt className="icon-calender show-for-medium" />
                                                            <p>Select Date</p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="cell small-12 mt--md--32 mb--md--32 mb--48 mt--48">
                                                    <div className="mb--8"><strong>Location:</strong> Belfast BT6 8DQ</div>
                                                    <div className="mb--8"><strong>Date:</strong> Thurs 10th Oct 2019</div>
                                                    <div className="mb--8"><strong>Cost:</strong> &#163;30.00</div>
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
            
            {/* Location Modal */}
            <div className={`reveal-overlay ${isModalOpen.location ? 'is-active' : ''}`}>
                <div className="reveal">
                    <div className="address text-center">
                        <h4>Choose Your Location</h4>
                        <ul className="address__lists">
                            <li><button className="btn btn--white width100 height100" type="button">83 Emerson Road, Kirk Deighton, LS22 2TA</button></li>
                            <li><button className="btn btn--white width100 height100" type="button">117 Canterbury Road, Upton Bishop, HR9 5PB</button></li>
                            <li><button className="btn btn--white width100 height100" type="button">120 Whatlington Road, Cothelstone, TA4 2SL</button></li>
                            <li><button className="btn btn--white width100 height100" type="button">53 Argyll Street, Staintondale, YO13 9EL</button></li>
                            <li><button className="btn btn--white width100 height100" type="button">72 Caerfai Bay Road, Tebworth, LU7 6JL</button></li>
                        </ul>
                        <button className="btn btn--secondary" type="button">Submit<i className="fas fa-chevron-right icon-right"></i></button>
                        <button 
                            className="close-button" 
                            onClick={() => setIsModalOpen(prevState => ({ ...prevState, location: false }))}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>    
                    </div>
                </div>
            </div>

            {/* Date Modal */}
            <div
                 className={`reveal-overlay ${isModalOpen.date ? 'is-active' : ''}`} 
            >   
                <div className="reveal">
                    <div className="date date--sm-padding text-center">
                        <h4>Choose Your Date</h4>
                    </div>

                    <Calendar />
                    
                    <button 
                        className="close-button" 
                        onClick={() => setIsModalOpen(prevState => ({ ...prevState, date: false }))}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>    
                </div>       
            </div>

            <div className={`reveal-overlay ${isModalOpen.info ? "is-active" : ""}`}>
                <div className="reveal">
                    <div 
                        className="highlighted-text highlighted-text--black highlighted-text--padding"
                        onClick={(e) => e.stopPropagation()} 
                        >
                        <button 
                            className="close-button" 
                            onClick={() => setIsModalOpen(prevState => ({ ...prevState, info: false }))}
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

export default StepLocationAndDate;