import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Form from '../Forms';




const ContactMe = () => {
  return (
    <section id="contact">
      <div className="bg-[#121212]  relative top-[66px]  h-auto w-full border-t-4 border-blue maxContainer m-auto ">
        <div className="grid md:grid-cols-2 grid-rows-1 w-full h-full ">
          <picture className="relative">
            <h3 className="uppercase font-bold  max-mobileUS:tracking-[10px]  tracking-[20px] absolute mx-auto right-0 left-0 top-1/2 text-orange text-2xl bg-no-repeat text-center">
              Contact
            </h3>
            <img
              className="object-fill w-full h-full object-center "
              src="/img/contact.gif"
              alt="contact-me"
            />
          </picture>

          <div className="space-y-4  p-5 h-full flex flex-col justify-center items-center bg-midnight-blue">
            <div className="contact-content">
              <PhoneIcon className="contact-icon" />
              <p className="contact-data">+55 (031) 98265-4558</p>
            </div>
            <div className="contact-content">
              <MapPinIcon className="contact-icon" />
              <p className="contact-data">antoniomarcos.amrrds@gmail.com</p>
            </div>
            <div className="contact-content">
              <EnvelopeIcon className="contact-icon" />
              <p className="contact-data">Belo horizonte</p>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
