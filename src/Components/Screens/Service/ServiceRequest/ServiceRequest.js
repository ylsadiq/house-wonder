import axios from "axios";
import { useSelector } from "react-redux";
import { REQUIEST_SERVICE_API } from "../../../../Utilities/APIs/APIs";

import './ServiceRequest.css'

function ServiceRequest({ targetId, handleClose, serviceName }) {

  const { consumer } = useSelector(state => state.auth)

  async function handleSubmit(e) {

    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${consumer.token}`
      }
    }

    const serviceData = {}
    serviceData.service = targetId

    const response = await axios.post(REQUIEST_SERVICE_API, serviceData, config)

    if (response) {
      handleClose();
    }
  }

  return (
    <div className='service_request'>
      <form onSubmit={handleSubmit}>
        <div className="service_request_content">
          <div>
            <h5>Name: </h5>
            <h6>{consumer?.name}</h6>
          </div>
          <div>
            <h5>Phone: </h5>
            <h6>{consumer?.phone}</h6>
          </div>
          <div>
            <h5>Service Name: </h5>
            <h6>{serviceName}</h6>
          </div>
          <button type="submit" className="btn btn-outline-dark">Request Service</button>
        </div>

      </form>
    </div>
  )
}

export default ServiceRequest