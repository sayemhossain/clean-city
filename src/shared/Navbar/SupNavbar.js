import {
  faEnvelope,
  faFax,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import facebook from "../../img/social-media/facebook-icon.png";
import instagram from "../../img/social-media/instagram-icon.png";
import linkedin from "../../img/social-media/linkedin-icon.png";
import twitter from "../../img/social-media/twitter-icon.png";
import whatsapp from "../../img/social-media/whatsapp-icon.png";

const SupNavbar = () => {
  return (
    <div className="md:px-16 py-2 text-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faLocation}
            ></FontAwesomeIcon>
            <p>Loctaion : envanto hq 24 fifth, Australia</p>
          </div>
          <div className="flex gap-1 items-center border-l-2 pl-2">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faPhone}
            ></FontAwesomeIcon>
            <p>Call Us : +18 - 2222 - 3555</p>
          </div>
          <div className="flex gap-1 items-center border-l-2 pl-2">
            <FontAwesomeIcon
              className="text-secondary"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <p>Mail : cleancity@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-8 bg-gray-100 p-0.5 rounded-full">
            <img
              className="hover:scale-125 duration-300 hover:cursor-pointer"
              src={facebook}
              alt=""
            />
          </div>
          <div className="w-8 bg-gray-100 p-0.5 rounded-full">
            <img
              className="hover:scale-125 duration-300 hover:cursor-pointer"
              src={instagram}
              alt=""
            />
          </div>
          <div className="w-8 bg-gray-100 p-0.5 rounded-full">
            <img
              className="hover:scale-125 duration-300 hover:cursor-pointer"
              src={whatsapp}
              alt=""
            />
          </div>
          <div className="w-8 bg-gray-100 p-0.5 rounded-full">
            <img
              className="hover:scale-125 duration-300 hover:cursor-pointer"
              src={twitter}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupNavbar;
