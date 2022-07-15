import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
    <Seo title="FAQ | Learn more about our services" 
    description="Turn more leads into revenue with a high-performance, dedicated team—built for ambitious e-commerce business owners."
    keywords="xtreme workplace FAQ, FAQ, Learn more about services, xtreme workplace app development, Digital marketing agency in delhi, digital marketing near me, digital marketing agency in noida, Marketing agecny near me, marketing agency in delhi, Seo, Seo agency in delhi, seo agency for amazon sellers, seo agency for amazon business owners, "
    image="../images/social1.jpg"/>
   
   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <Link to="/"><p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-amber-700 uppercase rounded-full bg-gray-900">
              Book Services Now
            </p></Link>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">FAQ | </span>
            </span>{' '}
            Learn more about our <strong>Services & Pricing</strong>
          </h2>
         
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              How Does Xtreme Workplace Function?
              </p>
              <p className="text-gray-700">
              You just have to follow only 3 steps to grow your business.<br/ >
1. Select our package<br/ >
2. Send our expert your 30-day work checklist.<br/ >
3.  Monitors and downloads all work.<br/ >
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Will you charge any other costs?
              </p>
              <p className="text-gray-700">
              No, we will charge only the package cost. If any other platform or cloud software is used during the project, then it will be paid for by the client.
               
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              How can I track my work?
              </p>
              <p className="text-gray-700">
              Our expert team will provide you with a project management panel where you can track your daily work status. Our expert team will complete your task as soon as possible.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xl font-medium">
              How will ads help to grow sales?
              </p>
              <p className="text-gray-700">
              
              We will run an ad campaign based on your requirements only. Typically, we run 2 types of ads for our clients: traffic ads and sales ads.
<br />Note: The client is responsible for the cost of the advertising campaign.



              </p>
            </div>

            <div>
              <p className="mb-4 text-xl font-medium">
              Do you offer custom services?
              </p>
              <p className="text-gray-700">
              
              Yes, we offer custom services based on client requirements.


              </p>
            </div>




          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              How can I use my credits?
              </p>
              <p className="text-gray-700">
              We will give you credits based on our packages valid for 30 days. You can avail all the credits in 30 days. After that, you have to renew your credits for extra work and additional services.
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Are there any custom plans available?
              </p>
              <p className="text-gray-700">
              Yes, we have custom plans as per the needs of our clients. Send us your requirements at info@xtremeworkplace.in.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              How much do I have to pay for other cloud software and tools?
              </p>
              <p className="text-gray-700">
              For beginners, we suggest using free software and tools in the starting phase, but if you are a pro-business owner, then we only recommend paid tools. 
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Can you change pricing during the project duration?
              </p>
              <p className="text-gray-700">
              No, we never change pricing during the project duration, but if you require other services not mentioned in your package, then only you have to pay an additional cost.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xl font-medium">
              What does the sales funnel mean and how does it work for me?
              </p>
              <p className="text-gray-700">
              
              The Sales Funnel will help you automate your sales process. Your maximum sales issues will be handled by automation processes like customer follow-up emails, marketing emails and many more.


              </p>
            </div>




          </div>
        </div>
      </div>
    </div>





  </Layout>
)

export default IndexPage
