import './RetroGlobe.css'

function RetroGlobe() {
  return (
    <div className="globe-container">
      <div className="globe" aria-hidden="true" />
      <span
        role="img"
        aria-label="Professional"
        className="icon skyscraper"
        data-label="Work"
      >
        🏢
      </span>
      <span
        role="img"
        aria-label="Sailing"
        className="icon boat"
        data-label="Sailing"
      >
        ⛵️
      </span>
      <span
        role="img"
        aria-label="Camping"
        className="icon cabin"
        data-label="Camping"
      >
        🏕️
      </span>
    </div>
  )
}

export default RetroGlobe
