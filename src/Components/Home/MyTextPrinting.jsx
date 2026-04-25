import React from 'react';
import '../../ComponentsCss/MyTextPrinting.css';
import { Link } from 'react-router-dom';
// import CircularSlider from '../Shared/CircularSlider';

const MyTextPrinting = (props) => {
    const { collaborateData } = props;

    return (
        <div className='model-section'>
            <div className='model-inner'>
                <div className='product_logos_section'>
                    <div className='round_circle fw-container'>
                        <div className="rotate_wrapper">
                            {collaborateData?.map((item, i) => (
                                <div className='circle_container' key={i} >
                                    <div className='circle_box'>
                                        <img src={item?.image} alt='' />
                                        <p className='mb-0'>{item?.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <CircularSlider items={collaborateData} /> */}
                </div>
                <div className='model-content'>
                    <div className="model_text">
                        <div className="marquee-container">
                            <div className="marquee-content">
                                {Array(15).fill("BUILDING TOMMOROW’S SOFTWARE TODAY").map((txt, index) => (
                                    <span key={index}>{txt}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Layer */}
                    <div className='model-images fw-container'>
                        <div className='model-ciecle-image'>
                            <div className='elemebt_section'>
                                <img src='/images/ModelSection/element1.png' alt='' className='element1' />
                                <img src='/images/ModelSection/element2.png' alt='' className='element2' />
                                <img style={{ width: "80%" }} src='/images/ModelSection/modelcircle.webp' alt='' />
                            </div>
                        </div>
                        <Link to='https://ishivax.com/3d/'>
                            <img style={{ width: "50%" }} src='/images/ModelSection/Model.webp' alt='' className='model-boy-image' />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyTextPrinting;