"use client"
import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import AboutUs from './AboutUs';
import FeaturesAI from './FeaturesAI';
import DesignedBuild from './DesignedBuild';
import Testimonial from './Testimonial';
import NewsLetter from './NewsLetter';
import TravelStory from './TravelStory';
import Faq from './Faq';
import Footer from '../common/Footer';

const HomePage = () => {
    const [engShow, setEngShow] = useState(false);
    return (
        <div>
            <NavBar engShow={engShow} setEngShow={setEngShow} />
            <AboutUs engShow={engShow} />
            <FeaturesAI engShow={engShow} />
            <DesignedBuild engShow={engShow} />
            <Testimonial engShow={engShow} />
            <TravelStory engShow={engShow} />
            <NewsLetter engShow={engShow} />
            <Faq engShow={engShow} />
            <Footer engShow={engShow} />
        </div>
    )
}

export default HomePage