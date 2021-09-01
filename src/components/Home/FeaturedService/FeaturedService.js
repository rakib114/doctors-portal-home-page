import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam exercitationem veritatis repellat fugiat, velit, blanditiis neque corrupti ab dolorum placeat deleniti, optio esse alias magni numquam molestiae amet voluptatibus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum a officia mollitia quam fugiat porro.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;