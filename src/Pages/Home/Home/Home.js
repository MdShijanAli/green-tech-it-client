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
            <section>
                <div>

                    <ProductsSection></ProductsSection>
                </div>
                <div>
                    <div className='mx-auto text-center my-10'>
                        <Link to='/products' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-50 ">
                <div className=" mx-auto   lg:max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl mt-20">Latest from blog</h2>
                        </div>


                    </div>

                    <div>

                        <BlogSection></BlogSection>

                    </div>

                    <div className='mx-auto text-center my-10'>
                        <Link to='/blog' className="inline-flex mx-auto items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-cyan-600 hover:bg-cyan-800 focus:bg-orange-600" role="button">View All</Link>
                    </div>
                </div>
            </section>

            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;