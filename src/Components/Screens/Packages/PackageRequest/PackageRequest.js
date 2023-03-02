import axios from 'axios';
import { useEffect, useState } from 'react';
import { FACILITIES_FROM_PACKAGE_TYPE_API } from '../../../../Utilities/APIs/APIs';

import './PackageRequest.css'

function PackageRequest({ targetId }) {

  const [facilitiesFromPackageType, setFacilitiesFromPackageType] = useState(null);
  console.log(facilitiesFromPackageType)

  useEffect(() => {
    async function getFacilitiesFromPackageType() {
      const { data } = await axios.get(FACILITIES_FROM_PACKAGE_TYPE_API + targetId)
      setFacilitiesFromPackageType(data)
    }

    getFacilitiesFromPackageType()
  }, [targetId])

  const facilitiesTotal = facilitiesFromPackageType?.hasFacilities
                          .map(hasFacility => parseInt(hasFacility?.facility?.amount))
                          .reduce((total, amount) => total + amount)

  console.log(facilitiesTotal)


  return (
    <div class="requestPackageBox">
      <div class="packageBorder grid-2">
        <div>
          <h1> <span class="packageName">{facilitiesFromPackageType?.packageTypeInfo?.name}</span> <br /> Package</h1>
        </div>
        <div>
          <h5 class="priceTitle">Tk {facilitiesTotal}</h5>
          <h3>Tk <span class="offer_price">{facilitiesFromPackageType?.packageTypeInfo?.amount}</span></h3>
        </div>
      </div>

      <div class="grid-2">
        <div class="facilitiesList">
          <h6>Facilities</h6>
          <ul id="append_package_item">
            {facilitiesFromPackageType?.hasFacilities?.map(hasFacility => (
              <li key={hasFacility._id}>{hasFacility?.facility?.name} (Tk {hasFacility?.facility?.amount})</li>
            ))}
          </ul>
        </div>
        <div class="facilitiesList">
          <h6>Add Ons </h6>
          <div class="row">
            {facilitiesFromPackageType?.missingFacilities?.map(missingFacility => (
              <div class="authFormInput" key={missingFacility._id}>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="7" />
                  <label class="form-check-label price_7" for="7">
                    {missingFacility?.facility?.name} (Tk {missingFacility?.facility?.amount})
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="button_wrapper">
        <button type="button" data-bs-toggle="modal" class="btn btn-outline-dark">Cancel</button>
        <button type="submit" class="btn btn-dark ms-3">Submit</button>
      </div>
    </div>
  )
}

export default PackageRequest