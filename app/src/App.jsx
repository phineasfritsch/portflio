import './App.css'
import RetroGlobe from './RetroGlobe.jsx'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="pixel">Welcome Aboard!</h1>
        <p className="tagline">Actuarial insights meet sailing adventures</p>
      </header>
      <RetroGlobe />
      <section>
        <h2 className="pixel">About Me</h2>
        <p>
          I&#39;m an actuarial mathematics major with a passion for navigating both
          risk models and the open seas. I enjoy exploring classic web aesthetics
          and bringing a retro vibe to modern tools like React.
        </p>
      </section>
      <section>
        <h2 className="pixel">Actuarial Math</h2>
        <p>
          From probability distributions to survival models, I love turning
          complex data into clear insights. My studies focus on analyzing
          uncertainty and solving real-world problems.
        </p>
      </section>
      <section>
        <h2 className="pixel">Sailing Adventures</h2>
        <p>
          When I&#39;m not crunching numbers, I&#39;m likely trimming sails and chasing
          the perfect breeze. Sailing teaches resilience, strategic thinking, and
          appreciation for the journey—skills I bring to every project.
        </p>
      </section>
      <footer>
        <p>Thanks for stopping by. Fair winds!</p>
      </footer>
    </div>
  )
}

export default App
