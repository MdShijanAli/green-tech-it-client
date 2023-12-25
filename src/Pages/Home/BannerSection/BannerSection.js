import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const BannerSection = () => {
    return (
        <section
            className=" relative bg-[url(https://asia.dynabook.com/assets_new/images/home-banner.png)] bg-cover bg-center bg-no-repeat"
        >

            <div
                className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="">
                    <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700">
                            Suitable Laptop
                        </strong>
                    </h1>

                    <p className="mt-4 text-white max-w-lg sm:text-xl sm:leading-relaxed">
                        GREEN TECT IT is one of the best used laptop sale service in Bangladesh. You can find here your expected laptop for a low price.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                    

                        <Link to='/products'>
                          <Button>Get Started</Button>
                        </Link>

                        <Link
                            to='/blog'
                            className="sm:px-10 px-8 py-2 sm:py-3 bg-white text-primary hover:bg-secondary transition duration-500 ease-in-out hover:text-white font-semibold rounded-sm"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BannerSection;