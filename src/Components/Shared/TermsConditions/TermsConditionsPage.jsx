import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const TermsConditionsPage = () => {
const { isLight } = useContext(ThemeContext);

    return (
        <div>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)' ,overflow:"hidden"}}>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>
                        <div className="fw-container">

                            <div className="seo-media-images privacy_top_images_arrow">
                                <img className="top-image-arrow-1" src="./images/Vector-line-straight.png" alt=""/>
                            </div>
                            <div className="seo-media-images privacy_top_images_arrow">
                                <img className="top-image-arrow-2" src="./images/Vector-line-straight.png" alt="" />
                            </div>

                            <div className="seo-media-images privacy_top_images_arrow">
                                <img className="top-image-arrow-3" src="./images/Vector-line-straight.png" alt="" />
                            </div>
                            <div className="seo-media-images privacy_top_images_arrow">
                                <img className="top-image-arrow-4" src="./images/Vector-line-straight.png" alt="" />
                            </div>

                        </div>
                        <div className="content-under-image pb-4">

                            <div className="fw-row ">
                                <img className="vector-line-1" src="./images/Vector-upper-arrow.png" alt=""/>
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
                                            <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>terms & Conditions
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="fw-col-md-4  vector-class">
                                        <div className="dot-5"></div>
                                        <div className="dot-6"></div>
                                        <img className="vector-cross-2" src="./images/vector.png" alt=""/>
                                        <div className="dot-7"></div>
                                        <div className="dot-8"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw-row ">
                                <img className="vector-line-2" src="./images/Vector-upper-arrow.png" alt=""/>
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
                                        <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>iShivax Terms & Condition</p>
                                        <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>These Terms of Service ("Terms") govern your use of our website and services (referred to as "Website"). By accessing or using the Website, you agree to comply with these Terms.
                                        </p>
                                    </div>
                                    <div className="fw-col-xs-12 ">

                                    </div>
                                </div>

                            </div>

                            <div className="fw-row" style={{ display: 'flex' }}>
                                <div className="fw-col-xs-12 ">

                                </div>
                                <div className="fw-col-xs-12 ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="privacy_policy_wepper">
                    <div className="privacy_policy_inner">
                        <h2>Terms of Service for iShivax</h2>
                        <p>Welcome to iShivax. These Terms of Service ("Terms") govern your use of our website and services (referred to as "Website"). By accessing or using the Website, you agree to comply with these Terms. If you do not agree, please discontinue use of the Website. iShivax reserves the right to modify these Terms at any time without prior notice, and your continued use of the Website constitutes acceptance of any changes.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2> Acceptance</h2>
                        <p>By using the iShivax Website, you confirm that you understand and agree to these Terms. The materials provided on this Website are protected under applicable copyright and trademark laws. These Terms may be updated or revised periodically without notice. Please review the Terms regularly to stay informed about any updates.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Use License</h2>
                        <p>iShivax grants you a limited, non-exclusive, and non-transferable license to access and use the materials on the Website for personal, non-commercial purposes. This is not a transfer of ownership, and under this license, you agree not to:</p>
                        <ul>
                            <li>Modify, copy, or replicate any materials from the Website.</li>
                            <li>Use the materials for commercial purposes or public display without prior written consent.</li>
                            <li>Attempt to decompile, reverse engineer, or extract any source code from the Website.</li>
                            <li>Remove copyright or proprietary notations from the materials.</li>
                            <li>Transfer the materials to another person or "mirror" them on any other server.</li>
                            <p>If you violate any of these restrictions, this license will terminate automatically, and iShivax may revoke your access to the Website. Upon termination, you must delete any downloaded materials in your possession, whether in electronic or printed format.</p>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Disclaimer</h2>
                        <p>All materials provided on the Website are offered "as is." iShivax makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of the materials for any particular purpose. iShivax disclaims all implied warranties, including but not limited to merchantability, fitness for a specific purpose, or non-infringement of intellectual property rights. The use of the Website materials is at your own risk.</p>

                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Website Performance and Analytics</h2>
                        <p>iShivax collects certain information to enhance the functionality and performance of its Website.</p>

                    </div>
                    <div className="privacy_policy_inner">
                        <h2>IP Logging:</h2>
                        <p>IP addresses are logged for administrative purposes and to determine geographic locations of visitors. This information is not linked to personally identifiable data.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Cookies:</h2>

                        <ul>
                            <li>Cookies are used to track website usage and improve your experience. They help customize content and remember preferences.</li>
                            <li>You can disable cookies in your browser settings; however, this may impact your experience on the Website.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Google Analytics:</h2>

                        <ul>
                            <li>iShivax uses Google Analytics to collect non-personal information about your interaction with the Website, such as pages visited and time spent.</li>
                            <li>Google may use cookies to track your browsing activity. For more information, review Google's Privacy Policy.</li>

                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Advertising and Targeting:</h2>
                        <p>iShivax uses Google AdWords to display ads based on your interactions with the Website. To opt-out of Google’s ad tracking, visit the Google Ad Settings page.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Sitecore Analytics:</h2>

                        <ul>
                            <li>Sitecore tools are used to analyze and improve the Website experience.</li>
                            <li>By using the Website, you consent to the use of cookies and tracking tools as described above.</li>

                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Limitations of Liability</h2>
                        <p>iShivax is not liable for any damages arising from the use or inability to use materials on the Website. This includes, but is not limited to, loss of profits, business interruptions, or data inaccuracies. Use of any third-party links on the Website is at your own risk, and iShivax does not endorse or take responsibility for content on third-party websites.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Termination</h2>
                        <p>iShivax reserves the right to terminate or suspend your access to our services if:</p>
                        <ul>
                            <li>You breach these Terms.</li>
                            <li>Your actions harm iShivax, its users, or its reputation.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Third-Party Links and Services</h2>
                        <p>Our website and services may include links to third-party websites or tools. iShivax is not responsible for the privacy practices, content, or performance of these third parties. You use them at your own risk.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Changes to Terms</h2>
                        <p>iShivax reserves the right to modify these Terms at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of the updated Terms.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Data Protection and Privacy</h2>
                        <p>iShivax values your privacy and complies with applicable data protection laws, including GDPR. By using our services, you consent to the collection and use of your data as outlined in our Privacy Policy.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Intellectual Property</h2>
                        <p>All content, software, and services provided by iShivax are protected by copyright, trademark, and other intellectual property laws.</p>
                        <ul>
                            <li>You may not reproduce, distribute, or create derivative works from our content without explicit permission.</li>
                            <li>iShivax retains ownership of all intellectual property rights related to its services.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Governing Law</h2>
                        <p>These Terms and the use of the Website are governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts in Jaipur.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Contact Us</h2>
                        <p>If you have any questions regarding these Terms, please contact us at: <br /> <strong><a href="mailto:business@ishivax.com">business@ishivax.com</a></strong> <br />By using the iShivax Website, you acknowledge that you have read and agreed to these Terms of Service. Thank you for choosing iShivax!</p>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default TermsConditionsPage;