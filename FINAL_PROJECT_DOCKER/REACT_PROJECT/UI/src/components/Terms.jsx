import React from 'react';

const Terms = () => {
  return (
    <div className="  ">
      <div className=" bg-white p-8 rounded-lg shadow-xl">
        <p className="text-4xl font-serif font-bold text-center mb-8">
          Terms and Conditions
        </p>
        
        <section className="">
          <p className="text-2xl font-serif font-semibold text-center text-gray-800 leading-relaxed">
            These Terms and Conditions govern your use of the TBN service and website. 
            By visiting the TBN website, you accept, and agree to, the content of these 
            Terms and Conditions. We reserve the right to change the Terms and Conditions 
            at any time and it is your responsibility to check regularly before ordering. 
            This does not affect your statutory rights.
          </p>
        </section>

        <section className="">
          <p className="text-3xl font-serif font-bold text-left  underline mb-4">
            Cancellation
          </p>
          <ul className="text-2xl font-serif text-left text-gray-800">
            <li className="list-disc">Cancel the booking</li>
            <li className="list-disc">Cancel the Message</li>
            <li className="list-disc">Re-Booking after cancellation</li>
            <li className="list-disc">Remove Account</li>
          </ul>
        </section>
        
        <section className="text-center mt-12">
        </section>
      </div>
    </div>
  );
};

export default Terms;
