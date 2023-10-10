import React from 'react'
import Layout from '../components/Layout/Layout'

const Aboutus = () => {
  return (
    <Layout title={"About Us - QuickT Services"}>
      <div className='row contactus'>
        <div className='flex w-full md:w-1/2'>
          <img 
            src='/images/about.jpeg'
            alt='contactus'
            style={{ width: "100%" }}
          />
        </div>
        <div className='flex w-1/3 md:w-1/4 float-right'>
          <p className='text-justify mt-2 '>
          QuickTservice is a subsidiary of the famous and prominent Quick Touch 
          Ventures, known for her cheap, affordable and legit services. QuickTservice is 
          the Nigeria best option whenever you think of easy and instant online mobile 
          recharge. Our website grants you the pliability to recharge your mobile phone 
          numbers with Data and Airtime of all networks, pay for internet subscriptions, 
          TV subscriptions and make payment for PHCN (prepaid and postpaid), 
          anywhere and anytime, whether you are at home, in the office, on the road, in 
          traffic, at the mall or on holiday, we got you covered with our very affordable 
          services.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Aboutus