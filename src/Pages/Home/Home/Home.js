import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hoocks/useTitle';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import BannerSection from '../BannerSection/BannerSection';
import BlogSection from '../BlogSection/BlogSection';
import CategorySection from '../CategorySection/CategorySection';
import Newsletter from '../Newsletter/Newsletter';
import ProductsSection from '../ProductsSection/ProductsSection';
import ServiceTop from '../ServiceTop/ServiceTop';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <BannerSection></BannerSection>
            <ServiceTop></ServiceTop>
            <CategorySection></CategorySection>
            <AdvertiseSection></AdvertiseSection>
            <ProductsSection></ProductsSection>
            <BlogSection></BlogSection>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;