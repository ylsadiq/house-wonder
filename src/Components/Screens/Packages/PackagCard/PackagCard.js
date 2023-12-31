import './PackagCard.css';

function PackagCard({id, name, amount, description, setShowModal, setShowPackageRequest, setTargetId}) {
    return (
        <div className="card package-card-update">
            <div className="card-body">
                <h5>{name}</h5>
                <h3>Tk {amount}</h3>
            </div>
            <div className="card-footer">
                <div className="details">
                    <p>{description}</p>
                </div>
                <button className="btn btn-dark" 
                onClick={()=> {
                    setShowModal(true)
                    setShowPackageRequest(true)
                    setTargetId(id)
                }}
                >Request Package</button>
            </div>
        </div>
    )
}

export default PackagCard