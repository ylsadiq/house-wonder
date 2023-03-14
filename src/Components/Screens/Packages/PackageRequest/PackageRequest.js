import axios from 'axios';
import { useEffect, useState } from 'react';
import { FACILITIES_FROM_PACKAGE_TYPE_API } from '../../../../Utilities/APIs/APIs';

import './PackageRequest.css'

function PackageRequest({ targetId }) {

  // const [facilitiesFromPackageType, setFacilitiesFromPackageType] = useState(null);
  const [packageTypeInfo, setPackageTypeInfo] = useState(null);
  const [packageFacilities, setPackageFacilities] = useState(null);
  const [missingFacilities, setMissingFacilities] = useState(null);
  const [selectedMissingFacilities, setSelectedMissingFacilities] = ([]);
   
  useEffect(() => {
    async function getFacilitiesFromPackageType() {
      const { data } = await axios.get(FACILITIES_FROM_PACKAGE_TYPE_API + targetId)
      setPackageTypeInfo(data.packageTypeInfo)
      setPackageFacilities(data.hasFacilities)
      setMissingFacilities(data.missingFacilities)
    }

    getFacilitiesFromPackageType()
  }, [targetId])

  const handleChecked = (e) =>{
    // setSelectedMissingFacilities(e.target.value);
    console.log(e.target.checked);
    // setSelectedMissingFacilities(!selectedMissingFacilities)
  }
  const facilitiesTotal = packageFacilities?.map(packageFacility => parseInt(packageFacility?.facility?.amount))
                          .reduce((total, amount) => total + amount)

  console.log(facilitiesTotal)


  return (
    <div className="requestPackageBox">
      <div className="packageBorder grid-2">
        <div>
          <h1> <span className="packageName">{packageTypeInfo?.packageTypeInfo?.name}</span> <br /> Package</h1>
        </div>
        <div>
          <h5 className="priceTitle">Tk {facilitiesTotal}</h5>
          <h3>Tk <span className="offer_price">{packageTypeInfo?.amount}</span></h3>
        </div>
      </div>

      <div className="grid-2">
        <div className="facilitiesList">
          <h6>Facilities</h6>
          <ul id="append_package_item">
            {packageFacilities?.map(packageFacility => (
              <li key={packageFacility._id}>{packageFacility?.facility?.name} (Tk {packageFacility?.facility?.amount})</li>
            ))}
          </ul>
        </div>
        <div className="facilitiesList">
          <h6>Add Ons </h6>

      {missingFacilities?.map(missingFacility =>(
        <div className="missing-facility" key={missingFacility._id}>
                <div className="form-check">
                  <input onChange={(e) => handleChecked(e)} className="form-check-input" type="checkbox" id="7" />
                  <label className="form-check-label price_7" htmlFor="7">
                  {missingFacility?.facility?.name} (Tk {missingFacility?.facility?.amount})
                  </label>
                </div>
              </div>
      ))}
          
            {/* {facilitiesFromPackageType?.missingFacilities?.map(missingFacility => (
              <div className="authFormInput" key={missingFacility._id}>
                <div className="form-check">
                  <input type="text" />
                  <input className="form-check-input" type="checkbox" id="7" />
                  <label className="form-check-label price_7" htmlFor="7">
                    {missingFacility?.facility?.name} (Tk {missingFacility?.facility?.amount})
                  </label>
                </div>
              </div>
            ))} */}
         
        </div>
      </div>
      <div className="button_wrapper">
        <button type="button" data-bs-toggle="modal" className="btn btn-outline-dark">Cancel</button>
        <button type="submit" className="btn btn-dark ms-3">Submit</button>
      </div>
    </div>
  )
}

export default PackageRequest