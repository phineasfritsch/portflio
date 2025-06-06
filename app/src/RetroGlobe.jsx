import './RetroGlobe.css'

function RetroGlobe() {
  return (
    <div className="globe-container">
      <div className="globe" aria-hidden="true" />
      <span role="img" aria-label="Professional" className="icon skyscraper">
        🏢
      </span>
      <span role="img" aria-label="Sailing" className="icon boat">
        ⛵️
      </span>
      <span role="img" aria-label="Camping" className="icon cabin">
        🏕️
      </span>
    </div>
  )
}

export default RetroGlobe
