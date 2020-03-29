import React from 'react';
import './SeasonDisplay.css'


 const SeasonDisplay= props => {

     const getSeason =(lat, month)=>{
         if( month > 2 && month < 9 ){
             return lat > 0 ? 'summer' : 'winter'
         }else{
            return lat > 0 ?  'winter' :  'summer'
         }
     }

     const season = getSeason(props.lat, new Date().getMonth());
     const seasonPref = season === 'winter' ? `Burr it's Chilly` : `Let's hit the Beach`;
     const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div className={`${season}`}>
            <i className={`icon-left massive ${icon} icon`}/>
            <h1 className="text">{seasonPref}</h1>
            <i className={`icon-right massive  ${icon} icon`}/>
        </div>
    )
}

export default SeasonDisplay;
