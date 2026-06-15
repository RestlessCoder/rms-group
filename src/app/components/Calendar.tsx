import { 
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft
} from "react-icons/md";
import { useState } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(weekday);
dayjs.extend(localeData);

const Calendar = () => {
    const [month, setMonth] = useState(dayjs());
    const [selected, setSelected] = useState(dayjs());
    const today = dayjs();

    const weekDays = dayjs.weekdaysShort(); 

    const startOfMonth = month.startOf("month").startOf("week");
    const endOfMonth = month.endOf("month").endOf("week");

    const days: dayjs.Dayjs[] = [];
    let day = startOfMonth;
    while (day.isBefore(endOfMonth, "day") || day.isSame(endOfMonth, "day")) {
        days.push(day);
        day = day.add(1, "day");
    }

    const handlePrev = () => setMonth(month.subtract(1, "month"));
    const handleNext = () => setMonth(month.add(1, "month"));

    return (
        <div className="calendar">
            <div className="calendar__month">
                <button className="cal-month__previous" onClick={handlePrev}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className="cal-month__current">{month.format("MMMM YYYY")}</div>
                <button className="cal-month__next" onClick={handleNext}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className="calendar__head">
                {weekDays.map((day) => (
                    <div key={day} className="cal-head__day">
                        {day}
                    </div>
                ))}
            </div>
            <div className="calendar__body"> 
                {days.map((d) => {
                    const isCurrentMonth = d.month() === month.month();
                    const isToday = d.isSame(today, "day");
                    const isSelected = d.isSame(selected, "day");
                    const isPast = d.isBefore(today, "day");

                    let classes = "cal-body__day ";
                    if (isCurrentMonth) classes += "cal-day__month--current ";
                    else if (d.isBefore(month, "month")) classes += "cal-day__month--previous ";
                    else classes += "cal-day__month--next ";
                    if (isToday) classes += "cal-day__day--today ";
                    if (isSelected) classes += "cal-day__day--selected ";
                    if (isPast) classes += "cal-day__disabled "

                    return (
                        <div
                            key={d.toString()}
                            className={classes}
                            onClick={() => setSelected(d)}
                        >
                            {d.date()}
                        </div>
                    );
                })}
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