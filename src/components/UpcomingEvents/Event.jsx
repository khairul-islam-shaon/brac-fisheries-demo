'use client'
import calender from "../../../public/icons/calender.svg"
import clock from "../../../public/icons/clock.svg"
import globe from "../../../public/icons/globe.svg"
import {useSelector} from "react-redux";
import moment from "moment";
require('moment/locale/bn')
const Event = ({card}) => {
    const { Language } = useSelector((state) => state);

    function banglaDate(dateStr){
      return dateStr?.replace(/\s*\(.*\)/, '')
    }

    function bnTimeFormat(datetimeStr){
        const timePart = datetimeStr?.match(/\(([^)]+)\)/)[1];
        return timePart?.replace(/:০০:০০/, ':০০');
    }

    function enTimeFormat(datetimeStr){
      const date = new Date(datetimeStr);
      const options = { hour: '2-digit', minute: '2-digit', hour12: true };
      return date.toLocaleTimeString('en-US', options);
    }

    return (
    <section className="event">
      <div className="event-name">
        <div className="calender-icon">
          <img src={calender.src} width={74} height={74} alt="" />
        </div>
        <h3>{Language.data === "EN" ? card.title : card?.event_language[0]?.title}</h3>
      </div>
      <hr />
      <div className="date">
        <div>
          <h4>{Language.data === "EN" ? moment(card.start_date, "YYYY-MM-DD HH:mm:ss").format("DD MMMM YYYY") : banglaDate(card?.event_language[0]?.start_date)}</h4>
          <div className="time-container">
            <div className="time">
              <img src={clock.src} alt="" />
              {/*<p>{timeFormate(card?.start_date)} - {timeFormate(card?.end_date)}</p>*/}
              <p>{Language.data === "EN" ? enTimeFormat(card?.start_date)+" - "+enTimeFormat(card?.end_date) : bnTimeFormat(card?.event_language[0]?.start_date) +" - "+ bnTimeFormat(card?.event_language[0]?.end_date)}</p>
            </div>
            <div className="location">
              <img src={globe.src} alt="" />
              <p>{Language.data === "EN" ? card.location : card?.event_language[0]?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
