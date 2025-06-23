"use client"
import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import AboutUs from './AboutUs';

const HomePage = () => {
    const [engShow, setEngShow] = useState(false);
    return (
        <div>
            <NavBar engShow={engShow} setEngShow={setEngShow} />
            <AboutUs engShow={engShow} />
        </div>
    )
}

export default HomePage