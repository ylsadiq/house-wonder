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
                <td className="table-body">Package</td>
                <td className="table-body">SQFT</td>
                <td className="table-body">Price</td>
                <td className="table-body">Total Price</td>
                <td className="table-body">Date</td>
                <td className="table-body">Status</td>
                <td className="table-body">Actions</td>
            </tr>
            </thead>
            <tbody>
            <tr className="table-row">
                <td className="table-body">Basic</td>
                <td className="table-body">	10,000</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">5/7/21</td>
                <td className="table-body"><img src={nike} alt="" />
                <span className="accept-start">ACCEPTED</span>
                </td>
                {/* <td className="table-body">PENDING</td> */}
                <td className="table-body"><button className='trash-btn'><img src={trash} alt="" /></button></td>
            </tr>
            <tr className="table-row">
            <td className="table-body">Basic</td>
                <td className="table-body">	10,000</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">5/7/21</td>
                <td className="table-body"><img src={nike} alt="" />
                <span className="accept-start">ACCEPTED</span></td>
                {/* <td className="table-body">PENDING</td> */}
                <td className="table-body"><button className='trash-btn'><img src={trash} alt="" /></button></td>
            </tr>
            <tr className="table-row">
            <td className="table-body">Basic</td>
                <td className="table-body">	10,000</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">5/7/21</td>
                {/* <td className="table-body">ACCEPTED</td> */}
                <td className="table-body"><img src={clock} alt="" />
                <span className='pending-start'>PENDING</span></td>
                <td className="table-body"><button className='trash-btn'><img src={trash} alt="" /></button></td>
            </tr>
            <tr className="table-row">
            <td className="table-body">Basic</td>
                <td className="table-body">	10,000</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">Tk. 1,800</td>
                <td className="table-body">5/7/21</td>
                {/* <td className="table-body">ACCEPTED</td> */}
                <td className="table-body"><img src={clock} alt="" />
                <span className='pending-start'>PENDING</span></td>
                <td className="table-body"><button className='trash-btn'><img src={trash} alt="" /></button></td>
            </tr>
            </tbody>
        </table>
        </div>
        
        <Pagination />
    </>
  )
}

export default TableListing