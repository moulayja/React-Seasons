import React from 'react'


 const SeasonDisplay= props => {

     const getSeason =(lat, month)=>{
         if( month > 2 && month < 9 ){
             return lat > 0 ? 'Summer' : 'Winter'
         }else{
            return lat > 0 ?  'Winter' :  'Summer'
         }
     }

     const season = getSeason(props.lat, new Date().getMonth())
     const seasonPref = season === 'Winter' ? `Burr it's Chilly` : `Let's hit the Beach`
    return (
        <div>
            <h1>{seasonPref}</h1>
        </div>
    )
}

export default SeasonDisplay;
