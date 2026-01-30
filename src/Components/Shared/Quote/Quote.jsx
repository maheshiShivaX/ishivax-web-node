import { useContext, useEffect, useState } from "react";
import { GetBudgetRange, GetCountry, getWorkType, SaveQuotation } from "../../../_services";
import Footer from "../Footer";
import Header from "../Header";
import { Toaster, toast } from "react-hot-toast";

import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import ClipLoader from "react-spinners/ClipLoader";

import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const Quote = () => {
    const { isLight } = useContext(ThemeContext);
    const [workTypeData, setWorkTypeData] = useState();
    const [BudgetRangeData, setBudgetRangeData] = useState();
    const [countryData, setCountryData] = useState();
    const [phone, setPhone] = useState('');
    const [isLodding, setIsLodding] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [captchaValue, setCaptchaValue] = useState(null);

    const [formData, setFormData] = useState({
        quoteId: 0,
        name: "",
        emailId: "",
        contactNo: "",
        workTypeId: 1,
        projectDescription: "",
        isActive: true,
        createdBy: 0,
        file: '',
        countryId: 0,
        budgetRangeId: 0,
        startDate: '',
    });

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const newValue = Number(value);

        setCheckedItems(prevState =>
            checked
                ? [...prevState, newValue]
                : prevState.filter(item => item !== newValue)
        );
    };

    const fetchCountry = async () => {
        try {
            const data = await GetCountry();
            setCountryData(data);
        } catch (error) {
            return null;
        }
    };

    const fetchWorkType = async () => {
        try {
            const data = await getWorkType();
            setWorkTypeData(data);
        } catch (error) {
            return null;
        }
    };

    const fetchBudgetRange = async () => {
        try {
            const data = await GetBudgetRange();
            setBudgetRangeData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchWorkType();
        fetchBudgetRange();
        fetchCountry();
    }, [])

    const handlechange = (e) => {
        const { name, value, type } = e.target;

        if (type === 'radio') {
            // For radio buttons, simply set the selected value
            setFormData(prevState => ({
                ...prevState,
                [name]: value, // Store the selected value for the radio button group
            }));
        } else if (type === 'file') {
            // For file inputs, store the selected file
            setFormData(prevState => ({
                ...prevState,
                [name]: e.target.files[0], // Handle file uploads
            }));
            if (e.target.files[0]) {
                setSelectedFile(e.target.files[0]);
                setPreviewUrl(URL.createObjectURL(e.target.files[0]));
            }
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Special handler for PhoneInput
    const handlePhoneChange = (value) => {
        setPhone(`+${value}`);

        // if (value != null && value != "") {
        //     const isValid = isValidPhoneNumber(value);
        //   setIsPhone  Valid(isValid);
        // }

        setFormData(prev => ({
            ...prev,
            contactNo: `+${value}`  // Update contactNo in formData
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const saveQuotationData = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            toast.error('Please complete the captcha');
            return;
        }

        setIsLodding(true);

        if (formData.workTypeId === 0 || formData.workTypeId == null) {
            toast.error('Please Select Work Type');
            setIsLodding(false);
            return
        }
        try {
            const res = await SaveQuotation(formData);
            if (res.isSuccess === 1) {
                setFormData({
                    quoteId: 0,
                    name: "",
                    emailId: "",
                    contactNo: "",
                    workTypeId: 1,
                    projectDescription: "",
                    isActive: true,
                    createdBy: 0,
                    file: '',
                    countryId: 0,
                    budgetRangeId: 0,
                    startDate: '',
                });
                setCheckedItems([]);
                setPhone('')
                toast.success("Enquiry sent successfully");
            }
        } catch (error) {
            return null;
        } finally {
            // setFormData({
            //     name: "",
            //     emailId: "",
            //     contactNo: "",
            //     workTypeId: 0,
            //     remark: "",
            // });
            setIsLodding(false);
        }
    };

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '9999999999' }}>
                <Toaster position="top-right" />
            </div>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                        <div className='fw-container'>
                            <div className="fw-row">
                                <div className="fw-col-xs-12 ">
                                    <div className="fw-divider-space"></div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center banner-seo-media-images">
                                <div className='seo-media-images-common'>
                                    <img className="top-image-arrow-1" src="/images/Vector-line-straight.png" alt='' />
                                    <img className="top-image-arrow-2" src="/images/Vector-line-straight.png" alt='' />
                                </div>

                                <div className='seo-media-images-common'>
                                    <img className="top-image-arrow-3" src="/images/Vector-line-straight.png" alt='' />
                                    <img className="top-image-arrow-4" src="/images/Vector-line-straight.png" alt='' />
                                </div>
                            </div>

                            <div className="content-under-image">

                                <div className='top-vector_main'>
                                    <img className="vector-line-common" src="/images/Vector-upper-arrow.png" alt='' />
                                    <div className="fw-row">
                                        <div className="cector-cross-line-allign">
                                            <div className="vector-class-common">
                                                <div className='dots-first'>
                                                    <div className="dot-common"></div>
                                                    <div className="dot-common"></div>
                                                </div>
                                                <img className="vector-cross-common" src="/images/vector.png" alt='' />
                                                <div className='dots-second'>
                                                    <div className="dot-common"></div>
                                                    <div className="dot-common"></div>
                                                </div>
                                            </div>
                                            <div className="fw-heading fw-heading-h2 d-flex justify-content-center align-items-center">
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Request A Quote</h2>
                                            </div>
                                            <div className="vector-class-common">
                                                <div className='dots-first'>
                                                    <div className="dot-common"></div>
                                                    <div className="dot-common"></div>
                                                </div>
                                                <img className="vector-cross-common" src="/images/vector.png" alt='' />
                                                <div className='dots-second'>
                                                    <div className="dot-common"></div>
                                                    <div className="dot-common"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="vector-line-common1" src="/images/Vector-upper-arrow.png" alt='' />
                                </div>

                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '20px' }}></div>
                                    </div>
                                </div>
                                <div className="fw-row">
                                    <div className="container">
                                        <div className="fw-col-xs-12 ">
                                        </div>
                                        <div className="fw-col-xs-12 ">
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`} style={{ textTransform: 'uppercase' }}>Get a free Quote from expert</p>
                                        </div>
                                        <div className="fw-col-xs-12 quote_banner_description">
                                            <p className={isLight ? ' heading-common-content-LIGHT' : 'heading-common-content'} >We give wings to your Business you decide where to fly !!</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '50px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="fw-main-row middle-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="fw-container">
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                        <div className="fw-row">
                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title quote_page_heading mb-0'>Request A Quote</h2>
                                </div>
                                <div className="requirement_text">
                                    <p className="mb-0">Brief us your Requirement Here !!</p>
                                </div>
                                <div className="Our_team_description">
                                    <p>Our team can help you unlock the full potential of your Website and Application development and Digital Marketing.</p>
                                </div>
                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">
                                        <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  ">
                                <form onSubmit={saveQuotationData}>
                                    <fieldset>
                                        {/* <input type="hidden" name="access_key"
                                            value="acc730d2-4e5f-41da-a1f0-da53e38c0fe3" /> */}
                                        <div className="fw-row">
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                <input className="text-class" type="text" placeholder="Full Name" maxLength={100} value={formData.name}
                                                    id="name" name="name" required onChange={handlechange} />
                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding mb-4 select-container">
                                                <select id="countryId" name="countryId" onChange={handlechange}>
                                                    workTypeData
                                                    <option value="--Select--"  >--Select--
                                                    </option>
                                                    {countryData?.map((item, i) => (
                                                        <option key={i} value={item.countryId}>{item.countryName}
                                                        </option>
                                                    ))}
                                                </select>
                                                <i class="fa-solid fa-chevron-down arrow-icon"></i>
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">

                                                <input type="email" placeholder="Email Address" id="emailId" maxLength={30} value={formData.emailId}
                                                    name="emailId" required onChange={handlechange} />

                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding ">

                                                <PhoneInput
                                                    style={{ textAlign: "left" }}
                                                    country="in" // Default country code set to India (+91)
                                                    value={phone} // Bind the phone number state
                                                    onChange={handlePhoneChange} // Update the state with the phone number on change
                                                    disableDropdown={false} // Enable country dropdown for selection
                                                    placeholder="Contact No"
                                                />
                                            </div>

                                        </div>
                                        <div className="fw-row textarea responsive-select">
                                            <div className="fw-col-xs-12 contact-form-padding ">
                                                <textarea id="projectDescription" placeholder="Project Description" maxLength={400} value={formData.projectDescription} onChange={handlechange}
                                                    name="projectDescription"></textarea>
                                            </div>
                                        </div>
                                        <div className="fw-row Budget_wepper_icon">

                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding mb-4 select-container">
                                                <label htmlFor="" className="Budget_text">Budget Raange</label>
                                                <select id="budgetRangeId" name="budgetRangeId" onChange={handlechange}>
                                                    Budget Range
                                                    <option value="--Select--"  >--Select--
                                                    </option>
                                                    {BudgetRangeData?.map((item, i) => (
                                                        <option key={i} value={item.budgetRangeId}>{item.range}
                                                        </option>

                                                    ))}
                                                </select>
                                                <i class="fa-solid fa-chevron-down arrow-icon"></i>
                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                <label htmlFor="" className="Budget_text">Start Date</label>
                                                <input className="text-class" type="date" placeholder="Date" value={formData.startDate}
                                                    id="startDate" name="startDate" required onChange={handlechange} />
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <h4 className="our_work_heading">What Are You Looking For?*</h4>
                                            <div className="fw-col-xs-12 contact-form-padding row">
                                                {workTypeData?.map((item, i) => (
                                                    <div className="col-lg-4 col-sm-6 col-12 our_work_checkbox">
                                                        <div key={i} className="checkbox-item">
                                                            <input
                                                                type="checkbox"
                                                                id={item.workTypeId}
                                                                name={`workTypeId-${item.workTypeId}`}
                                                                value={item.workTypeId}
                                                                checked={checkedItems.includes(item.workTypeId)}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            <label htmlFor={item.workTypeId}>{item.workTypeName}</label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 contact-form-padding">
                                                <div
                                                    className="file_input_content"
                                                    onClick={() => document.getElementById('file').click()}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <img src="./images/add-square.png" alt="Add file" />

                                                    {selectedFile ? (
                                                        <>
                                                            <p className="file_input_head">{selectedFile.name}</p>
                                                            <img
                                                                src={previewUrl}
                                                                alt="Preview"
                                                                style={{ width: '70px', height: '70px', marginTop: '10px', borderRadius: '6px' }}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className="file_input_head">Attach Any File You Feel Would Be Useful</p>
                                                            <p className="file_input_description">Attach File (Max Size 5MB)</p>
                                                        </>
                                                    )}
                                                </div>

                                                <div>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="file"
                                                        name="file"
                                                        accept="image/png, image/jpeg"
                                                        onChange={handlechange}
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 contact-form-padding mt-4" >
                                                <ReCAPTCHA
                                                    sitekey="6Lc40mMrAAAAAEEw2vh3_R5HDERj8Ye7_LVuQl-X"
                                                    onChange={handleCaptchaChange}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="fw-row send_message_btn">
                                        <button type="submit" className="frame-66-Y1q " >
                                            <div className="frame-66-Y1q-text">
                                                {isLodding ? <div>  <ClipLoader
                                                    loading={isLodding}
                                                    size={15}
                                                    aria-label="Loading Spinner"
                                                    data-testid="loader"

                                                /> <span>Please wait...</span></div> : <div className="d-flex align-items-center gap-2 send_message_btn_text">Send Message  <div className="frame-66-Y1q-arrow"></div></div>
                                                }
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">

                                <div className="fw-divider-space" style={{ marginTop: '60px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://maps.app.goo.gl/hrpY4tvpMSnYMUPp8?g_st=iw">
                    <div className="contact-location-map">
                    </div>
                </a>
            </section>
            <Footer />
        </div>
    )
}

export default Quote;