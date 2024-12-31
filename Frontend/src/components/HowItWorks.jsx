// HowItWorks.js
import React from 'react';
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
   <>
     <div className="HowItWorks">
     <div className="HowItWorksContent">
            <h1>How it works?</h1>
            <hr/>
            <p>Our platform simplifies messaging for businesses. You can create an account,
            <br/> connect securely to WhatsApp, upload data, craft personalized messages, and automate message delivery. 
            <br/>
            Join us to streamline your messaging workflow!</p>
            <button>Know More</button>
        </div>

      <div className="HowItWorksCard">
           <div className="HowItWorksSteps">
            <div className="HowItWorksStep">
              <div className="HowItWorksStepNumber">1</div>
              <div className="HowItWorksStepText">Open Account</div>
            </div>
            <div className="HowItWorksStep">
              <div className="HowItWorksStepNumber">2</div>
              <div className="HowItWorksStepText">Login to WhatsApp</div>
            </div>
            <div className="HowItWorksStep">
              <div className="HowItWorksStepNumber">3</div>
              <div className="HowItWorksStepText">Add Excel Sheet</div>
            </div>
            <div className="HowItWorksStep">
              <div className="HowItWorksStepNumber">4</div>
              <div className="HowItWorksStepText">Make Customized Message</div>
            </div>
            <div className="HowItWorksStep">
              <div className="HowItWorksStepNumber">5</div>
              <div className="HowItWorksStepText">Send Message Automatically</div>
            </div>
          </div>
        </div>
    </div>
   </>
  );
}

export default HowItWorks;
