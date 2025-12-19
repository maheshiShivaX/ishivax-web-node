import Header from "../Header";
import '../../../Components/Shared/OurPartners/OurPartner.css';
import { useContext, useEffect, useState } from "react";
import { GetJobPost, SavePostEnquiry } from "../../../_services";
import toast from "react-hot-toast";
import Footer from "../Footer";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const OurPartner = () => {
    const { isLight } = useContext(ThemeContext);
    const [postData, setPostData] = useState();

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

    const onSave = async (e) => {
        e.preventDefault();
        try {
            await SavePostEnquiry(formData);

            toast.success("Message Sent Successfully");

        } catch (error) {
            // console.error('Error submitting form data:', error.response || error.message || error);
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
        <div>

            <Header />

            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' }}>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>

                        <div className="content-under-image">

                            <div className="fw-row ">
                                <img className="vector-line-1" src="./images/Vector-upper-arrow.png" alt="" />
                            </div>

                            <div className="fw-row">
                                <div className="fw-container ">
                                    <div className="fw-col-md-4 vector-class">
                                        <div className="dot-1"></div>
                                        <div className="dot-2"></div>
                                        <img className="vector-cross-1" src="./images/vector.png" alt="" />
                                        <div className="dot-3"></div>
                                        <div className="dot-4"></div>
                                    </div>

                                    <div className="fw-col-md-4">
                                        <div className="fw-heading fw-heading-h2">
                                            <h2 className='fw-special-title vector-heading'>Our Partners
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="fw-col-md-4  vector-class">
                                        <div className="dot-5"></div>
                                        <div className="dot-6"></div>
                                        <img className="vector-cross-2" src="./images/vector.png" alt="" />
                                        <div className="dot-7"></div>
                                        <div className="dot-8"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-row ">
                                <img className="vector-line-2" src="./images/Vector-upper-arrow.png" alt="" />
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
                                        <p className="heading-common-main">BUILDING A LIFETIME PARTNERSHIP IN BUSINESS</p>
                                        <p className="heading-common-content">We rely on our partners to lead customers to the new style of business</p>
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
            </section>


            <section>
                <div className="our_patner_bg_color_main">
                    <div className="our_patner_bg_color">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Technology Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Technology Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Technology Partner</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/microsoft.png" alt="" />
                                    <h2>Microsoft Partner</h2>
                                    <p>Konstant Infosolutions has always been a foremost authority in the importance of new, innovative and functional web development technologies. This claim is backed by our esteemed Microsoft Partner badge, an honor bestowed on few.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/Stripe-partner.png" alt="" />
                                    <h2>Stripe Partner</h2>
                                    <p>Konstant Infosolutions excited to join the Stripe Partner Program and looking forward to provide benefits of Stripe's seamless payments platform to our customers.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/authorize.net-certified.png" alt="" className="mt-2" />
                                    <h2>Authorize.Net Certified Developer</h2>
                                    <p>Konstant Infosolutions excited to join the Stripe Partner Program and looking forward to provide benefits of Stripe's seamless payments platform to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our_patner_bg_color our_patner_bg_margin_set">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Payment Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Cloud Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Mobile Partner</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/amazon-web.png" alt="" />
                                    <h2>Making most of AWS</h2>
                                    <p>Empowering our clients with powerful web solutions, inventively exploring AWS-based business practices and solutions as a committed Amazon Partner.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/paypal-part.png" alt="" />
                                    <h2>Pals with PayPal</h2>
                                    <p>As a PayPal partner, we have access to valuable tools, support and resources, allowing us to offer merchants with rich payment integration and service facility.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/iphone-member.png" alt="" />
                                    <h2>Member of iOS Developer Program</h2>
                                    <p>Konstant Infosolutions has been a prominent member of the Apple iOS Developer Program almost since its inception and has developed and deployed some truly breath-taking Apps under its tutelage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our_patner_bg_color our_patner_bg_margin_set">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Payment Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Cloud Partner</h3>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="technology_partner_hedding">
                                        <h3>Mobile Partner</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/android.png" alt="" />
                                    <h2>Android</h2>
                                    <p>Empowering our clients with powerful web solutions, inventively exploring AWS-based business practices and solutions as a committed Amazon Partner.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/paypal-part.png" alt="" />
                                    <h2>Pals with PayPal</h2>
                                    <p>As a PayPal partner, we have access to valuable tools, support and resources, allowing us to offer merchants with rich payment integration and service facility.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 only_margin_bottom_set">
                                <div className="our_patner_box">
                                    <img src="./images/iphone-member.png" alt="" />
                                    <h2>Member of iOS Developer Program</h2>
                                    <p>Konstant Infosolutions has been a prominent member of the Apple iOS Developer Program almost since its inception and has developed and deployed some truly breath-taking Apps under its tutelage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={`${isLight ? 'Become_Partner_bg-LIGHT' : 'Become_Partner_bg'}`}>
                    <h2>Become A Partner</h2>
                </div>
                <div className="our_patner_bg_color_only">
                    <div className="container ">
                        <div className="row join_form_wepper Become_Partner_margin_setop " id="form_get">


                            <form onSubmit={onSave}>

                                <div className="">
                                    <h2>Join Our Team</h2>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">

                                            <input type="text" placeholder="First Name" id="firstName" value={formData.firstName} className="form-control"
                                                name="firstName" required onChange={handlechange} />


                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">
                                            <input type="text" placeholder="Last Name" id="lastName" value={formData.lastName} className="form-control"
                                                name="lastName" required onChange={handlechange} />

                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">

                                            <input type="email" placeholder="Email Address" id="emailid" value={formData.emailid} className="form-control"
                                                name="emailid" required onChange={handlechange} />
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">

                                            <input type="text" placeholder="Phone Number" className="form-control" id="firstName" value={formData.mobileNo}
                                                name="mobileNo" required onChange={handlechange} />

                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">

                                            <input type="text" placeholder="Current CTC" className="form-control" id="currentCtc" value={formData.currentCtc}
                                                name="currentCtc" required onChange={handlechange} />

                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="join_input">

                                            <input type="text" placeholder="Expected CTC" className="form-control" id="expectedCtc" value={formData.expectedCtc}
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
                                            <div className="file-upload">

                                                <input type="file" className="form-control" id="file" name="file" accept="image/png, image/jpeg" onChange={handlechange} />
                                            </div>
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
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default OurPartner;