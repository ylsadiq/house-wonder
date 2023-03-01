import axios from 'axios';
import { useEffect, useState } from 'react';
import { PACKGE_TYPES_API } from '../../../../Utilities/APIs/APIs';
import PackagCard from '../PackagCard/PackagCard'

import './PackageSquareFeets.css'

function PackageSquareFeets({ psfId, psfName }) {

    const [packageTypes, setPackageTypes] = useState(null);

    useEffect(() => {
        async function getAndSetPackageTypes() {
            const { data } = await axios.get(PACKGE_TYPES_API + 'getPackageTypeFromSquareFeet/' + psfId)
            // const 
            setPackageTypes(data)
        }

        getAndSetPackageTypes()
    }, [psfId])



    return (
        <div className='package_type'>
            <h1 className="package-subTitle"> Upto {psfName} sqft area</h1>
            <div className="package-card">
                {packageTypes?.map(packageType => (
                    <PackagCard
                        kay={packageType._id}
                        name={packageType.name}
                        amount={packageType.amount}
                        description={packageType.description}
                    />
                ))}
                {/* <PackagCard />
                <PackagCard /> */}


                {/* <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div>
                <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div>
                <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div>
                <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div>
                <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div>
                <div className="card package-card-update">
                    <div className="card-body">
                        <h5>Basic</h5>
                        <h3>Tk 1,800</h3>
                    </div>
                    <div className="card-footer">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
                        </div>
                        <button className="btn btn-dark">Request Package</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PackageSquareFeets