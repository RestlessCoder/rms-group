import { 
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft
} from "react-icons/md";

const Calendar = () => {
    
    return (
        <div className="calendar">
            <div className="calendar__month">
                <div className="cal-month__previous">
                    <MdKeyboardArrowLeft />
                </div>
                <div className="cal-month__current"></div>
                <div className="cal-month__next">
                    <MdKeyboardArrowRight />
                </div>
            </div>
            <div className="calendar__head">
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
                <div className="cal-head__day"></div>
            </div>
            <div className="calendar__body">
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
                <div className="cal-body__week">
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                    <div className="cal-body__day"></div>
                </div>
            </div>
            <ul className="date__lists">
                <li>
                    <span className="hash-tag hash-tag--current">&#35;</span>
                    <span className="pl--16">&#163;28</span>
                </li>
                <li>
                    <span className="hash-tag hash-tag--selected">&#35;</span>
                    <span className="pl--16">&#163;21</span>
                </li>
                <li>
                    <span className="hash-tag">&#35;</span>
                    <span className="pl--16">&#163;18</span>
                </li>
                <li>
                    <span className="hash-tag">&#35;</span>
                    <span className="pl--16">N/A</span>
                </li>
            </ul>
            <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Calendar;