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
        <div className='header'>
          <h2 className='logo'>iWeather</h2>
          <p className='developer developed-mobile-margin'>Developed by <a href='https://www.lucasjolibois.com/' target="_blank" rel="noreferrer">Lucas Jolibois</a></p>
        </div>
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
              </div>

            
          </div>
        </div>
        




<input className="modal-state" id="modal-1" type="checkbox" />
<div className="modal">
  <label className="modal__bg" for="modal-1"></label>
  <div className="modal__inner">
    <label className="modal__close" for="modal-1"></label>
    <div className='center-modal-content'>
    <h2 className='modal-header'>Information about <br/>{weather.name}, {weather.sys.country}</h2>

    <div className=''>
          <div className='content-in-overview'>
            <div className='box-1-overview mobile-box'>
            <div className="weather"><h3 className='box-titles-modal'>Min temp</h3><p className='box-data-p'>{weather.main.temp_min}<span className=''>°c</span></p></div>
              <div className="weather"><h3 className='box-titles-modal'>Max temp</h3><p className='box-data-p'>{weather.main.temp_max}<span className=''>°c</span></p></div>
              <div className="weather"><h3 className='box-titles-modal'>Feels Like</h3><p className='box-data-p'>{weather.main.feels_like}<span className=''>°c</span></p></div>
            </div>
            
            <div className='seperator'/>
            <div className='box-1-overview'>
              <div className="weather"><h3 className='box-titles-modal'>Humidity</h3><p className='box-data-p'>{weather.main.humidity}<span className=''>%</span></p></div>
              <div className="weather"><h3 className='box-titles-modal'>Pressure</h3><p className='box-data-p'>{weather.main.pressure}<span className=''></span></p></div>
              <div className="weather"><h3 className='box-titles-modal'>Sea Level</h3>{ weather.main.sea_level ? ( <p className='box-data-p'>{weather.main.sea_level}</p>  ) : ( <p className='box-data-p'>N.A.</p> )} </div>
            </div>
            <div className='seperator'/>
            <div className='box-1-overview'>
              <div className="weather"><h3 className='box-titles-modal'>Wind Speed</h3><p className='box-data-p'>{weather.wind.speed}<span className=''> m/s</span></p></div>
              <div className="weather"><h3 className='box-titles-modal'>Wind Direction</h3>{ weather.wind.deg > 22.5 && weather.wind.deg <67.5 ? ( <p className='box-data-p'>North Easterly</p>  ) : weather.wind.deg > 67.5 && weather.wind.deg <112.5 ? ( <p className='box-data-p'>Easterly</p>  ) : weather.wind.deg > 122.5 && weather.wind.deg <157.5 ? ( <p className='box-data-p'>South Easterly</p>  ) : weather.wind.deg > 157.5 && weather.wind.deg <202.5 ? ( <p className='box-data-p'>Southerly</p>  ) : weather.wind.deg > 202.5 && weather.wind.deg <247.5 ? ( <p className='box-data-p'>South Westerly</p>  ) : weather.wind.deg > 247.5 && weather.wind.deg <292.5 ? ( <p className='box-data-p'>Westerly</p>  ) : weather.wind.deg > 292.5 && weather.wind.deg <337.5 ? ( <p className='box-data-p'>North Westerly</p>  ) :  ( <p className='box-data-p'>N.A.</p> )}</div>
            </div>
          </div>
          
        </div></div>

  </div>
</div>


 

        <div className='phone-nav-button'>
          {/* <div className='nav-option-button nav-button'><p><label className="btn" for="modal-1" id='info'>more info</label></p></div> */}
          <div className='nav-option-button nav-button'><label className="btn" for="modal-1" ><img src='https://res.cloudinary.com/dckwf6med/image/upload/v1664626863/Web%20Dev%20Projects/Group_33_1_xgedwb.svg'/></label></div>

          {/* <div className='nav-option nav-icon'><img alt='icon' src='https://res.cloudinary.com/dckwf6med/image/upload/v1664493501/Web%20Dev%20Projects/Group_czdibd.png'/></div>
          <div className='nav-option nav-icon'><img alt='icon' src='https://res.cloudinary.com/dckwf6med/image/upload/v1664493501/Web%20Dev%20Projects/wind-icon_1_wpwzo3.png'/></div>
          <div className='nav-option nav-icon'><img alt='icon' src='https://res.cloudinary.com/dckwf6med/image/upload/v1664493501/Web%20Dev%20Projects/plus-round-line-icon_1_rditol.png'/></div> */}
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
              <div className="weather"><h3 className='box-titles'>Pressure</h3><p className='box-data-p'>{weather.main.pressure}<span className=''></span></p></div>
              <div className="weather"><h3 className='box-titles'>Sea Level</h3>{ weather.main.sea_level ? ( <p className='box-data-p'>{weather.main.sea_level}</p>  ) : ( <p className='box-data-p'>N.A.</p> )} </div>
            </div>
          </div>
        </div>
        </div>
        ) : (  
          <div className='data-container'>
          <div className='container-inside'>

          
                
                <div className="location-box center-location-box">
                  <div className="weather-box">
                  <div className="temp-main margin-title-2">
                    iWeather
                  </div>
                </div>
                  {/* <div className="location">uSearch</div> */}
                  {/* <div className="date">ffff</div> */}
                   <div className="temp-2">
                  {/* <div className="weather2">Type a valid input </div> */}
                  {/* <div className="weather">fff</div> */}
                  
                  </div> 
                  <div className="search-box-main">
              <input
                type="text"
                className="search-bar"
                placeholder="Type a valid location..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
                </div>
                
              <div>
              </div>

            
          </div>
        </div>
          )}
      </main>
    </div>
  );
}

export default MainScreen;
