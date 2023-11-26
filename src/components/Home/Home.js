import React, { Fragment, useState } from 'react'
import './Home.css';
import logo from '../../assets/logo.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from '@mui/icons-material/Person';
import location from '../../assets/location.png';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListIcon from '@mui/icons-material/List';
const Home = () => {
    const [leadName, setLeadName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState('');
    const [saleValue, setSaleValue] = useState();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const formSubmit = () => {
       const myform=new FormData();
       myform.set('lead_name',leadName);
       myform.set('phone_number',phoneNumber);
       myform.set('email',email);
       myform.set('address',address);
       myform.set('sale_value',saleValue);
       myform.set('date',date);
       myform.set('time',time);
       myform.set('note',note);
       myform.set('selected_option',selectedOption);
       myform.set('selected_product',selectedProduct);
    }
    return (
        <Fragment>
            <div className='homeContainer'>
                <div className='homeContainerBox'>
                    {/* home heading */}
                    <div className='homePageHeading'>
                        <p>Magnabox Private limited </p>
                        <img src={logo} alt='Magnabox Private limited' />
                    </div>
                    {/* add extra lead form */}
                    <div className='addnewLeadForm'>
                        <p>Add new lead form </p>
                        <div>
                            <p>cancel</p>
                        </div>
                    </div>

                    {/* form */}
                    <form
                        className="leadForm"
                        encType="multipart/form-data"
                        onSubmit={formSubmit}
                    >
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Lead Name<span style={{
                                color: '#A42A31'
                            }}>*</span></label>
                            <div>
                                <PersonIcon />
                                <input
                                    type="text"
                                    placeholder="Enter Lead Name"
                                    required
                                    name="leadName"
                                    value={leadName}
                                    onChange={(e) => setLeadName(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Email ID<span style={{
                                color: '#A42A31'
                            }}>*</span></label>
                            <div>
                                < MailOutlineIcon />
                                <input
                                    type="email"
                                    placeholder="Example@anyemail.com
                        "
                                    required
                                    name="leadName"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Phone Number<span style={{
                                color: '#A42A31'
                            }}>*</span></label>
                            <div>
                                <CallIcon />
                                <input
                                    type="number"
                                    placeholder="+91 8800688763
                        "
                                    required
                                    name="leadName"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Address</label>
                            <div>
                                <LanguageIcon />
                                <input
                                    type="text"
                                    placeholder="Gugurgram ,India
                        "
                                    required
                                    name="leadName"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='locationImage'>
                            <img src={location} alt='' />
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Sale Value</label>
                            <div>
                                <CurrencyRupeeIcon />
                                <input
                                    type="number"
                                    placeholder="50,00,000"
                                    required
                                    name="leadName"
                                    value={saleValue}
                                    onChange={(e) => setSaleValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Date</label>
                            <div>
                                <DateRangeIcon />
                                <input
                                    type="date"
                                    // placeholder="29 August 2023"
                                    // value="29 August 2023"
                                    placeholder="29 August 2023"
                                    required
                                    name="leadName"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Time</label>
                            <div>
                                <AccessTimeIcon />
                                <input
                                    type="text"
                                    placeholder="20:21 pm"
                                    required
                                    name="leadName"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="leadInput">
                            <label style={{ margin: '0px 0px 5px 10px' }}>Options</label>
                            <div>
                                <ListIcon />
                                <select
                                    required
                                    name="leadTime"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}

                                >
                                    <option value="" disabled selected>Select Options</option>

                                </select>
                            </div>
                        </div>
                        <div className="leadInput">
                            <label style={{ margin: '0px 0px 5px 10px' }}>Products</label>
                            <div>
                                <ListIcon />
                                <select
                                    required
                                    name="leadTime"
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}

                                >
                                    <option value="" disabled selected>Select Products</option>

                                </select>
                            </div>
                        </div>
                        <div className="leadInput">

                            <label style={{ margin: '0px 0px 5px 10px' }}>Note</label>
                            <div>
                                {/* <AccessTimeIcon /> */}
                                <textarea
                                    type="textArea"
                                    rows="5" cols="50"
                                    required
                                    name="leadName"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>
                        </div>


                        <input
                            type="submit"
                            value="Add lead"
                            className="submitBtn"
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Home