import React, { useState } from 'react';

//API import //API key and the base
const api = {
  key: "a4921afcce0812f427af18b89573da55",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({}); //set weather to empty object

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className='data-container'>
          <div className='container-inside'>
            <div className="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search for a location..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            {(typeof weather.main != "undefined") ? (
              <div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}<span className='temp-size'>°c</span>
                  </div>
                  
                </div>

                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                  <div className="temp-2">
                  <div className="weather">{weather.weather[0].main}</div>
                  </div>
                </div>
              </div>

            ) : ('')}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
