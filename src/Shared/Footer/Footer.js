import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactInfo = {
        address: "Newtown 7no, Dinajpur Sadar, Dinajpur",
        telehone: "652 65823 562",
        phone: "01571261165",
        email: "shijan135@gmail.com"
    }

    const socialIcons = [
        {
            id: 1,
            img: instagram,
            path: "https://www.instagram.com/dev_shijan/"
        },
        {
            id: 2,
            img: facebook,
            path: "https://www.facebook.com/mdshijanali135"
        },
        {
            id: 3,
            img: linkedin,
            path: "https://www.linkedin.com/in/mdshijanali"
        },
        {
            id: 4,
            img: twitter,
            path: "https://twitter.com/shijan135"
        }
    ]

    const legals = {
        title: "Legals",
        data: [
            {
                id: 1,
                name: "Terms & Conditions",
                path: '/terms-condition'
            },
            {
                id: 2,
                name: "Privacy Policy",
                path: '/privacy-policy'
            },
            {
                id: 3,
                name: "Return & Refund",
                path: '/return-refund'
            },
            {
                id: 3,
                name: "Dashboard",
                path: '/dashboard'
            },
        ],
    };
    
    const footerContactInfo = {
        title: "Green Tech IT",
        data: [
  
          {
            id: 1,
            value: contactInfo.address,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                            <path
                              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24H248z" />
                          </svg>`
  
          },
          {
            id: 2,
            title: "Toll Free",
            value: contactInfo.telehone,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                            <path
                              d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                          </svg>`,
            path: contactInfo.telehone
  
          },
          {
            id: 3,
            title: "Phone",
            value: contactInfo.phone,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                            <path
                              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                          </svg>`,
            path: contactInfo.phone,
  
          },
          {
            id: 4,
            title: "Email",
            value: contactInfo.email,
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                            <path
                              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                          </svg>`,
  
            path: contactInfo.email
          }
  
        ]
      };

    
    return (
        <div>
        <div className="bg-footerBG">
          <div className="max-w-7xl mx-auto px-6 py-10">
               <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-10 gap-5">
                   <div className="text-center">
                    <img className="w-[150px] md:w-[200px] mx-auto" src={logo} alt="" />
                    <div className="mt-5">
                                <ul className="flex gap-3 justify-center">
                                    {
                                        socialIcons.map((social) => (
                                            <li key={social.id} className="rounded-full w-8 h-8 bg-white hover:bg-secondary transition duration-700 ease-in-out">
                                            <a className="text-center" href={social.path} target="_blank" rel="noreferrer">
                                                <img src={social.img} alt="" />
                                            </a>
                                         </li>
                                        ))
                                    }
                     
                      </ul>
                    </div>
                   </div>
                   <div className="mt-5 md:mt-0">
                    <h6 className="text-h6 font-semibold text-white  uppercase">{ footerContactInfo.title }</h6>
                            <div className="pt-5">
                                {
                                    footerContactInfo.data.map(footerInfo => (
                                        <div key={footerInfo.id} className="grid grid-flow-col justify-start gap-5 items-center mb-5">
                                                  <span dangerouslySetInnerHTML={{ __html: footerInfo.icon }}></span>
                                            {
                                                footerInfo.path? <p className="text-[11px] text-footerText hover:text-primary transition duration-500 ease-in-out font-medium">
                                                <a href={`${footerInfo.title === 'Email' ? 'mailto:' + footerInfo.path : 'tel:' + footerInfo.path}`}>
                                                {footerInfo?.title}: {footerInfo?.value}
                                              </a>
                                                </p> :
                                                     <p  className="text-[11px] text-footerText hover:text-primary transition duration-500 ease-in-out font-medium">
                                                     <span v-if="footerInfo.title"> </span> {footerInfo.value}</p>
                                                    
                                                }
                                                </div> 
                       
                                    ))
                                }
                     
                    </div>
                   </div>
                   <div className=" md:order-3 sm:order-4">
                    <h6 className="text-h6 font-semibold text-white uppercase">{ legals.title }</h6>
                    <div className="pt-1">
                                <ul>
                                    {
                                        legals.data.map(legal => (
                                            <li key={legal.id} className="my-3"><Link to={legal.path} className="text-p font-medium text-footerText hover:text-primary transition duration-500 ease-in-out">{ legal.name }</Link></li>
                                        ))
                                    }
                      </ul>
                    </div>
                   </div>
                   <div className="text-center md:text-left ms:order-4 sm:order-3">
                    <h6 className="text-h6 font-semibold text-white uppercase">Mail Us</h6>
                    <div className="mt-5">
                      <form action="">
                        <input required type="text" placeholder="Name" className="input-sm input-bordered focus:outline-primary w-full" />
                        <input required type="email" placeholder="Email" className="input-sm input-bordered focus:outline-primary w-full mt-1" />
                        <input type="phone" placeholder="Phone Number" className="input-sm input-bordered focus:outline-primary w-full mt-1" />
                        <textarea required className="textarea-md mt-1 focus:outline-primary w-full" placeholder="Message"></textarea>
                        <button className="mt-2 py-2 w-full bg-secondary hover:bg-secondary/50 transition duration-700 ease-in-out rounded-md text-white">Submit</button>
                      </form>
                    </div>
                   </div>
               </div>
          </div>
        </div>
        <div className=" bg-footerBottom">
          <div className="max-w-7xl px-6 mx-auto py-5 text-white">
                    <p className="text-p text-gray-200 hover:text-white text-center">© Copyright <span>{ currentYear } </span>
              Green Tech It. | All Rights Reserved | Developed by <a href="https://www.linkedin.com/in/mdshijanali" rel='noreferrer' target="_blank"
                className="hover:text-primary font-semibold">Md Shijan Ali.</a></p>
          </div>
        </div>
      </div>
    );
};

export default Footer;