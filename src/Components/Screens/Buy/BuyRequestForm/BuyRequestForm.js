import './BuyRequestForm.css'

function BuyRequestForm() {
    return (
        <form className='buy_reques_form'>
            <div className="grid-2">
                <div class="form-floation">
                    <input type="text" class="form-control" placeholder="firstName" />
                    <label>Your Name</label>
                </div>

                <div class="form-floation">
                    <input type="text" class="form-control" placeholder="occupation" />
                    <label>Your Occupation</label>
                </div>

                <div class="form-floation">
                    <input type="email" class="form-control" placeholder="email" />
                    <label>Your Email</label>
                </div>

                <div class="form-floation">
                    <select class="form-select">
                        <option value="0" hidden>Select Marital Status</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                    </select>
                    <label>Marital Status</label>
                </div>

                <div class="form-floation">
                    <input type="text" class="form-control" placeholder="address" />
                    <label>Your Address</label>
                </div>

                <div class="form-floation">
                    <input type="number" class="form-control" placeholder="flymember" />
                    <label>Number of family members</label>
                </div>

                <div class="form-floation">
                    <input type="text" class="form-control" placeholder="number" />
                    <label>Your phone number</label>
                </div>

                <div class="form-floation">
                    <input type="date" class="form-control" placeholder="number" />
                    <label>Wheen do you need the property</label>
                </div>

                <div class="form-floation">
                    <textarea class="form-control" placeholder="aboutSelft"></textarea>
                    <label htmlFor="aboutSelft">Additional information</label>
                </div>
            </div>
            <div className="requestPackageBox">
                <div className="button_wrapper">
                    <button type="submit" className="btn btn-outline-dark">submit buy Request </button>
                </div>
            </div>
        </form>
    )
}

export default BuyRequestForm