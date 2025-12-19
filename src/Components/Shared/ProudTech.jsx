import { useEffect, useState } from "react";
import { GetTechPartnerHomePage } from "../../_services";
import { imagebaseurl } from "../../config";

const ProudTech = () => {

    const [partnerData, setPartnerData] = useState();

    

    const fetchgetTechPartnerHomePage = async () => {
        try {
            const data = await GetTechPartnerHomePage();
            setPartnerData(data);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        fetchgetTechPartnerHomePage();


    }, [])

    



    return (
        <div className="fw-main-row  middle-content">
            <div className="fw-container">

                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{marginTop:'60px'}}></div>
                    </div>
                </div>

                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-heading fw-heading-h2">
                            <h2 className='fw-special-title tech-part-AA1'>PROUD TO BE A TECH PART
                                OF</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <p className="exciting-ER4" style="text-align: center;">Trusted by the experts over the globe</p>
                    </div>

                </div> --> */}


                <div className="fw-row">
                    <div className="fw-col-xs-12 ">
                        <div className="fw-divider-space" style={{marginTop:'10px'}}></div>
                    </div>
                </div>


                <div className="fw-row card-container-tech-part">

                {partnerData?.map((item, i) => (
                    <div className="fw-col-xs-12 fw-col-sm-6 fw-col-md-4 hover_inAll" key={i}>
                        <div className="frame-8056-K88">
                            <div className="seo-media-images">
                             
                                <img src={`${imagebaseurl}${item?.photoPath}`} style={{ borderRadius: '20px' }} alt=""/>
                            </div>
                            <div className="frame-1000003855-Vgp">
                                <div className="tech_patnar_img_data">
                                <img src={`${imagebaseurl}${item?.logoPath}`} alt=""/>
                                </div>
                                <div className="tech_patnar">   
                                    <p className="st-india-i3n">{item?.projectName}</p>
                                    <span>{item?.shortDesc}</span>
                                </div>
                            </div>
                            {/* <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry</p> --> */}
                        </div>
                    </div>
                ))}

                 
                </div>
            </div>
        </div>
    )
}

export default ProudTech;