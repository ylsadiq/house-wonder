import { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVICES_API } from '../../../Utilities/APIs/APIs';
import ServiceCard from './ServiceCard/ServiceCard';
import service from '../../../Assets/service-image/rental-furniture.png';

import './Services.css';
import Modal from '../../Partials/Section/Modal/Modal';
import ServiceRequest from './ServiceRequest/ServiceRequest';

function Service() {

    const [services, setServices] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [showRequestService, setShowRequestService] = useState(false);
    const [targetId, setTargetId] = useState('');
    const [serviceName, setServiceName] = useState('');



    useEffect(() => {
        async function getAndSetServices() {
            const { data } = await axios.get(SERVICES_API)
            setServices(data)
        }

        getAndSetServices()
    }, [])

    function handleClose() {
        setShowModal(false);
        setShowRequestService(false);
    }

    return (
        <>
            <section className="services pt" id='isTop'>
                <div className="container-fluid">
                    <div className="services-container">
                        <div className="services-items">
                            <div className="services-details">
                                <h3>Introducing</h3>
                                <h1>Property Services</h1>
                                <p className="one-para">One-stop destination for all your property-related needs</p>
                                <div className="service-box">
                                    {services?.map(service => (
                                        <div className="service-list" key={service._id}>
                                            <a href={`#${service._id}`} className="service-pack">
                                                <span className='service-img'>
                                                    <img src={IMAGE_URL + service.logo} alt="" />
                                                </span>
                                                {service.name}
                                            </a>
                                        </div>
                                    ))}
                                    {/* <div className="service-list">
                                        <a href="#serv1" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post} alt="" />
                                            </span>
                                            Post Your Property
                                        </a>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post5} alt="" />
                                            </span>
                                            Advertise Your Property
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post2} alt="" />
                                            </span>
                                            Home repair and refurbishment
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post6} alt="" />
                                            </span>
                                            Property management
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post3} alt="" />
                                            </span>
                                            Real estate/New developments
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post7} alt="" />
                                            </span>
                                            Legal services
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post4} alt="" />
                                            </span>
                                            Home Loan
                                        </Link>
                                    </div>
                                    <div className="service-list">
                                        <Link to="" className="service-pack">
                                            <span className='service-img'>
                                                <img src={post8} alt="" />
                                            </span>
                                            Pack and move
                                        </Link>
                                    </div> */}

                                </div>

                                <p className="service-property-details">You can post your property on our website for free
                                    or
                                    you can subscribe to one of our packages to sell/rent your property faster.
                                </p>
                            </div>

                            <div className="services-img">
                                <img src={service} alt="" />
                            </div>

                        </div>
                        {services?.map(service => (
                            <ServiceCard
                                id={service._id}
                                name={service.name}
                                description={service.description}
                                image={service.image}
                                setShowModal={setShowModal}
                                setShowRequestService={setShowRequestService}
                                setTargetId={setTargetId}
                                setServiceName={setServiceName}
                            />
                        ))}

                        {/* <Property /> */}
                    </div>
                </div>
            </section>
            {showModal &&
                <Modal
                    handleClose={handleClose}
                    modalHeading='Requested Services'
                >
                    {showRequestService &&
                        <ServiceRequest
                            targetId={targetId}
                            serviceName={serviceName}
                            handleClose={handleClose}
                        />
                    }
                </Modal>
            }
        </>
    )
}

export default Service