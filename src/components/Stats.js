import React from 'react'
import { useState, useEffect } from 'react'

function Stats() {

    const [data, Setdata] = useState();
    const [playerName, SetplayerName] = useState("");

    function fetchStats() {
        fetch (`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`)
        .then((response) => response.json())
        .then((data) => {
            Setdata(data);
            console.log(data);
        }).catch(err => alert("Enter a valid Player First Name and Last Name"));
    }

  return (
    <>
        <div className=' flex justify-center outline-transparent'>
          <input type="text" className='bg-gray-400 my-2 rounded-xl py-2 px-2' onChange={(e) => SetplayerName(e.target.value)} />
          <button className=' ml-2 bg-white px-5 rounded-2xl text-2xl scale-75' onClick={() => {
            fetchStats();
          }}>Search</button>
        </div>

        {data && (
            <div className=' flex py-32 justify-between px-52'>
                <div className=' text-2xl tracking-normal font-normal'>
                    <h1 className=' font-bold py-2 text-6xl'>Stats</h1>
                    <h2 className=' font-bold py-2'>Player Name : <span className=' font-normal'>{data.results[0].player_name}</span></h2>
                    <h2 className=' font-bold py-2'>Age: <span className=' font-normal'>{data.results[0].age}</span></h2>
                    <h2 className=' font-bold py-2'>Team: <span className=' font-normal'>{data.results[0].team}</span></h2>
                    <h2 className=' font-bold py-2'>Games: <span className=' font-normal'>{data.results[0].games}</span></h2>
                    <h2 className=' font-bold py-2'>Games Started: <span className=' font-normal'>{data.results[0].games_started}</span></h2>
                    <h2 className=' font-bold py-2'>Three Point Percentage: <span className=' font-normal'>{parseFloat(data.results[0].three_percent).toFixed(3) * 100}%</span></h2>
                    <h2 className=' font-bold py-2'>Two Point Percentage: <span className=' font-normal'>{parseFloat(data.results[0].two_percent).toFixed(3) * 100}%</span></h2>
                    <h2 className=' font-bold py-2'>Free Throw Percentage: <span className=' font-normal'>{parseFloat(data.results[0].ft_percent).toFixed(3) * 100}%</span></h2>
                    <h2 className=' font-bold py-2'>Minutes Played: <span className=' font-normal'>{data.results[0].minutes_played}</span></h2>
                    <h2 className=' font-bold py-2'>Field Goals: <span className=' font-normal'>{data.results[0].field_goals}</span></h2>
                </div>
                <div className=' -mt-16'>
                  <img className='w-[30rem]' src="ythtrfh.png" alt="" />
                  <h1 className=' -mt-24 text-center text-[13rem] font-bold mr-6'>{data.results[0].season}</h1>
                </div>
            </div>
        )}
    </>
  )
}

export default Stats