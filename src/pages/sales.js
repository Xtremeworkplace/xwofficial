import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
 <Seo title="Sales Opertations| Grow your sales 10x" 
    description=" xtreme Workplace will manage your sales operations to increase your sales revenue. Best Customer Care Executive , Live Chat Support Team & Many More"
    keywords="sales operations, xtreme workplace sale operations services, xtreme workplace marketing agency, xtreme workplace,
    e-commerce web design companies,
ecommerce web design agency delhi,
ecommerce web design agency amazon,
ecommerce web design agency amazon india,
ecommerce web design agency app,
ecommerce web design agency india,
ecommerce web design agency fees,
ecommerce web design agency glassdoor,
ecommerce web design agency google,
ecommerce web design agency near me,
ecommerce web design agency noida,
ecommerce web design agency of india,
ecommerce web design agency online,
ecommerce website designer near me,
ecommerce website design price in india,
ecommerce website development noida,
ecommerce website development usa,
wordpress ecommerce web designer near me,
ecommerce website developer in delhi,
ecommerce website developer in india, 
ecommerce website developer near me,
ecommerce website developer "
    image="../images/sales.png"/>


   <div className="bg-amber-500">
   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-amber-700 uppercase rounded-full bg-gray-900">
            Sales Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-900 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Hire</span>
          </span>{' '}
          Sales Operations Team 
        </h2>
        <p className="text-xl text-gray-900 md:text-xl">
          Best Customer Care Executive, Live Chat Support Team & Many More
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              1
            </p>
            <p className="text-lg font-bold leading-5">Product Training</p>
          </div>
          <p className="text-lg text-gray-900">
            Sales expert will help your team with Virtual training for Sales & marketing. 
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              2
            </p>
            <p className="text-lg font-bold leading-5">Live Chat Support</p>
          </div>
          <p className="text-lg text-gray-900">
            Our Live chat expert will manage your real time website traffic & convert your leads for sales. 
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
              3
            </p>
            <p className="text-lg font-bold leading-5">Email Support</p>
          </div>
          <p className="text-lg text-gray-900">
            Our Email expert executive will manage your backend email support desk system.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
          
        </div>
       
      </div>
      
      <br />
      <div className="text-center">
        <Link
          href="tel:+918383066031"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-amber-700 hover:text-white transition duration-200 rounded shadow-md md:w-auto bg-gray-900 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
        >
         Call Us Now
        </Link>
      </div>
    </div>
    
  </div>
   

  






  </Layout>
)

export default IndexPage
