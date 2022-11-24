import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import CategorySection from '../CategorySection/CategorySection';
import ServiceTop from '../ServiceTop/ServiceTop';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <ServiceTop></ServiceTop>
            <CategorySection></CategorySection>

        </div>
    );
};

export default Home;