import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <section
            className="relative bg-[url(https://asia.dynabook.com/assets_new/images/home-banner.png)] bg-cover bg-center bg-no-repeat z-0 "
        >

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
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
                        <Link
                            to='/products'
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </Link>

                        <Link
                            to='/blog'
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
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