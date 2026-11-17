
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>🪔 Diwali Diaries</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#story">My Day</a>
          <a href="#sweets">Sweets</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="subtitle">A FESTIVAL FULL OF HAPPINESS</p>
        <h1>My Diwali<br /><span>Memories 2026</span></h1>
        <p>A day filled with love, family, food and fireworks.</p>
        <a href="#story" className="explore">Explore My Day ↓</a>
        <div className="diya">🪔 ✨ 🪔</div>
      </section>

      <section className="story" id="story">
        <p className="subtitle">MY SPECIAL DAY</p>
        <h2>My Diwali Journey</h2>

        <div className="activities">
          <article>🌅 <h3>Morning</h3>
            Wake up, oil bath and get ready in my new dress.
          </article>
          <article>🙏 <h3>Temple Visit</h3>
            Started my Diwali with a peaceful temple visit.
          </article>
          <article>🎆 <h3>Crackers Time</h3>
            Enjoyed the morning Diwali celebration.
          </article>
          <article>🍬 <h3>Food Time</h3>
            Enjoyed vada, bajji, laddu and gulab jamun.
          </article>
          <article>😴 <h3>Afternoon</h3>
            Took a small rest and enjoyed a little sleep.
          </article>
          <article>🎬 <h3>Family Movie</h3>
            Watched a movie with my family in the evening.
          </article>
          <article>📸 <h3>Photo Time</h3>
            Captured some beautiful Diwali memories.
          </article>
          <article>🌙 <h3>Night Celebration</h3>
            Ended the day with beautiful fireworks.
          </article>
        </div>
      </section>

      <section className="sweets" id="sweets">
        <p className="subtitle">A LITTLE BIT OF SWEETNESS</p>
        <h2>Diwali Special Treats</h2>

        <div className="sweet-list">
          <div>🍩 <h3>Vada</h3></div>
          <div>🥘 <h3>Bajji</h3></div>
          <div>🟠 <h3>Laddu</h3></div>
          <div>🍡 <h3>Gulab Jamun</h3></div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <p className="subtitle">CAPTURED MOMENTS</p>
        <h2>My Photo Gallery 📸</h2>
        <div className="photo-grid">
          <div>📷<p>Add Photo 1</p></div>
          <div>📷<p>Add Photo 2</p></div>
          <div>📷<p>Add Photo 3</p></div>
        </div>
      </section>

      <section className="ending">
        <div className="fireworks">🎆 ✨ 🎇 ✨ 🎆</div>
        <h2>Happy Diwali!</h2>
        <p>Some days become beautiful memories forever.</p>
        <h3>Made with ❤️ and Diwali Magic</h3>
      </section>

    </div>
  );
}

export default App;
