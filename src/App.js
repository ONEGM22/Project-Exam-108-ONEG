import './App.css';
function App() {
  return (
    <div className="App">
      <div class="btn-group">
        <button class="button">visual</button>
        <button class="button">text</button>

      </div>
      <div>
        <span class="altitude">3000</span>
        <span class="altitude">2000</span>
        <span class="altitude">1000</span>
        <span class="altitude">0</span>
      </div>
      <div>
        <span class="one">
          <p class="arrow">&#8593;</p>
          <p class="zero">0</p>
          <p class="tishim">90</p>
          <p class="shmonim">180</p>
          <p class="shivim">270</p>



        </span>
      </div>
      <div>
        <span class="two">ADI</span>
      </div>
    </div>
  );
}

export default App;