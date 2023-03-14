import axios from 'axios';
import { useEffect, useState } from 'react';
import PackageSquareFeets from './PackageType/PackageSquareFeets';
import { PACKGE_SQUARE_FEETS_API } from '../../../Utilities/APIs/APIs';

import './Packages.css'

function Packages() {

    const [packageSquareFeets, setPackageSquareFeets] = useState(null);

    useEffect(() => {
        async function getAndSetPackageSquareFeets() {
            const { data } = await axios.get(PACKGE_SQUARE_FEETS_API)
            setPackageSquareFeets(data)
        }
        getAndSetPackageSquareFeets()
    }, [])




    return (
        <section className="packages">
            <div className="container-fluid">
                <div className="package-container">
                    <h1 className="section-title">Packages</h1>
                    {packageSquareFeets?.map(packageSquareFeet => (
                        <PackageSquareFeets
                            key={packageSquareFeet._id}
                            psfId={packageSquareFeet._id}
                            psfName={packageSquareFeet.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Packages