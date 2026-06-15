import { useStep } from "@/context/StepContext";
import { 
    FaCcVisa, FaCcMastercard, FaCcStripe, FaCcPaypal 
} from "react-icons/fa";


const FooterProgressBar = () => {
    const { step } = useStep();
    
    return (
        <footer>
            <div className="footer__content">
                <div className="grid-container grid-container--width-viewport">
                    <div className="grid-x vertical-align">
                        <div className="cell small-12 medium-9 large-10 text-center mb--md--20">
                            <ul className="bullet-service__lists">
                                <li><span className={`bullet-points ${step === 1 ? 'is-active' : ''}`}></span>Services</li>
                                <li><span className={`bullet-points ${step === 2 ? 'is-active' : ''}`}></span>Location</li>
                                <li><span className={`bullet-points ${step === 2 ? 'is-active' : ''}`}></span>Date</li>
                                <li><span className={`bullet-points ${step === 3 ? 'is-active' : ''}`}></span>Amount</li>
                                <li><span className={`bullet-points ${step === 4 ? 'is-active' : ''}`}></span>Confirmation</li>
                                <li><span className={`bullet-points ${step === 5 ? 'is-active' : ''}`}></span>Payment</li>
                                <li><span className={`bullet-points ${step === 6 ? 'is-active' : ''}`}></span>Complete</li>
                            </ul>
                        </div>
                        <div className="cell small-12 medium-3 large-2 text-center">
                            <div className="secure-payment">
                                <small>Secure Payment<i className="fas fa-lock icon-lock"></i></small>
                                <ul>
                                    <li><FaCcVisa className="icon" /></li>
                                    <li><FaCcMastercard className="icon" /></li>
                                    <li><FaCcStripe className="icon" /></li>
                                    <li><FaCcPaypal className="icon" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterProgressBar;