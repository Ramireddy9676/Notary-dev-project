import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {

    const [showUserData, setShowUserData] = useState(false);

    return (
        <div className='Main_header'>
            <div className="Header_components">
                <div className='header_data'>
                    <div className='rightside'>
                        <img src='http://103.174.56.114:3001/Notary/images/cm-image.svg' height={70} width={55}></img>
                        <div className='jagan_information'>
                            <span>Sri. Y S Jagan Mohan Reddy</span>
                            <p>Hon'ble Chief Minister</p>
                            <p>Andhra Pradesh</p>
                        </div>
                    </div>
                    <div className='middle'>
                        <img src='	http://103.174.56.114:3001/Notary/_next/image?url=%2FNotary%2Fimages%2Fgovt_logo.png&w=64&q=75' height={65} width={55}></img>
                        <div className='registration_information'>
                            <p>REGISTRATION & STAMPS DEPARTMENT</p>
                            <span><img src='http://103.174.56.114:3001/Notary/images/redline.svg'></img>GOVERNMENT OF ANDHRA PRADESH</span>

                        </div>
                    </div>
                    <div className='leftside'>
                        <div className='dharamana_information'>
                            <span>Sri. Dharmana Prasada Rao</span>
                            <p>Hon'ble Minister for Revenue,</p>
                            <p>Registration & Stamps</p>
                        </div>
                        <img src='http://103.174.56.114:3001/Notary/images/minister.svg' height={65} width={55}></img>

                    </div>
                </div>
                <div className='contact'>
                    <div className='contact_number'>
                        <img src='http://103.174.56.114:3001/Notary/images/icon-phone.svg' height={17} width={30}></img>
                        <span>+91 9121106359</span>
                        <div className='contact_email'>
                            <img src='http://103.174.56.114:3001/Notary/images/icon-email.svg' height={13} width={30}></img>
                            <span>helpdesk-it[at]igrs[dot]ap.gov[dot]in</span>
                        </div>
                    </div>
                    <div>
                        <label>Ongole</label>
                        <img src='http://103.174.56.114:3001/Notary/images/usericon.svg' height={25} width={25} onMouseOver={() => setShowUserData(true)} ></img>

                    </div>

                </div>
            </div>
            <div className='Notary_Information'>
                <span>NOTARY INFORMATION SYSTEM</span>
            </div>
            {showUserData && (
                <div className='user_information'>
                    <Link to='/Renewals' className='profile'><p>Profile123456</p></Link>
                    <Link to='/Loginpage' className='Logout'><p>Logout</p></Link>
                </div>
            )}


        </div>

    )

}
export default Header;
