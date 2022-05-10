import * as React from "react"


import { InlineWidget } from "react-calendly";

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  
  <Layout>
     <Seo title="Book Meeting With eCommerce Expert|eCommerce Business Growth" 
    description="Discuss your goals with expert to know better blueprints for your ecommerce business.Book 15 Minute Meeting With Expert Just in Few Seconds."
    keywords="meeting with xtreme workplace expert , xtreme workplace eCommerce web Developer, xtreme workplace, e-commerce web design companies,
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
    image="../images/consult.png"/>

   
   <div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Book Now</span>
    <span class="font-semibold mr-2 text-left flex-auto hover:text-white">Book Meeting With Expert For PST Timing </span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
    <div className="App">
      <InlineWidget url="https://calendly.com/xtremeworkplace_in" />
    </div>
   

   


  </Layout>
)

export default IndexPage
