// "use client";
// /* eslint-disable react/no-unescaped-entities */

// import React, { useState } from "react";
// import Link from "next/link";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import {
//   IoCallOutline,
//   IoMailOutline,
//   IoLocationOutline,
// } from "react-icons/io5";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaLinkedin,
// } from "react-icons/fa";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     countryCode: "+91",
//     contact: "",
//     service: "Web Development",
//     requirement: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [contactError, setContactError] = useState("");

//   // Email validation
//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, email: value }));

//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setEmailError(regex.test(value) ? "" : "Please enter a valid email");
//   };

//   // Contact: only digits, max 10
//   const handleContactChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "").slice(0, 10);
//     setFormData((prev) => ({ ...prev, contact: value }));

//     if (value.length !== 10) {
//       setContactError("Contact number must be exactly 10 digits");
//     } else {
//       setContactError("");
//     }
//   };

//   // Generic input handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Final validation
//     if (emailError || contactError || formData.contact.length !== 10) {
//       setMessage("Please fix the errors above before submitting.");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage("Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           countryCode: "+91",
//           contact: "",
//           service: "Web Development",
//           requirement: "",
//         });
//         setEmailError("");
//         setContactError("");
//       } else {
//         setMessage(`Failed: ${data.error || "Something went wrong."}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative pt-20 pb-18 lg:pt-30 bg-black text-white px-6 overflow-hidden">
//       {/* Gradient Background */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         aria-hidden="true"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.35), transparent 40%)",
//         }}
//       />

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
//         {/* Header Section */}
//         <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-snug">
//             Let's <span className="text-cyan-400">Transform </span><br /> Your{" "}
//             <span className="text-cyan-400">Vision </span>into Reality
//           </h1>
//           <p className="text-gray-300">
//             We understand your idea and what it means <br className="block lg:hidden"/> to you. To make it
//             a reality, <br className="lg:block hidden"/>we&apos;ll be happy to help you.
//           </p>
//           <p className="text-gray-300">
//             Fill in the form and let our team send a <br className="block lg:hidden"/>
//             quotation that will include plans, <br />
//             strategies and technologies with a price like no other in the
//             market.
//           </p>
//         </div>

//         {/* Form Section */}
//         <div className="lg:w-1/2">
//           <div className="bg-cyan-400/80 rounded-xl p-6 sm:p-8 shadow-lg text-black">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name + Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
//                 />
//                 <div className="flex flex-col">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Work Email"
//                     value={formData.email}
//                     onChange={handleEmailChange}
//                     required
//                     className={`p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none ${
//                       emailError ? "border-red-500 border" : ""
//                     }`}
//                   />
//                   {emailError && (
//                     <span className="text-red-500 text-sm mt-1">{emailError}</span>
//                   )}
//                 </div>
//               </div>

//               {/* Country Code + Contact */}
//               <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//                 {/* Country Code with PhoneInput */}
//                 <div>
//                   <PhoneInput
//                     country="in"
//                     value={formData.countryCode}
//                     onChange={(code) =>
//                       setFormData((prev) => ({ ...prev, countryCode: `+${code}` }))
//                     }
//                     inputProps={{ name: "countryCode", required: true }}
//                     enableSearch
//                     countryCodeEditable={false}
//                     containerStyle={{ width: "100%" }}
//                     buttonStyle={{
//                       backgroundColor: "#1F2937",
//                       border: "1px solid #374151",
//                       borderRight: "none",
//                       borderRadius: "0.25rem 0 0 0.25rem",
//                       padding: "0 10px",
//                     }}
//                     inputStyle={{
//                       width: "100%",
//                       height: "48px",
//                       border: "1px solid #374151",
//                       borderRadius: "0.25rem",
//                       paddingLeft: "65px",
//                       fontSize: "16px",
//                       backgroundColor: "#1F2937",
//                       color: "#fff",
//                     }}
//                     dropdownStyle={{ color: "#000" }}
//                   />
//                 </div>

//                 {/* Contact Number */}
//                 <div className="flex flex-col">
//                   <input
//                     type="tel"
//                     name="contact"
//                     placeholder="Contact or WhatsApp Number"
//                     value={formData.contact}
//                     onChange={handleContactChange}
//                     required
//                     className={`w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none ${
//                       contactError ? "border-red-500 border" : ""
//                     }`}
//                   />
//                   {contactError && (
//                     <span className="text-red-500 text-sm mt-1">{contactError}</span>
//                   )}
//                 </div>
//               </div>

