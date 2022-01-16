import React from "react";
import "./MyStyle.css";

const seasonConfig = {
    Winter: {
        appropriateText: 'Burr, It\'s chilly',
        appropriateIcon: 'ac_unit'
    },
    Summer: {
        appropriateText: 'let\'s hit the beach',
        appropriateIcon: 'wb_sunny'
    }
}

const checkSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {

    const season = checkSeason(props.lat, new Date().getMonth());
    const { appropriateText, appropriateIcon } = seasonConfig[season]; //Destructuring assignment
    return (
        <div>
            <span className={`material-icons xxLarge icon-left ${season}`}>{appropriateIcon}</span>
            <div className="text-center">

                <div> Latitude is : {props.lat}</div>
                <div> We are in<strong> {new Date().getMonth() + 1} </strong> of Month</div> <br />

                <div> So, the Season in this location is:<strong> {season} </strong></div>
                <div> {appropriateText}</div>
            </div>

            <span className={`material-icons xxLarge icon-right ${season}`}>{appropriateIcon}</span>
        </div>
    )
}

export default SeasonDisplay;