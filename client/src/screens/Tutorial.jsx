import {
  Space,
  Typography,
  Collapse
} from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Tutorial = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
  <>

  <Space direction="vertical table">

    <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        Frequently Asked Questions
      </Typography.Title>

    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="Can I import my existing data into Adoptimize?" key="1">
        <p>Yes! When you first create your account, we will have a complimentary onboarding session to help you through this process. If you are unable to have an onboarding session with us, fret not as our application will be well guided. You will be prompted to import a CSV file with your existing shelter data, and we will process this data and add it to your Adoptimize account</p>
      </Panel>
    </Collapse>

    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="Can I integrate this application with my shelter\'s existing website?" key="1">
        <p>Absolutely! We will prove an API & detailed documentation to integration the Adoptimize Pet Listing page onto your shelter website itself. We are able to help you set that up if requested too.</p>
      </Panel>
    </Collapse>

     <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold
">
      <Panel header="Can I recover deleted data from the application?" key="1">
        <p>Yes! we store all deleted records under the deleted tab and you can recover them within a week of deleting them.</p>
      </Panel>
    </Collapse>

    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="How does the digital contract signing work?" key="1">
        <p>Our application supports digital contract signing through a secure and user-friendly interface. Once an adopter's application has been approved, they will receive an email with a link to review and sign the adoption contract. The adopter can sign the contract electronically, and both parties will receive a copy of the signed document for their records.</p>
      </Panel>
    </Collapse>


     <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold
">
      <Panel header="How does the automated email and SMS feature work?" key="1">
        <p>After you approve any phase of adoption, we will do the work and contact the adopter through a templated email. For instance, if you have approved the pre-screening responses for an adoption application, the adopter will receive an email regarding the next step of adoption which may be scheduling a Home Check or Contract Signging. The emails will have embedded URl that guides the adopter to the next action they need to do. </p>
      </Panel>
    </Collapse>

    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="What type of payment methods are supported by Adoptimize?" key="1">
        <p>Currently we use Stripe to process payments and we allow adopters to make payment via VISA, Mastercard and AMEX. Our team is working hard to bring in more methods of payment to ensure a smooth experience for your adoption management.</p>
      </Panel>
    </Collapse>
  

    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="Is the Adoptimize Secure?" key="1">
        <p>Yes, security is a top priority for our platform. We employ industry-standard security measures, such as encryption and secure data storage, to protect the privacy and sensitive information of both shelters and adopters</p>
      </Panel>
    </Collapse>


    {/* <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="I have many staff with varying levels of authority in my shelter, can i create accounts for them myself?" key="1">
        <p>Yes! Under settings, you may create accounts for your staff from the shelter's main admin account. You can set varying levels of access for your staff</p>
      </Panel>
    </Collapse> */}


    <Collapse size = "large" className="font-nunito mb-4 bg-[#FDEDE1] font-semibold">
      <Panel header="Do you have a mobile app for Adoptimize?" key="1">
        <p>Currently we do not have a mobile app. Nonetheless, all pages are responsive and adopters will be able to access them via their mobile phones.</p>
      </Panel>
    </Collapse>

    </Space>



  </>
  );
};
export default Tutorial;