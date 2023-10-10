import React from 'react'
import Layout from '../components/Layout/Layout'

const Documentation = () => {
  return (
    <Layout title={"Documentation - QuickT Services"}>
     <div className="row contactus ">
        <div className="flex w-full md:w-1/2">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>Introduction</b>
          <br/>
          quicktservice.com API is a RESTful API that allows you to make data topup, airtime topup, cable subsription, electricity bills payment, etc.  
          </p>
          <br/>
          <p><b>Authentication</b>
          <br/>
          quicktservice.com API uses Basic Authentication Which should be passed as concatenated string as shown below.
          apikey:userid
          To get your API key and UserID you're required to Login 
          </p>
          <br/>
          <p><b>Support</b>
          <br/>
          Do ensure to notify us if there is any difficulty you face while integrating the API

          Note that all response are in JSON format.

          RESPONSE | BODY  
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Documentation