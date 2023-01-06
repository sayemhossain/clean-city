import React from "react";
import contactImg from "../../../img/contactImg.png";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const HomeContact = () => {
  const handleContact = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const location = e.target.location.value;
    const des = e.target.des.value;

    const contactData = {
      name,
      email,
      phone,
      subject,
      location,
      des,
    };
    fetch(`http://localhost:5000/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your Message is send..!");
      });
    e.target.reset();
  };
  return (
    <div className="md:px-28 my-10 max-w-[1440px] mx-auto">
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
              <p>ehawkar@gmail.com</p>
              <p className="mt-1">ehawkar.info@gamil.com</p>
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
              <p>+880 1766069458</p>
              <p className="mt-1">+880 1776507871</p>
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
              <p>Dhanmondi-32, Dhaka-1230</p>
              <p className="mt-1">Badda, Dhaka-1212</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:flex gap-5 px-5">
        <div className="bg-[#F9F8FE] rounded-lg shadow-md">
          <img className="md:w-[550px]" src={contactImg} alt="" />
        </div>
        <div className="bg-[#F9F8FE] flex-grow rounded-lg shadow-md">
          <form action="" onSubmit={handleContact}>
            <div className="p-7">
              <h3 className="text-2xl text-gray-600 font-bold mb-5">
                Send Your Message
              </h3>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone here"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    class="input w-full max-w-xs input-bordered focus:outline-secondary"
                  />
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  class="input w-full input-bordered focus:outline-secondary"
                />
              </div>
              <div className="mt-5">
                <textarea
                  name="des"
                  class="textarea w-full md:h-28 input-bordered focus:outline-secondary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn w-full mt-5 rounded-none btn-secondary text-white"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomeContact;
