import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Error | Explore " 
    description="Oh No! error, Oops! That page can’t be found.The page you are looking for it maybe deleted "
    keywords="404 error xtreme workplace, 404 error, eCommerce business, ecommerce website, ecommerce store,e-commerce web design companies,
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
    image="../images/404.png"/>
    
    
   
    <section className="bg-purple-900 py-[120px] relative z-10">
   <div className="container">
      <div className="flex -mx-4">
         <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
               <h2
                  className="
                  font-bold
                  text-white
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  "
                  >
                  404
               </h2>
               <h4
                  className="text-white font-semibold text-[22px] leading-tight mb-3"
                  >
                  Oops! That page can’t be found
               </h4>
               <p className="text-lg text-white mb-8">
                  The page you are looking for it maybe deleted
               </p>
               <Link to="/"
                  className="
                  text-base
                  font-semibold
                  text-white
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  hover:bg-white hover:text-gray-900
                  transition
                  "
                  >
               Go To Home
               </Link>
            </div>
         </div>
      </div>
   </div>
   <div
      className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
      >
      <div
         className="w-1/3 h-full bg-gradient-to-t from-[#541690] to-[#FF4949]"
         ></div>
      <div className="w-1/3 h-full flex">
         <div
            className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FF8D29]
            to-[#FFCD38]
            "
            ></div>
         <div
            className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FF8D29]
            to-[#FFCD38]
            "
            ></div>
      </div>
      <div
         className="w-1/3 h-full bg-gradient-to-b from-[#FF4949] to-[#541690]"
         ></div>
   </div>
</section>

  </Layout>
)

export default NotFoundPage
