import React from 'react';
import './ThirdForm.css';

function ThirdForm() {
  return (
    <div className="my-listing-third-form">
        <div className="container-fluid">
        <div className="my-listing-step">
            <div className="progress-count">
                    <h6>step <span>3</span> of <span>4</span></h6>
                </div>
            <div className="progress form-progress">
                    <div className="progress-bar form-prog"></div>
                </div>
            <div className="progress-count mt-2">
                    <h1 className='form-title'>Great! Now let’s upload<span className='second-line'>some photos
            </span></h1>
            </div>
        </div>
            <h5 className="feature-title">Property Images</h5>
            <h5 className='image-size'>(Recomended Size: 1071×617)</h5>

            <div className="grid-1">
                <div className="multiParentCont">
            <div className="addContainer" onClick="addImage(1)">
                    <img className="previewImg d-none" id="frame1" src="" alt="" />
                    <div className="upMesg" id="upMessage1">
                    <div className="text-center">
                    <img className="mb-2" src="https://bastu.com.bd/beta-twelve/frontend/new_ui/assets/images/icon/u_image-plus.svg" alt="" />
                    <p>Add Image</p>
                    </div>
                    </div>
                </div>


                <div className="imageTypeSel d-none" id="imageTypeSel1">
                    <div>
                        <select className="form-select form-select-lg" onChange="onSelectImageType(1)" id="imateTypeSelInput1" name="property_image_tag_id[]">
                            <option hidden="hidden" value="">Image Type</option>

                        <option value="1">Bedroom</option><option value="2">Bathroom</option><option value="7">Kitchen</option><option value="11">Balcony</option><option value="12">Exterior</option></select>
                    </div>
                </div>

                <div className="delMessage d-none" id="delMess1">
                    <button className="delUpImg" type="button">
                    <img src="https://bastu.com.bd/beta-twelve/frontend/new_ui/assets/images/icon/u_plus.svg" alt="" />
                    </button>
                </div>

                <input name="image[1]" id="input1" className="form-control" type="file" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdForm