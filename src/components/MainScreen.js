import React, { useState } from 'react';




//API import //API key and the base
const api = {
  key: process.env.REACT_APP_DB_KEY,
  base: process.env.REACT_APP_DB_BASE
}

function MainScreen() {
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
      {(typeof weather.main != "undefined") ? (
        <div className='data-container'>
          <div className='container-inside'>
            <div className="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            
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
                  { weather.weather[0].id === 800 ? ( <img src='https://cdn3d.iconscout.com/3d/premium/thumb/sun-and-cloud-3715214-3105197.png'/>  ) : ( <img src="https://thumbs.dreamstime.com/b/realistic-weather-forecast-icon-summer-sunny-sun-halo-vector-illustration-realistic-weather-icon-sunny-halo-sky-126765142.jpg"/> )}
                  {/* <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].id === 800) ? 'app warm' : 'app') : 'app'}> */}
                </div>
              </div>

            
          </div>
        </div>
        ) : (  
            <div className='data-container'>
            <div className='container-inside'>
              <img className='threedIllustration' alt="img" src="https://res.cloudinary.com/dckwf6med/image/upload/v1664387959/Web%20Dev%20Projects/thunder_1_pctiba.webp"/>
              <h1 className='titleText'>Discover the weather <br/>in your location </h1>
              <p className='paragraphText'>Type a valid location, in order <br/>to optain the weather informations</p>

              <div className="search-box">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
              </div>
  
              
            </div>
          </div>
          )}
      </main>
    </div>
  );
}

export default MainScreen;
