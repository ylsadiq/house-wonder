import React from 'react';
import './OneStopSolution.css';
import soul from '../../../../Assets/home/illustration 1.png'

function OneStopSolution() {
  return (
    <section className="one-stop-solution">
        <div className="container-fluid">
            <h1 className='section-title'>One Stop Property Solution</h1>
            <div className="card-item">
            <div className="card-container">
                <div className="card property-soul-card">
                        <div className="card-body">
                            <h2>
                                Buy/Sell/Rent 
                               <span className='card-wrap'> for Free</span>
                            </h2>

                            <img src={soul} alt="" />
                        </div>
                    </div>
                <div className="card property-soul-card">
                        <div className="card-body">
                            <h2>
                                Buy/Sell/Rent 
                               <span className='card-wrap'> for Free</span>
                            </h2>

                            <img src={soul} alt="" />
                        </div>
                    </div>
                <div className="card property-soul-card">
                        <div className="card-body">
                            <h2>
                                Buy/Sell/Rent 
                               <span className='card-wrap'> for Free</span>
                            </h2>

                            <img src={soul} alt="" />
                        </div>
                    </div>
            </div>
            </div>

        </div>
    </section>
  )
}

export default OneStopSolution