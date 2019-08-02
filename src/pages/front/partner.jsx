import React from 'react';
import ProvideHero from '../../components/front/partner/ProvideHero';
import ApplicationForm from '../../components/front/partner/ApplicationForm';
import WhyPartner from '../../components/front/partner/WhyPartner';
import Benefits from '../../components/front/partner/Benefits';
import ContactForm from '../../components/front/partner/ContactForm';

const Partner = () => {
    return (<>
        <ProvideHero/>
        <ApplicationForm/>
        <Benefits/>
        <WhyPartner/>
        <ContactForm/>
    </>);
}

export default Partner;