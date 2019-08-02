import React from 'react';
import Banner from '../../components/front/Banner';
import Intro from '../../components/front/about/intro';
import Why from '../../components/front/about/Why';
import Features from '../../components/front/about/Features';
import Gallery from '../../components/front/about/Gallery';
import Questions from '../../components/front/about/Questions';

const About = () => {
    return (<>
        <Banner/>
        <Intro/>
        <Why/>
        <Features/>
        <Gallery/>
        <Questions/>
    </>)
}

export default About;