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
    /*<div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>*/
    <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].id === 800 || weather.weather[0].id === 951) ? 'app warm' : (weather.weather[0].id === 804 || weather.weather[0].id === 801 || weather.weather[0].id === 802 || weather.weather[0].id === 803) ? 'app cloudy' : (weather.weather[0].id === 500 || weather.weather[0].id === 501 || weather.weather[0].id === 502 || weather.weather[0].id === 503 || weather.weather[0].id === 504 || weather.weather[0].id === 511 || weather.weather[0].id === 520 || weather.weather[0].id === 521 || weather.weather[0].id === 522 || weather.weather[0].id === 523) ? 'app rain' : ('app')) : 'app'}>

      
      <main>
      {(typeof weather.main != "undefined") ? (
        <div>
        <div className='data-container'>
          <div className='container-inside'>

          
                
                <div className="location-box center-location-box">
                  <div className="weather-box">
                  <div className="temp-main">
                    {Math.round(weather.main.temp)}<span className='temp-size'>°c</span>
                  </div>
                </div>
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                  <div className="temp-2">
                  <div className="weather">{weather.weather[0].main}</div>
                  <div className="weather">{weather.cod[200]}</div>
                  
                  </div>
                  <div className="search-box-main">
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
                
           
            
              <div>
                {/* <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}<span className='temp-size'>°c</span>
                  </div>
                  
                </div> */}

                {/* <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                  <div className="temp-2">
                  <div className="weather">{weather.weather[0].main}</div>
                  <div className="weather">{weather.cod[200]}</div>
                  
                  </div> */}
                  {/* { weather.weather[0].id === 800 ? ( <img alt="img" src='https://cdn3d.iconscout.com/3d/premium/thumb/sun-and-cloud-3715214-3105197.png'/>  ) : ( <img alt="img" src="https://cdn-icons-png.flaticon.com/512/4150/4150939.png"/> )} */}
                  {/* <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].id === 800) ? 'app warm' : 'app') : 'app'}> */}
                {/* </div> */}
              </div>

            
          </div>
        </div>
        <div className='weather-data-overview'>
          <div className='content-in-overview'>
            <div className='box-1-overview'>
              <div className="weather"><h3 className='box-titles'>Min temp</h3><p className='box-data-p'>{weather.main.temp_min}<span className=''>°c</span></p></div>
              <div className="weather"><h3 className='box-titles'>Max temp</h3><p className='box-data-p'>{weather.main.temp_max}<span className=''>°c</span></p></div>
              <div className="weather"><h3 className='box-titles'>Feels Like</h3><p className='box-data-p'>{weather.main.feels_like}<span className=''>°c</span></p></div>
            </div>
            <div className='seperator'/>
            <div className='box-1-overview'>
              <div className="weather"><h3 className='box-titles'>Wind Speed</h3><p className='box-data-p'>{weather.wind.speed}<span className=''> m/s</span></p></div>
              <div className="weather"><h3 className='box-titles'>Wind Direction</h3>{ weather.wind.deg > 22.5 && weather.wind.deg <67.5 ? ( <p className='box-data-p'>North Easterly</p>  ) : weather.wind.deg > 67.5 && weather.wind.deg <112.5 ? ( <p className='box-data-p'>Easterly</p>  ) : weather.wind.deg > 122.5 && weather.wind.deg <157.5 ? ( <p className='box-data-p'>South Easterly</p>  ) : weather.wind.deg > 157.5 && weather.wind.deg <202.5 ? ( <p className='box-data-p'>Southerly</p>  ) : weather.wind.deg > 202.5 && weather.wind.deg <247.5 ? ( <p className='box-data-p'>South Westerly</p>  ) : weather.wind.deg > 247.5 && weather.wind.deg <292.5 ? ( <p className='box-data-p'>Westerly</p>  ) : weather.wind.deg > 292.5 && weather.wind.deg <337.5 ? ( <p className='box-data-p'>North Westerly</p>  ) :  ( <p className='box-data-p'>N.A.</p> )}</div>
            </div>
            <div className='seperator'/>
            <div className='box-1-overview'>
              <div className="weather"><h3 className='box-titles'>Humidity</h3><p className='box-data-p'>{weather.main.humidity}<span className=''>%</span></p></div>
              <div className="weather"><h3 className='box-titles'>Pressuree</h3><p className='box-data-p'>{weather.main.pressure}<span className=''></span></p></div>
              <div className="weather"><h3 className='box-titles'>Sea Level</h3>{ weather.main.sea_level ? ( <p className='box-data-p'>{weather.main.sea_level}</p>  ) : ( <p className='box-data-p'>N.A.</p> )} </div>
            </div>
          </div>
        </div>
        </div>
        ) : (  
            <div className='data-container'>
            <div className='container-inside'>
              <img className='threedIllustration' alt="img" src="https://res.cloudinary.com/dckwf6med/image/upload/v1664387959/Web%20Dev%20Projects/thunder_1_pctiba.webp"/>
              <h1 className='titleText text-red-500'>Discover the weather <br/>in your location </h1>
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
