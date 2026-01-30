import { GetJobPost, SavePostEnquiry } from "../../../_services";
import Footer from "../Footer";
import Header from "../Header";
import '../Join/join.css';
import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const JoinOurTeam = () => {
    const [postData, setPostData] = useState();
    const [captchaValue, setCaptchaValue] = useState(null);
    const { isLight } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailid: "",
        mobileNo: "",
        postEnquiryId: 0,
        isActive: true,
        createdBy: 0,
        file: '',
        currentCtc: '',
        expectedCtc: '',
        jobPostId: 0,
        noticePeriod: '',
        resumePath: ''
    });
    const scrollToForm = () => {
        const formSection = document.getElementById('form_get');
        if (formSection) {
            const offset = 150; // Adjust scroll position to 30px above the element
            const top = formSection.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const fetchGetJobPost = async () => {
        try {
            const data = await GetJobPost();
            setPostData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchGetJobPost();


    }, [])

    const handleKeyPress = (e) => {
        const validKeys = /^[0-9+\-()\s]$/; // Allow digits, +, -, ( ), and space

        if (!validKeys.test(e.key)) {
            e.preventDefault(); // Prevent the input if it's not valid
        }
    };


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
        } else {
            // For other input types (text, date, etc.), update the value
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const onSave = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            toast.error('Please complete the captcha');
            return;
        }

        try {
            await SavePostEnquiry(formData);
            toast.success("Message Sent Successfully");

        } catch (error) {
            toast.error("Please try again later.");
        }
        finally {
            setFormData({
                firstName: "",
                lastName: "",
                emailid: "",
                mobileNo: "",
                postEnquiryId: 0,
                isActive: true,
                createdBy: 0,
                file: '',
                currentCtc: '',
                expectedCtc: '',
                jobPostId: 0,
                noticePeriod: '',
                resumePath: ''
            });

        }
    };

    return (
        <div> <div style={{ position: 'relative', zIndex: '9999999999' }}>
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
                                                <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Career</h2>
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
                                            <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>Join Our Team</p>
                                            <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>Uncover the perfect role that aligns with your unique abilities and grab countless opportunities to take your career to new heights.</p>
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

            <section className="join_wepper">
                <div className="container">
                    <div className="row row_flex_first">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>Why Work With iShivax?</h2>
                                <p>At iShivax, we don’t just build technology—we build futures. Here’s what makes us stand out:</p>
                                <ul>
                                    <li>Purpose-Driven Work</li>
                                    <p className="mb-2">Every project we take on is tied to a real-world problem. Your work has a direct impact on businesses and their customers.</p>
                                    <li>Innovative Environment</li>
                                    <p className="mb-2">We stay ahead by using the latest technologies and creating tailored solutions that solve complex challenges.</p>
                                    <li>Learning & Growth</li>
                                    <p className="mb-2">From Agile to advanced testing processes, we follow industry-leading methods. You’ll gain hands-on experience with tools and practices that matter.</p>
                                </ul>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text" onClick={scrollToForm}>Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row our_join_row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="our_tems_data_img">
                                <img src="./images/our-team-right.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="join_heding_content">
                                <h2>Why Work With iShivax?</h2>
                                <p>At iShivax, we don’t just build technology—we build futures. Here’s what makes us stand out:</p>
                                <ul>
                                    <li>Collaborative Culture</li>
                                    <p className="mb-2">Our teams are built on trust, support, and clear communication. We value people who are willing to learn, adapt, and share ideas.</p>
                                    <li>Stable and Scalable Projects</li>
                                    <p className="mb-2">We don’t cut corners. Our focus is on building high-quality systems that are made to last and evolve with our clients’ needs.</p>
                                    <li>Global Impact</li>
                                    <p className="mb-2">Our solutions are used by companies around the world. Working at iShivax means contributing to something bigger than yourself.</p>
                                </ul>
                                <div className="fw-row">
                                    <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                        <div className="frame-66-Y1q-text" onClick={scrollToForm}>Join Our Team</div>
                                        <div className="frame-66-Y1q-arrow"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row join_form_wepper" id="form_get">
                        <form onSubmit={onSave}>
                            <div className="">
                                <h2>Join Our Team</h2>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="text" placeholder="First Name" id="firstName" value={formData.firstName} maxLength={100} className="form-control"
                                            name="firstName" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="text" placeholder="Last Name" id="lastName" value={formData.lastName} maxLength={100} className="form-control"
                                            name="lastName" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="email" placeholder="Email Address" id="emailid" value={formData.emailid} maxLength={30} className="form-control"
                                            name="emailid" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="tel" placeholder="Phone Number" onKeyPress={handleKeyPress} maxLength={10} className="form-control" id="firstName" value={formData.mobileNo}
                                            name="mobileNo" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="text" placeholder="Current CTC (in LPA)" onKeyPress={handleKeyPress} maxLength={10} className="form-control" id="currentCtc" value={formData.currentCtc}
                                            name="currentCtc" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <input type="text" placeholder="Expected CTC (in LPA)" onKeyPress={handleKeyPress} maxLength={10} className="form-control" id="expectedCtc" value={formData.expectedCtc}
                                            name="expectedCtc" required onChange={handlechange} />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <select id="jobPostId" name="jobPostId" onChange={handlechange}>
                                            workTypeData
                                            <option value="--Select--"  >--Select--
                                            </option>
                                            {postData?.map((item, i) => (
                                                <option key={i} value={item.jobPostId}>{item.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="join_input">
                                        <select id="noticePeriod" name="noticePeriod" onChange={handlechange} >
                                            <option value="">Notice Period</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="2 Month">2 Month</option>
                                            <option value="3 Month">3 Month</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="join_input">
                                        <div className="">
                                            <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handlechange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="fw-col-xs-12 contact-form-padding mt-4">
                                        <ReCAPTCHA
                                            sitekey="6Lc40mMrAAAAAEEw2vh3_R5HDERj8Ye7_LVuQl-X"
                                            onChange={handleCaptchaChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-xxl-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                                    <div className="join_input">
                                        <div className="fw-row">
                                            <button type="submit" className="frame-66-Y1q frame-portfolio-button">
                                                <div className="frame-66-Y1q-text">Send Message</div>
                                                <div className="frame-66-Y1q-arrow"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default JoinOurTeam;