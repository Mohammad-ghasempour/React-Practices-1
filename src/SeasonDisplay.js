import React from "react";

const checkSeason = (lat , month) =>{
    if (month>2 && month<9){
        return lat>0 ? 'Summer' : 'Winter';
    }
    else {
        return lat>0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {
    const season = checkSeason(props.lat , new Date().getMonth());
return( 
    <div>
        <div> Latitude is : {props.lat}</div>
        <div> We are in<strong> {new Date().getMonth()}th </strong> of Month</div> <br/>

<div> So, the Season in this location is:<strong> {season} </strong></div>
</div>
)
}

export default SeasonDisplay;