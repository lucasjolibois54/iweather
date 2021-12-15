

//API import //API key and the base
const api ={
  key: "956b6569408f5bae21b09f59d3887b01",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input 
              type='text'
              className='search-bar'
              placeholder='Search...'/>
        </div>
      </main>

    </div>
  );
}

export default App;
