"use client"
import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import AboutUs from './AboutUs';
import FeaturesAI from './FeaturesAI';

const HomePage = () => {
    const [engShow, setEngShow] = useState(false);
    return (
        <div>
            <NavBar engShow={engShow} setEngShow={setEngShow} />
            <AboutUs engShow={engShow} />
            <FeaturesAI engShow={engShow} />
        </div>
    )
}

export default HomePage