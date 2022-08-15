import React from "react";
import contactImg from "../../../img/contactImg.png";
const HomeContact = () => {
  return (
    <div className="md:px-28 my-10">
      <h1 className="text-3xl font-bold text-center md:my-16 ">Contact</h1>
      <div className="flex gap-5">
        <div>
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
                <button className="btn w-full mt-5 btn-secondary text-white">
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
