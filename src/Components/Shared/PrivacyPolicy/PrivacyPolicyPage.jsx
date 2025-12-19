import { useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ThemeContext } from "../../../Contaxt/ThemeContext";

const PrivacyPolicyPage = () => {
 const { isLight } = useContext(ThemeContext);

    return (
        <div>
            <Header />
            <section>
                <div className={`fw-main-row ${isLight ? 'black-bg-content-LIGHT' : 'black-bg-content'}`}>
                    <div className="fw-full-container-top" style={{ backgroundImage: 'url(./images/bg-dots.png)',overflow:"hidden" }}>
                        <div className="fw-row">
                            <div className="fw-col-xs-12 ">
                                <div className="fw-divider-space" style={{ marginTop: '40px' }}></div>
                            </div>
                        </div>
                        <div className="fw-container">

                            <div className="seo-media-images privacy_top_images_arrow">
                                <img className="top-image-arrow-1" src="./images/Vector-line-straight.png" alt="" />
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
                                            <h2 className={`${isLight ? 'fw-special-title vector-heading-LIGHT' : 'fw-special-title vector-heading'}`}>Privacy Policy
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
                                        <p className={`${isLight ? 'heading-common-main-LIGHT' : 'heading-common-main'}`}>iShivax Privacy Policy</p>
                                        <p className={`${isLight ? 'heading-common-content-LIGHT' : 'heading-common-content'}`}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
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
                        <h2>Privacy Policy for iShivax</h2>
                        <p>This Privacy Policy explains how iShivax (referred to as "iShivax," "We," "Our," or "Us") collects, processes, and protects your personal data. It reflects our commitment to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), and safeguarding the rights and privacy of individuals. Please review this policy carefully to understand how we handle your data and your rights concerning it.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Purpose</h2>
                        <p>This policy establishes an effective, accountable, and transparent framework to ensure compliance with data protection regulations and demonstrates our commitment to protecting the personal data of individuals interacting with our services.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Scope</h2>
                        <p>This policy applies to:</p>
                        <ul>
                            <li>All employees of iShivax.</li>
                            <li>Any third parties responsible for processing personal data on behalf of iShivax.</li>
                            <li>Individuals ("users" or "data subjects") interacting with iShivax’s website, subscribing to our products or services, or using our chat and support tools.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Governance
                            Data Protection Officer (DPO)</h2>
                        <p>To ensure our commitment to data protection and oversees compliance with applicable laws. Their responsibilities include:</p>
                        <ul>
                            <li>Informing and advising employees and third parties about data protection regulations.</li>
                            <li>Overseeing Data Protection Impact Assessments (DPIAs).</li>
                            <li>Acting as a point of contact for Data Protection Authorities (DPAs).</li>
                            <li>Ensuring compliance with policies, practices, and third-party agreements regarding personal data.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Data Protection Principles</h2>
                        <p>We adhere to the following principles to ensure personal data is handled responsibly:</p>
                        <ul>
                            <li><strong>Lawfulness, Fairness, and Transparency:</strong>Data is processed lawfully, fairly, and transparently, ensuring data subjects are informed about its usage.</li>
                            <li><strong>Purpose Limitation:</strong> Data is collected for specific, explicit, and legitimate purposes and not used beyond those purposes.</li>
                            <li><strong>Data Minimization:</strong>  Data collected is limited to what is necessary for its intended purpose.</li>
                            <li><strong>Accuracy:</strong>  Data is accurate, kept up-to-date, and corrected promptly if inaccurate.</li>
                            <li><strong>Storage Limitation:</strong>  Data is stored only for as long as necessary for its intended purpose.</li>
                            <li><strong>Integrity and Confidentiality:</strong>  : Data is secured against unauthorized or unlawful processing, accidental loss, destruction, or damage.</li>
                            <li><strong>Accountability:</strong>  iShivax is accountable for compliance with these principles and takes responsibility for protecting personal data.</li>

                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>How We Collect and Use Data
                            Data Sources</h2>
                        <p>We collect personal data from the following sources:</p>
                        <ul>
                            <li><strong>Data Provided by You:</strong> Name, email, phone number, country, Skype ID, or other details you choose to share.</li>
                            <li><strong>Cookies:</strong> Cookies track website usage to improve your experience. You may adjust your browser settings to disable cookies.</li>
                            <li><strong>External Tools:</strong> Social plugins (Facebook, LinkedIn, etc.) for user interaction and engagement.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Data Processing and Legal Basis</h2>
                        <p>We process personal data under these lawful bases:</p>
                        <ul>
                            <li><strong>Consent: </strong>When you provide explicit consent for a specific purpose.</li>
                            <li><strong>Contractual Necessity: </strong>When processing is required to fulfill a contract or take steps before entering one.</li>
                            <li><strong>Legal Obligation: </strong>When processing is necessary to comply with legal obligations.</li>
                            <li><strong>Legitimate Interests: </strong>When processing supports business functions without overriding individual rights.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>How We Protect Your Data</h2>
                        <p>We implement technical, administrative, and organizational safeguards to protect personal data.</p>
                        <ul>
                            <li><strong>Access Control: </strong>Data is accessible only to authorized personnel.</li>
                            <li><strong>Encryption: </strong>Data is encrypted in transit and at rest to prevent unauthorized access.</li>
                            <li><strong>Breach Notification: </strong> In the event of a breach, we notify affected individuals and authorities within 72 hours.</li>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Data Retention</h2>
                        <p>We retain personal data only as long as necessary for the purpose it was collected. Once no longer required, data is securely deleted or anonymized.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Rights of Data Subjects</h2>
                        <p>Under GDPR, you have the following rights:</p>
                        <ul>
                            <li><strong>Access: </strong>Request a copy of your personal data.</li>
                            <li><strong>Correction: </strong> Update or correct inaccurate data.</li>
                            <li><strong>Erasure: </strong> Request deletion of data, where applicable.</li>
                            <li><strong>Restriction: </strong>  Limit data processing under specific conditions.</li>
                            <li><strong>Data Portability: </strong> Transfer your data to another organization.</li>
                            <li><strong>Objection: </strong>  Object to data processing, including marketing.</li>
                            <p>To exercise your rights, contact <a href="https://ishivax.com/" target="_blank" rel="noreferrer">ishivax.com</a>.</p>
                        </ul>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Children’s Data</h2>
                        <p>We do not knowingly collect data from children under 14 without parental consent.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Compliance Monitoring and Training</h2>
                        <p>We conduct regular audits to ensure adherence to this policy. All employees undergo training on data protection to maintain awareness and compliance.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Digital Marketing</h2>
                        <p>We only send promotional communications to users who have opted in. Users can unsubscribe anytime by adjusting their preferences or contacting us directly.</p>
                    </div>
                    <div className="privacy_policy_inner">
                        <h2>Contact Us</h2>
                        <p>If you have questions about this policy or your data, please reach out to us: <br />Email: <a href="mailto:business@ishivax.com">business@ishivax.com</a></p>
                    </div>
                    <div className="privacy_policy_inner">
                        <p>This policy is reviewed regularly to ensure compliance with evolving regulations and best practices. By using iShivax services, you acknowledge that you have read and understood this Privacy Policy.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PrivacyPolicyPage;