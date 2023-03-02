import axios from 'axios';
import { useEffect, useState } from 'react';
import { PACKGE_TYPES_API } from '../../../../Utilities/APIs/APIs';
import Modal from '../../../Partials/Section/Modal/Modal';
import PackagCard from '../PackagCard/PackagCard'
import PackageRequest from '../PackageRequest/PackageRequest';

import './PackageSquareFeets.css'

function PackageSquareFeets({ psfId, psfName }) {
    const [showModal, setShowModal] = useState(false);
    const [showPackageRequest, setShowPackageRequest] = useState(false);
    const [packageTypes, setPackageTypes] = useState(null);
    const [targetId, setTargetId] = useState('');
    

    useEffect(() => {
        async function getAndSetPackageTypes() {
            const { data } = await axios.get(PACKGE_TYPES_API + 'getPackageTypeFromSquareFeet/' + psfId)
            setPackageTypes(data)
        }

        getAndSetPackageTypes()
    }, [psfId])

    function handleClose() {
        setShowModal(false);
        setShowPackageRequest(false);
    }


    return (
        <>
        <div className='package_type'>
            <h1 className="package-subTitle">{psfName}</h1>
            <div className="package-card">
                {packageTypes?.map(packageType => (
                    <PackagCard
                        key={packageType._id}
                        id={packageType._id}
                        name={packageType.name}
                        amount={packageType.amount}
                        description={packageType.description}
                        setShowModal={setShowModal}
                        setShowPackageRequest={setShowPackageRequest}
                        setTargetId={setTargetId}
                    />
                    ))}
                    <PackagCard
                    name='Custom'
                    amount='12000'
                    description='Custom description Custom description Custom description'
                    />
            </div>
            <div></div>
        </div>
        {showModal &&
                <Modal
                    handleClose={handleClose}
                    extraClass="small"
                >
                    {showPackageRequest &&
                        <PackageRequest
                            targetId={targetId}
                            handleClose={handleClose}
                        />
                    }
                </Modal>
            }
        </>
    )
}

export default PackageSquareFeets