//               {/* Service Selection */}
//               <div>
//                 <label className="block mb-1 text-sm text-black font-medium">
//                   Service you're interested in
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 outline-none"
//                 >
//                   <option>Web Development</option>
//                   <option>App Development</option>
//                   <option>Software Development</option>
//                   <option>UI/UX Design</option>
//                   <option>Digital Marketing</option>
//                   <option>Graphic Design</option>
//                   <option>Research and Analytics</option>
//                 </select>
//               </div>

//               {/* Requirement */}
//               <div>
//                 <textarea
//                   name="requirement"
//                   rows="4"
//                   value={formData.requirement}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
//                   placeholder="Briefly discuss your requirement"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex items-center justify-center">
//                 <button
//                   type="submit"
//                   disabled={loading || emailError || contactError || formData.contact.length !== 10}
//                   className="py-2 px-8 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed border border-white/40"
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>

//               {/* Response Message */}
//               {message && (
//                 <p className="text-center text-sm mt-4 text-black font-medium">
//                   {message}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Contact Info & Map */}
//       <div className="grid lg:grid-cols-2 gap-8 relative z-10 mt-16 max-w-7xl mx-auto">
//         <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col gap-3 h-full hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
//           {/* Glow Effects */}
//           <div
//             className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
//             style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
//           />
//           <div
//             className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40"
//             style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
//           />

//           <div className="relative z-10">
//             <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
//               Contact Information
//             </h3>
//             <p className="text-gray-300 font-bold">Cyberspace Works</p>

//             <p className="text-gray-400 flex items-center gap-2 mt-3">
//               <IoCallOutline />
//               <a href="tel:+917980715765" className="hover:underline">
//                 +91 7980715765
//               </a>
//             </p>

//             <p className="text-gray-400 flex items-center gap-2 mt-3">
//               <IoMailOutline />
//               <a
//                 href="mailto:cyberspaceworksofficial@gmail.com"
//                 className="hover:underline"
//               >
//                 cyberspaceworksofficial@gmail.com
//               </a>
//             </p>

//             <p className="text-gray-400 flex items-center gap-2 mt-3">
//               <IoLocationOutline className="mt-1 size-5" />
//               <a
//                 href="https://maps.app.goo.gl/Zhr74TSE7FecFKFm7"
//                 target="_blank"
//                 className="hover:underline leading-snug"
//               >
//                 Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
//               </a>
//             </p>

//             <div className="flex justify-start space-x-4 mt-4 text-cyan-400 text-lg sm:text-xl">
//               <a href="https://www.facebook.com/profile.php?id=100086774724799" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
//               </a>
//               <a href="https://www.instagram.com/cyberspaceworks" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className="cursor-pointer hover:scale-110 transition" />
//               </a>
//               <a href="https://wa.me/917980715765" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
//               </a>
//               <a href="https://maps.app.goo.gl/Zhr74TSE7FecFKFm7" target="_blank" rel="noopener noreferrer">
//                 <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
//               </a>
//               <a href="https://www.linkedin.com/company/cyberspace-works" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-full">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.5100779555523!2d88.33852777576645!3d22.64347642643196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dd56c959339%3A0x59f91e11a807e487!2sCyberspace%20Works%20-%20Website%2C%20Software%20and%20App%20Developer%20in%20Howrah%2C%20Kolkata!5e1!3m2!1sen!2sin!4v1760195925843!5m2!1sen!2sin"
//             width="100%"
//             height="100%"
//             style={{ border: 0, minHeight: "450px" }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    service: "AI & Intelligent Systems", // ✅ Updated default to AI
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, email: value }));
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Please enter a valid email");
  };

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, contact: value }));
    if (value.length !== 10) {
      setContactError("Contact number must be exactly 10 digits");
    } else {
      setContactError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || contactError || formData.contact.length !== 10) {
      setMessage("Please fix the errors above before submitting.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          contact: "",
          service: "AI & Intelligent Systems", // ✅ Reset to AI too
          requirement: "",
        });
        setEmailError("");
        setContactError("");
      } else {
        setMessage(`Failed: ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-20 pb-18 lg:pt-30 bg-black text-white px-6 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(14,186,199,0.35), transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Header Section */}
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            Let's <span className="text-cyan-400">Transform </span><br /> Your{" "}
            <span className="text-cyan-400">Vision </span>into Reality
          </h1>
          <p className="text-gray-300">
            We understand your idea and what it means <br className="block lg:hidden"/> to you. To make it
            a reality, <br className="lg:block hidden"/>we&apos;ll be happy to help you.
          </p>
          <p className="text-gray-300">
            Fill in the form and let our team send a <br className="block lg:hidden"/>
            quotation that will include plans, <br />
            strategies and technologies with a price like no other in the
            market.
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <div className="bg-cyan-400/80 rounded-xl p-6 sm:p-8 shadow-lg text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    required
                    className={`p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none ${
                      emailError ? "border-red-500 border" : ""
                    }`}
                  />
                  {emailError && (
                    <span className="text-red-500 text-sm mt-1">{emailError}</span>
                  )}
                </div>
              </div>

              {/* Country Code + Contact */}
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <PhoneInput
                    country="in"
                    value={formData.countryCode}
                    onChange={(code) =>
                      setFormData((prev) => ({ ...prev, countryCode: `+${code}` }))
                    }
                    inputProps={{ name: "countryCode", required: true }}
                    enableSearch
                    countryCodeEditable={false}
                    containerStyle={{ width: "100%" }}
                    buttonStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRight: "none",
                      borderRadius: "0.25rem 0 0 0.25rem",
                      padding: "0 10px",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "48px",
                      border: "1px solid #374151",
                      borderRadius: "0.25rem",
                      paddingLeft: "65px",
                      fontSize: "16px",
                      backgroundColor: "#1F2937",
                      color: "#fff",
                    }}
                    dropdownStyle={{ color: "#000" }}
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact or WhatsApp Number"
                    value={formData.contact}
                    onChange={handleContactChange}
                    required
                    className={`w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none ${
                      contactError ? "border-red-500 border" : ""
                    }`}
                  />
                  {contactError && (
                    <span className="text-red-500 text-sm mt-1">{contactError}</span>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block mb-1 text-sm text-black font-medium">
                  Service you're interested in
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  {/* ✅ AI & Intelligent Systems added as first option */}
                  <option>AI & Intelligent Systems</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>Software Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                  <option>Research and Analytics</option>
                </select>
              </div>

              {/* Requirement */}
              <div>
                <textarea
                  name="requirement"
                  rows="4"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Briefly discuss your requirement"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading || emailError || contactError || formData.contact.length !== 10}
                  className="py-2 px-8 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed border border-white/40"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Response Message */}
              {message && (
                <p className="text-center text-sm mt-4 text-black font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 mt-16 max-w-7xl mx-auto">
        <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col gap-3 h-full hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
          <div
            className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
              Contact Information
            </h3>
            <p className="text-gray-300 font-bold">Cyberspace Works</p>

            <p className="text-gray-400 flex items-center gap-2 mt-3">
              <IoCallOutline />
              <a href="tel:+917980715765" className="hover:underline">
                +91 7980715765
              </a>
            </p>

            <p className="text-gray-400 flex items-center gap-2 mt-3">
              <IoMailOutline />
              <a href="mailto:cyberspaceworksofficial@gmail.com" className="hover:underline">
                cyberspaceworksofficial@gmail.com
              </a>
            </p>

            <p className="text-gray-400 flex items-center gap-2 mt-3">
              <IoLocationOutline className="mt-1 size-5" />
              <a href="https://maps.app.goo.gl/Zhr74TSE7FecFKFm7" target="_blank" className="hover:underline leading-snug">
                Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
              </a>
            </p>

            <div className="flex justify-start space-x-4 mt-4 text-cyan-400 text-lg sm:text-xl">
              <a href="https://www.facebook.com/profile.php?id=100086774724799" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://www.instagram.com/cyberspaceworks" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://wa.me/917980715765" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://maps.app.goo.gl/Zhr74TSE7FecFKFm7" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/company/cyberspace-works" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.5100779555523!2d88.33852777576645!3d22.64347642643196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dd56c959339%3A0x59f91e11a807e487!2sCyberspace%20Works%20-%20Website%2C%20Software%20and%20App%20Developer%20in%20Howrah%2C%20Kolkata!5e1!3m2!1sen!2sin!4v1760195925843!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;