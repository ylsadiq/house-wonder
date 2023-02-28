import { IMAGE_URL } from '../../../../Utilities/APIs/APIs'

import './ServiceCard.css'

function ServiceCard({ id, name, description, image, setShowModal, setShowRequestService, setTargetId, setServiceName }) {
    return (
        <section className="property-section">
            <div className="container-fluid">
                <div className="property-content" id={id}>
                    <h2>{name}</h2>
                    <div className="service-banner">
                        <div className="property-item-box">
                            <div className="property-details">
                                <div className="property-link">
                                    <a href="#isTop" className="service-link">
                                        <h6>{description}</h6>
                                    </a>
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => {
                                            setShowModal(true)
                                            setShowRequestService(true)
                                            setTargetId(id)
                                            setServiceName(name)
                                        }}>
                                        Request Service
                                    </button>
                                </div>
                            </div>
                            <div className="property-img">
                                <img src={IMAGE_URL + image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="property-content">
                    <h2>Post Your Property</h2>
                    <a href="abc.com">
                        <div className="service-banner">
                            <a className="service-link" href="a">
                                <div className="property-item-box">
                                    <div className="property-details">
                                        <div className="property-link">
                                            <h6>You can post your property on our website for free or you can subscribe to one of our packages to sell/rent your property faster.</h6>
                                            <button className="btn btn-outline-dark">Request Service</button>
                                        </div>
                                    </div>
                                    <div className="property-img">
                                        <img src={property} alt="" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </a>

                </div>
                <div className="property-content">
                    <h2>Post Your Property</h2>
                    <a href="abc.com">
                        <div className="service-banner">
                            <a className="service-link" href="a">
                                <div className="property-item-box">
                                    <div className="property-details">
                                        <div className="property-link">
                                            <h6>You can post your property on our website for free or you can subscribe to one of our packages to sell/rent your property faster.</h6>
                                            <button className="btn btn-outline-dark">Request Service</button>
                                        </div>
                                    </div>
                                    <div className="property-img">
                                        <img src={property} alt="" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </a>

                </div>
                <div className="property-content">
                    <h2>Post Your Property</h2>
                    <a href="abc.com">
                        <div className="service-banner">
                            <a className="service-link" href="a">
                                <div className="property-item-box">
                                    <div className="property-details">
                                        <div className="property-link">
                                            <h6>You can post your property on our website for free or you can subscribe to one of our packages to sell/rent your property faster.</h6>
                                            <button className="btn btn-outline-dark">Request Service</button>
                                        </div>
                                    </div>
                                    <div className="property-img">
                                        <img src={property} alt="" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </a>

                </div>
                <div className="property-content">
                    <h2>Post Your Property</h2>
                    <a href="abc.com">
                        <div className="service-banner">
                            <a className="service-link" href="a">
                                <div className="property-item-box">
                                    <div className="property-details">
                                        <div className="property-link">
                                            <h6>You can post your property on our website for free or you can subscribe to one of our packages to sell/rent your property faster.</h6>
                                            <button className="btn btn-outline-dark">Request Service</button>
                                        </div>
                                    </div>
                                    <div className="property-img">
                                        <img src={property} alt="" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </a>

                </div>
                <div className="property-content">
                    <h2>Post Your Property</h2>
                    <a href="abc.com">
                        <div className="service-banner">
                            <a className="service-link" href="a">
                                <div className="property-item-box">
                                    <div className="property-details">
                                        <div className="property-link">
                                            <h6>You can post your property on our website for free or you can subscribe to one of our packages to sell/rent your property faster.</h6>
                                            <button className="btn btn-outline-dark">Request Service</button>
                                        </div>
                                    </div>
                                    <div className="property-img">
                                        <img src={property} alt="" />
                                    </div>
                                </div>
                            </a>

                        </div>
                    </a>

                </div> */}

            </div>
        </section>
    )
}

export default ServiceCard