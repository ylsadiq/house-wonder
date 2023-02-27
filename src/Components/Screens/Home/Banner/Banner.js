import TabMenu from './TabMenu/TabMenu';
import './Banner.css'

function Banner() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-details">
          <div className="hero-box">
            <h1>Find Your Home</h1>
            <p>We provide platform for property buyers & seller to locate properties of interest on real estate,
              to help everyone find their place</p>
          </div>
          <div>
          </div>
          <TabMenu />
        </div>
      </div>
    </section>
  )
}

export default Banner