import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
       <section className="make-appoinment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5 appoinment-info">
                        <h5 className="text-primary text-uppercase">Appoinment</h5>
                        <h1 className="my-4">Make an appoinment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla quisquam ipsam.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default MakeAppoinment;