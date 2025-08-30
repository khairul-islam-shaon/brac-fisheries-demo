"use client";
import Header from "@/components/ui/Header";
import { useSelector } from "react-redux";
import { BASE_URL } from "@/config/config";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, "Invalid phone number"),
  message: yup.string().required("Message is required"),
});



const ContactUsContent = ({ contactData }) => {
  const { Language } = useSelector((state) => state);
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
 } = useForm({
   resolver: yupResolver(schema),
 });

   const [error, setError] = useState();
  const onSubmit = (data) => {
    const url = `${BASE_URL()}/api/frontend/contact-forms`;


    axios
      .post(url, data)
      .then(function (response) {
        reset();
        toast.success("Submitted");
      })
      .catch(function (error) {
        setError(error.response?.data.data);
      });
  }
  return (
    <section className=" containar section-gap bg-gray-50 !py-5">
      <Header>
        {Language.data === "EN"
          ? contactData?.component?.title
          : contactData?.component?.component_languages[0]?.title}
      </Header>
      <div className="contact-us mt-8 ">
        <div className="contact-info">
          {contactData?.details.map((c, index) => {
            return (
              <div key={index} className="info">
                {/*<img src={location.src} alt="icon"/>*/}
                <img
                  src={BASE_URL() + c?.files[0]?.media_content?.original_url}
                  alt="icon"
                  className="object-contain"
                />
                <div className="text-white">
                  <p className="text_base">
                    {Language.data === "EN"
                      ? c.title
                      : c.master_crud_languages[0]?.title}
                  </p>
                  <p className="text_xl">
                    {Language.data === "EN"
                      ? c.subtitle
                      : c.master_crud_languages[0]?.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              {...register("name")}
              required
              className="pt-3 pb-2 block w-full px-0 mt-5 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />

            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="name"
              placeholder="example@mail.com"
              {...register("email")}
              required
              className="pt-3 pb-2 block w-full px-0 mt-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="input-group">
            <label>Phone</label>
            <input
              type="text"
              name="name"
              placeholder="+8801700000"
              {...register("phone_number")}
              required
              className="pt-3 pb-2 block w-full px-0 mt-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />

            {errors.phone_number && (
              <span className="text-xs text-red-600">
                {errors.phone_number.message}
              </span>
            )}
          </div>

          <div className="input-group">
            <label>Company</label>
            <input
              type="text"
              name="name"
              placeholder="yourcompany.com"
              {...register("address")}
              required
              className="pt-3 pb-2 block w-full px-0 mt-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.address && (
              <span className="text-xs text-red-600">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="textarea-group">
            <label>Message</label>
            <textarea
              type="text"
              name="name"
              placeholder="Briefly tell us about your project and your current goals. How can we help you?"
              {...register("message")}
              required
              className="pt-3 pb-2 block w-full px-0 mt-5 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            {errors.address && (
              <span className="text-xs text-red-600">
                {errors.message.message}
              </span>
            )}
          </div>

          <button type="submit" className="button-primary hover:bg-[#1C486B] hover:text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsContent;
