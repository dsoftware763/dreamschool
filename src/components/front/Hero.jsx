import React from 'react';
import mainheroimg from '../../assets/images/mainheroimg.png';
import mainherodown from '../../assets/images/mainherodown.png';
const Hero = () => {
    return (
        <div class="container-fluid mainhero">
            <img src={mainheroimg} class="imgright" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <h1>The early childhood experience you've been dreaming of</h1>
                    <p>We are a community network that helps families find the best childhood programs and solutions. </p>
                    <div class="btns">
                        <p class="btnfind"><a href="#">Find a Dreamschool</a></p>
                    </div>
                    </div>
                </div>
            </div>
            <img src={mainherodown} class="mainherodown" alt=""/>
        </div>
    );
}

export default Hero;