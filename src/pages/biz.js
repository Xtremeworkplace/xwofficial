import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
   <Seo title="Business Automation | Grow eCommerce business" 
    description="Xtreme Workplace will create a automation business process for your business, hassle free customer experience & many more"
    keywords="business automation, xtreme workplace business automation, ecommerce website development, e-commerce web design companies,
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
ecommerce website developer  "
    image="../images/biz.png"/>
   
   <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <StaticImage
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="../images/xwmain1.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-amber-700">
            Biz Automation
          </p>
          <h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{' '}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-lg text-gray-900 md:text-xl">
            Xtreme Workplace will create a automation business process for your business, hassle free customer experience & many more
          </p>
          <div className="flex items-center">
            <Link href="+918383066031"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white hover:text-gray-900 transition duration-200 rounded shadow-md bg-gray-900 hover:bg-amber-700 focus:shadow-outline focus:outline-none"
            >
              Call Us Now
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCcMSMQR5jzshfqf2H0L3UCg?sub_confirmation=1"
              aria-label="" target="_blank"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
              Marketing Training
            </Link>
          </div>
        </div>
      </div>
    </div>


    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <p className="mb-1 text-lgfont-semibold tracking-wide uppercase md:mb-2">
          Business process
        </p>
        <p className="text-lg text-gray-900 md:text-xl">
        No More Business Loss, Due to Our Bad Human Resource Experiences, Why Our Customer Will Endure All This When We Can Create Hassle-Free Solutions
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <StaticImage 
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="../images/xwmain4.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
           Sales Automation
          </h5>
          <p className="text-gray-900 text-lg">
            Sales Page to Converting Sales for high coversions without any human interaction.
          </p>
        </div>
        <div>
          <StaticImage 
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="../images/xwmain5.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            CRM Automation
          </h5>
          <p className="text-gray-900 text-lg">
            CRM implementation to CRM Automation Process for smooth customer relationship management
          </p>
        </div>
        <div>
          <StaticImage 
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="../images/xwmain6.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Customer Support Automation
          </h5>
          <p className="text-gray-900 text-lg">
            Customer Support System-Live chat to Telecalling & many more.
          </p>
        </div>
      </div>
    </div>


    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-amber-700">
                Light Kite Fly High
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Business Automation
              <br className="md:block" />
              On Auto Pilot{' '}
              <span className="inline-block text-amber-700">
                Mode in Business
              </span>
            </h2>
            <p className="text-lg text-gray-700 md:text-xl">
             <strong>Light Kite Fly High</strong> Model always help businesses to grow their higher revenue with few team members.
            </p>
          </div>
          <Link
            href="tel:+918383066031"
            aria-label=""
            className="inline-flex items-center text-lg font-semibold transition-colors duration-200 text-gray-900 hover:text-deep-purple-800"
          >
           Call Us Now
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <svg
            className="absolute w-full text-amber-700"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-gray-900"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
   


  </Layout>
)

export default IndexPage
