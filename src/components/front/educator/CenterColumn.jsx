import React from 'react';
import paraicon1 from '../../../assets/images/paraicon1.png';
import paraicon2 from '../../../assets/images/paraicon2.png';
import paraicon3 from '../../../assets/images/paraicon3.png';
import paraicon4 from '../../../assets/images/paraicon4.png';
import paraicon5 from '../../../assets/images/paraicon5.png';

const CenterColumn = () => {
    return (
        <div className="col-lg-8 col-lg-push-2 paragraphs" id="center-column">
            <div className="row margindown">
                <div className="para">
                    <div className="flex">
                        <h3>ABOUT OUR SCHOOL</h3>
                        <img src={paraicon1} alt=""/>
                    </div>
                    <p>
                    The Honey Bees Dreamschool provides a home based supportive environment where children learn through play. Little Hearts recognizes that children are competent, capable of complex thinking, curious and rich in potential. We offer opportunities where children can independently build on their skills through exploration, dramatic and creative play.
                    </p>
                </div>
            </div>
            <div className="row margindown">
                <div className="para">
                    <div className="flex full-width">
                        <h3>OUR EDUCATORS</h3>
                        <img src={paraicon2} alt=""/>
                    </div>
                    <p>
                        Hello! I am Annisa, the founder of Honey Bees Dreamschool. I was inspired to start my own program because it has always been my dream to design my own space where children can blossom and grow. I have 2 years of experience working with young children. Before starting my own program, I was working in a childcare center in Toronto. I am also a mother myself, and know how important it is to find a trusting caregiver for one&#39;s own children.
                    </p>
                </div>
            </div>
     
            <div className="row margindown">
                <div className="para">
                    <div className="flex full-width">
                        <h3>LOCATION</h3><img src={paraicon3} alt=""/>
                    </div>
                    <p>
                        We’ve thoughtfully designed our care environment with play and learning areas that allow children to explore various developmentally-appropriate activities based on their interests. Children will have some outdoor time everyday at a local park or playground. Connecting with nature is vital to a child’s happiness and growth. At Little Hearts Dreamschool, we want to provide an environment that supports the cognitive, social, and emotional growth of each child.
                    </p>
                </div>
            </div>


            <div className="row margindown">
                <div className="para">
                    <div className="flex full-width">
                        <h3>ADMISSIONS</h3><img src={paraicon4} alt=""/>
                    </div>
                    <p>
                        We will explore many different learning areas that will benefit your child’s growth and overall development, focusing on , math and sciences, dramatic/creative play (dress up, make belief), literacy development as well as gross and fine motor development (big and small muscles). We will implement daily circle times, where we will learn our letter of the week, our number of the week, learn how to read a calendar and recognize the days of the week. We will learn different songs, and the seasons of the year. We will be learning about different cultures and exploring different scents, and senses too.
                    </p>
                </div>
            </div>

            <div className="row margindown">
                <div className="para pricing" id="pricing">
                    <div className="flex full-width">
                        <h3>TUITION</h3><img src={paraicon5} alt=""/>
                    </div>

                    <h5>2 years up to 6 years</h5>
                    <div>
                        <p>
                        2 days/week 5:30pm-9:30pm:
                        </p>
                        <a className="btn1" data-remote="true" href="#">See Pricing</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterColumn;