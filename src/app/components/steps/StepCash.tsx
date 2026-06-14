import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";

const StepCash = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <main className="page-body">
                <section className="login-section">
                    <div className="grid-container grid-container--width-viewport">
                        <div className="block__container">
                            <div className="block__left block__left--static-cash-page block__left--height-viewport90" style={{backgroundImage: "url(./assets/images/building.jpg)"}}>
                                <div className="block__content block__content--md-padding">
                                    <div className="highlighted-text">
                                        <h2>Magna pars studiorum prodita quaerimus.</h2>
                                        <ul className="highlighted-text__lists">
                                            <li>Grand total must not exceed &#163;5,000</li>
                                            <li>Coin total must not exceed &#163;500</li>
                                            <li>Idque Caesaris facere voluntate</li>
                                            <li>Quisque placerat facilisis egestas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                             <div className="block__right block__right--static-cash-page block__right--height-viewport90">
                                <div className="block__content block__content--static block__content--static-cash-page block__content--md-padding">
                                    <div className="cash">
                                        <h2>Cash Requirements
                                            <button 
                                                type="button"
                                                className="info-lightbox-link hide-for-medium" 
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                <FaInfoCircle />
                                            </button>
                                        </h2>
                                        <p>Quam diu etiam furor iste tuus nos eludet? Pellentesque habitant morbi
                                        tristique senectus et netus.
                                        </p>
                                        <div className="cash__lists">
                                            <div className="grid-x grid-padding-x align-center">
                                                <div className="cell small-12 msmall-6 medium-6 large-6 mb--md--12">
                                                    <div className="cash__block">
                                                        <h4>Coins</h4>
                                                         <ul className="thead__lists">
                                                            <li>
                                                                <span className="img-block"></span>
                                                                <span className="value-block">Value</span>
                                                                <span className="select-block">&#35; Of Bags</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="tbody__lists">
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">&#163;2</span>
                                                                <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">&#163;1</span>
                                                                    <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">50p</span>
                                                                <span className="select-block">
                                                                    <select id="bag-2" name="bag-2">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </span> 
                                                            </li>
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">20p</span>
                                                                <span className="select-block">
                                                                <select id="bag-2" name="bag-2">
                                                                    <option disabled selected>0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">10p</span>
                                                                <span className="select-block">
                                                                <select id="bag-2" name="bag-2">
                                                                    <option disabled selected>0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                </span>
                                                                <span className="value-block">5p</span>
                                                                <span className="select-block">
                                                                <select id="bag-1" name="bag-1">
                                                                    <option disabled selected>0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <div className="cell small-12">
                                                            <div className="subtotal__coin">
                                                                <span className="cash-subtitle">Coins Total:</span>
                                                                <span className="cash-total">&#163;500.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="cell small-12 msmall-6 medium-6 mb--md--12">
                                                    <div className="grid-y grid-padding-y">
                                                        <div className="small-10 medium-10 large-10">
                                                        <div className="cash__block">
                                                            <h4>Notes</h4>
                                                            <ul className="thead__lists">
                                                                <li>
                                                                    <span className="img-block"></span>
                                                                    <span className="value-block">Value</span>
                                                                    <span className="select-block">&#35; Of Bags</span>
                                                                </li>
                                                            </ul>
                                                            <ul className="tbody__lists">
                                                                <li>
                                                                    <span className="img-block">
                                                                        <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                    </span>
                                                                    <span className="value-block">&#163;50</span>
                                                                    <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                    </span>
                                                                    <span className="value-block">&#163;20</span>
                                                                    <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="img-block">
                                                                    <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                    </span>
                                                                    <span className="value-block">&#163;10</span>
                                                                    <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="img-block">
                                                                        <img className="info-logo" src="./assets/images/info-icon.svg" alt="info icon" />
                                                                    </span>
                                                                    <span className="value-block">&#163;5</span>
                                                                    <span className="select-block">
                                                                    <select id="bag-1" name="bag-1">
                                                                        <option disabled selected>0</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <div className="cell small-12">
                                                            <div className="subtotal__coin">
                                                                <span className="cash-subtitle">Notes Total:</span>
                                                                <span className="cash-total">	&#163;500.00</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="small-2 medium-2 large-2 pt--16">
                                                            <div className="cash__block">
                                                                <div className="subtotal__coin">
                                                                <span className="cash-subtitle">Grand Total:</span>
                                                                <span className="cash-total cash-total--primary-color">&#163;5,001.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grand-total">
                                                    <span>Grand total must not exceed &#163;5,000</span>
                                                </div>

                                            </div>

                                            <div className="grid-x">
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

export default StepCash;