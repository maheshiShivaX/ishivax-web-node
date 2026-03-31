import { useContext, useEffect, useState } from "react";
import { getWorkType, saveEnquiry } from "../../../_services";
import Footer from "../Footer";
import Header from "../Header";
import { Toaster, toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const ContactUs = () => {
    const { isLight } = useContext(ThemeContext);
    const [workTypeData, setWorkTypeData] = useState();
    const [phone, setPhone] = useState('');
    const [isLodding, setIsLodding] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const [formData, setFormData] = useState({
        enquiryId: 0,
        name: "",
        emailId: "",
        contactNo: "",
        workTypeId: 0,
        remark: "",
        isActive: true,
        createdBy: 0
    });

    const fetchWorkType = async () => {
        try {
            const data = await getWorkType();
            setWorkTypeData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchWorkType();
    }, [])

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

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

    const saveEnquiryData = async (e) => {
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
            const res = await saveEnquiry(formData);
            if (res.isSuccess === 1) {
                setFormData({
                    name: "",
                    emailId: "",
                    contactNo: "",
                    workTypeId: 0,
                    remark: "",
                });
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
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(/images/bg-dots.png)' }}>
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Contact Us</h2>
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>LET'S START WORKING TOGETHER. GET IN
                                                TOUCH
                                            </p>
                                        </div>
                                        <div className="fw-col-xs-12 ">

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

                                <div className="fw-divider-space-contact1"></div>
                            </div>
                        </div>
                        <div className="fw-row">

                        </div>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 fw-col-sm-4 fw-col-md-4  ">
                                <div className="fw-heading fw-heading-h2">
                                    <h2 className='fw-special-title'>Have questions?<br /> GET IN TOUCH</h2>
                                </div>

                                <div className="fw-row">
                                    <div className="fw-col-xs-12 ">

                                        <div className="fw-divider-space-contact"></div>
                                    </div>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="/images/contact-location.svg" alt="" />
                                    <p className="content-loc-info">iShivax - B-8/2 Shiv Marg, Banipark, Jaipur, Rajasthan - 302016 (Bharat)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="/images/contact-location.svg" alt="" />
                                    <p className="content-loc-info">iShivax LLC -205, The Hills Drive, Texas, Austin - 78738 (USA)</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="/images/conttact-mobile-icon.svg" alt="" />
                                    <p className="content-loc-info">+91-9829197777 / +1-801 701 1806</p>
                                </div>
                                <div className="frame-loc-info" style={{ display: 'flex' }}>
                                    <img src="/images/contact-email-icon.svg" alt="" />
                                    <p className="content-loc-info">business@ishivax.com</p>
                                </div>
                            </div>
                            <div className="fw-col-xs-12 fw-col-sm-8 fw-col-md-8  mt-sm-4 mt-3">
                                <form onSubmit={saveEnquiryData}>
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
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                <input type="email" placeholder="Email Address" id="emailId" maxLength={30} value={formData.emailId}
                                                    name="emailId" required onChange={handlechange} />
                                            </div>
                                        </div>
                                        <div className="fw-row">

                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding">
                                                <PhoneInput
                                                    style={{ textAlign: "left" }}
                                                    country="in"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                    disableDropdown={false}
                                                    placeholder="Contact No"
                                                />
                                            </div>
                                            <div
                                                className="fw-col-xs-12 fw-col-md-6 fw-col-lg-6 contact-form-padding mb-4 select-container responsive-select">
                                                <select id="workTypeId" name="workTypeId" onChange={handlechange}>
                                                    workTypeData
                                                    <option value="--Select--"  >--Select--
                                                    </option>
                                                    {workTypeData?.map((item, i) => (
                                                        <option key={i} value={item.workTypeId}>{item.workTypeName}
                                                        </option>

                                                    ))}
                                                </select>
                                                <i class="fa-solid fa-chevron-down arrow-icon"></i>
                                            </div>
                                        </div>
                                        <div className="fw-row textarea">
                                            <div className="fw-col-xs-12 contact-form-padding">
                                                <textarea id="remark" placeholder="Message" maxLength={400} value={formData.remark} onChange={handlechange}
                                                    name="remark"></textarea>
                                            </div>
                                        </div>

                                        <div className="fw-row">
                                            <div className="fw-col-xs-12 contact-form-padding" >
                                                <ReCAPTCHA
                                                    sitekey="6Lc40mMrAAAAAEEw2vh3_R5HDERj8Ye7_LVuQl-X"
                                                    onChange={handleCaptchaChange}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div className="fw-row">
                                        <button type="submit" className="frame-66-Y1q frame-portfolio-button mt-4" >
                                            <div className="frame-66-Y1q-text">
                                                {isLodding ? <div>  <ClipLoader
                                                    loading={isLodding}
                                                    size={15}
                                                    aria-label="Loading Spinner"
                                                    data-testid="loader"

                                                /> <span>Please wait...</span></div> : <div className="d-flex">Send Message  <div className="frame-66-Y1q-arrow"></div></div>
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
                <a href="https://maps.app.goo.gl/HjpjM6vXt1TGAcDQ7">
                    <div className="contact-location-map">
                    </div>
                </a>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs;