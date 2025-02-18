import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";

export const Footer = ({ data, icon, rawData }) => {

  return (
    <footer className={`p-8 lg:px-32`}>
      <div className="flex justify-between items-center gap-6 flex-wrap">
        <div className="grid gap-2">
          {
            <div className="text-black ">
              <h3 className="text-lg text-black font-bold">Office Hours</h3>
            </div>
          }
          {data.officeHours && data.officeHours.mondayAndTuesday && (
            <div className="text-black">
              {data.officeHours.mondayAndTuesday}
            </div>
          )}

          {data.officeHours && data.officeHours.friday && (
            <div className="text-black">
              {data.officeHours.friday}
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {
            <div className="text-black items-centeropacity-50">
              <h3 className="text-lg font-bold">Location</h3>
            </div>
          }
          {data.location && data.location.location && (
            <div className="text-black">
              {data.location.location}
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {
            <div className="text-black">
              <h3 className="text-lg font-bold">Contact</h3>
            </div>
          }
          {data.contact && data.contact.email && (
            <div className="text-black ">
              {data.contact.email}
            </div>
          )}

          {data.contact && data.contact.phone && (
            <div className="text-black  ">
              {data.contact.phone}
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-center text-gray-500">©2023 The Dock Ministries. All rights reserved.</p>
    </footer>
  );
};
