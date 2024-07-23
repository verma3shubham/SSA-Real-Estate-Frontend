import React from 'react'
import "./Contact.css";
import {MdCall} from "react-icons/md";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";
import {BsFillChatDotsFill} from 'react-icons/bs';
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
            {/*left side*/}
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                
                <span className='primaryText'>Easy To Contact Us</span>

                <span className='secondaryText'>Our homes boast modern designs, robust security features, and functional layouts that cater to your lifestyle needs. Enjoy community perks like recreational facilities and green spaces, all while investing in a property with potential for appreciation and sustainable features.</span>
                <div className='flexColStart contactModes'>
                    {/*first-row*/}
                    <div className='flexColStart row'>
                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25}/>

                                </div>
                                <div className='flexColCenter detail'>
                                    <span className='primaryText'>Call</span>
                                    <span>620 616 5002</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>CALL NOW</div>
                        </div>


                        {/*second Mode*/}
                        <div className='flexColStart mode'>
                            
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25}/>

                                </div>
                                <div className='flexColCenter detail'>
                                    <span className='primaryText'>Message</span>
                                    <span>620 616 5002</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>MESSAGE NOW</div>
                        </div>












                        
                        


                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <HiChatBubbleBottomCenter size={25}/>

                                </div>
                                <div className='flexColCenter detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span>620 616 5002</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>VIDEO CALL NOW</div>
                        </div>





                    </div>
                </div>
            </div>

            {/*right side*/}
            <div className='c-right'>
                <div className='image-container'>
                    <img src='./main3.jpg' alt=''/>

                </div>
            </div>


        </div>


    </section>
  )
}

export default Contact
