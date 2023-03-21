import React from 'react';
import clock from '../../../../Assets/icon/fi_clock.svg';
import nike from '../../../../Assets/icon/fi_check.svg';
import trash from '../../../../Assets/icon/u_trash-alt.svg';
import Pagination from '../pagination/Pagination';

function TableListing() {
    return (
        <>
            <div className="requested-header">
                <div class="dataTables_length">
                    <label>
                        Show
                        <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        entries
                    </label>
                </div>
                <div class="dataTables_filter"><label>Search:
                    <input type="search" class="" placeholder="" /></label>
                </div>
            </div>
            <div className="table-container">
                <table className='table'>
                    <thead className='table-header'>
                        <tr className="header-row">
                            <td>Package</td>
                            <td>SQFT</td>
                            <td>Price</td>
                            <td>Total Price</td>
                            <td>Date</td>
                            <td>Status</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td>Basic</td>
                            <td>	10,000</td>
                            <td>Tk. 1,800</td>
                            <td>Tk. 1,800</td>
                            <td>5/7/21</td>
                            <td><img src={nike} alt="" />
                                <span className="accept-start">ACCEPTED</span>
                            </td>
                            {/* <td>PENDING</td> */}
                            <td><button className='trash-btn'><img src={trash} alt="" /></button></td>
                        </tr>
                        <tr className="table-row">
                            <td>Basic</td>
                            <td>	10,000</td>
                            <td>Tk. 1,800</td>
                            <td>Tk. 1,800</td>
                            <td>5/7/21</td>
                            <td><img src={nike} alt="" />
                                <span className="accept-start">ACCEPTED</span></td>
                            {/* <td>PENDING</td> */}
                            <td><button className='trash-btn'><img src={trash} alt="" /></button></td>
                        </tr>
                        <tr className="table-row">
                            <td>Basic</td>
                            <td>	10,000</td>
                            <td>Tk. 1,800</td>
                            <td>Tk. 1,800</td>
                            <td>5/7/21</td>
                            {/* <td>ACCEPTED</td> */}
                            <td><img src={clock} alt="" />
                                <span className='pending-start'>PENDING</span></td>
                            <td><button className='trash-btn'><img src={trash} alt="" /></button></td>
                        </tr>
                        <tr className="table-row">
                            <td>Basic</td>
                            <td>	10,000</td>
                            <td>Tk. 1,800</td>
                            <td>Tk. 1,800</td>
                            <td>5/7/21</td>
                            {/* <td>ACCEPTED</td> */}
                            <td><img src={clock} alt="" />
                                <span className='pending-start'>PENDING</span></td>
                            <td><button className='trash-btn'><img src={trash} alt="" /></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination />
        </>
    )
}

export default TableListing