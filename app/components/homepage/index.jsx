"use client";

import { useEffect, useState } from 'react';
import About from './about';
import Contact from './contact';
import Education from './education';
import Experience from './experience';
import HeroSection from './hero-section';
import Projects from './projects';
import Skills from './skills';
import { useTheme } from 'next-themes';
import Loader from '../../components/helper/loader'; // Assuming loader path

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true); // State for loading
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust as needed

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />; // Show loader while loading
    }

    return (
        <div className="homepage-container">
            <HeroSection />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
};

export default HomePage;
