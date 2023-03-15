import React from 'react';
import { useSelector } from 'react-redux';
import FormHeading from '../FormHeading/FormHeading';
import './ThirdForm.css';

function ThirdForm({formStep, completeFormStep, goToPreStep}) {

    const { consumer } = useSelector(state => state.auth)

    async function handleSubmit(e) {
        e.preventDefault()
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${consumer.token}`
    //   }
    // }
    
    const itemData = new FormData()
        // itemData.append('propetyTypes', propetyTypes)
        // itemData.append('propetySubTypes', propetySubTypes)
        // const propertyTypes = {propetyTypes}
        // console.log(propertyTypes);
        // const response = await axios.post(PROPERTY_PROPERTTIES_API, propertyTypes, config)
        }

    const renderBtn = () => {
        if(formStep > 4){
            return undefined
        }else if(formStep === 4){
            return(
            <button
            type='submit'  
            // disabled={gerror}
            className="btn btn-dark mb-4 mt-2 listing-btn">Finish</button>
            )
        }
        else{
            return(
            <button
            type='button'   
            onClick={completeFormStep}
            // disabled={!treatment}
            className="btn btn-dark mb-4 mt-2 listing-btn">Continue</button>
            )
        }
        }
    return (
        <div className="my-listing-third-form">
            <div className="container-fluid">
                
                <FormHeading 
                    formstepFirst='step'
                    formNumber='3'
                    formDivide='of'
                    formStepLast='4'
                    formTitle='Great! Now let’s upload'
                    formsecondTitle="some photos"
                    />
                <div className="property_img">
                    <h5 className="feature-title">Property Images</h5>
                    <h5 className='image-size'>(Recomended Size: 1071×617)</h5>
                </div>

                <div className="grid-1">
                    <div className="multiParentCont">
                        <div className="addContainer" onClick="addImage(1)">
                            <img className="previewImg d-none" id="frame1" src="" alt="" />
                            <div className="upMesg" id="upMessage1">
                                <div className="text-center">
                                    <img className="mb-2" src="https://bastu.com.bd/beta-twelve/frontend/new_ui/assets/images/icon/u_image-plus.svg" alt="" />
                                    <p>Add Image</p>
                                    <input type="file" />
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
                <div className="property_desc">
                    <p>Display different areas of your property by uploading
                        images of specific rooms of your property. <br />
                        I.E. Upload a photo of your bedroom, then click on the
                        dropdown menu and click bedroom.</p>
                </div>
            </div>
            <div className="second-form">
                <button onClick={goToPreStep} className='btn btn-outline-dark listing-btn'>Go back</button>
                {renderBtn()}
            </div>
        </div>
    )
}

export default ThirdForm