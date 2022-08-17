import React from "react";
import contactImg from "../../../img/contactImg.png";
import {
  faE,
  faEnvelopeOpen,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeContact = () => {
  return (
    <div className="md:px-28 my-10">
      <h1 className="text-3xl font-bold text-center md:mt-10 md:mb-10">
        Contact
      </h1>
      <div className="pb-10 mt-10 md:mt-0 px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-primary p-7 rounded-lg shadow-md">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center ring-2 ring-gray-200">
                <FontAwesomeIcon
                  className="text-3xl"
                  icon={faEnvelopeOpen}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email Address</h3>
                <p className="text-sm">Send Email</p>
              </div>
            </div>
            <div className="mt-3">
              <p>wastii@themetechmount.com</p>
              <p className="mt-1">wastii@themetechmount.com</p>
            </div>
          </div>
          <div className="bg-[#faffcc] p-7 rounded-lg shadow-md">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center ring-2 ring-gray-200">
                <FontAwesomeIcon
                  className="text-3xl"
                  icon={faPhone}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone Number</h3>
                <p className="text-sm">Call Us Now</p>
              </div>
            </div>
            <div className="mt-3">
              <p>+1-202-555-0172</p>
              <p className="mt-1">+1-202-457-9987</p>
            </div>
          </div>
          <div className="bg-[#F0FFFC] p-7 rounded-lg shadow-md">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center ring-2 ring-gray-300">
                <FontAwesomeIcon
                  className="text-3xl"
                  icon={faLocationDot}
                ></FontAwesomeIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-sm">Find Us Here</p>
              </div>
            </div>
            <div className="mt-3">
              <p>889 Newcastle Dr. Depew, NY 14043</p>
              <p className="mt-1">8576 South St. Florence, SC 29501</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:flex gap-5 px-5">
        <div className="bg-[#F9F8FE] rounded-lg shadow-md">
          <img className="md:w-[550px]" src={contactImg} alt="" />
        </div>
        <div className="bg-[#F9F8FE] flex-grow rounded-lg shadow-md">
          <form action="">
            <div className="p-7">
              <h3 className="text-2xl text-gray-600 font-bold mb-5">
                Send Your Message
              </h3>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Phone here"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Inquiry"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Your Subject"
                  class="input w-full input-bordered focus:outline-secondary"
                />
              </div>
              <div className="mt-5">
                <textarea
                  class="textarea w-full md:h-28 input-bordered focus:outline-secondary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button className="btn w-full mt-5 rounded-none btn-secondary text-white">
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
