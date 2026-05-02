// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ContactSection = () => {
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

//   // Scroll-triggered animation
//   const { ref: formRef, inView: formInView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//     rootMargin: "0px 0px -100px 0px",
//   });

//   const formVariants = {
//     hidden: { opacity: 0, x: 200 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         mass: 1,
//       },
//     },
//   };

//   return (
//     <section className="relative py-20 bg-black text-white px-6 overflow-hidden">
//       {/* Gradient Background */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         aria-hidden="true"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.45), transparent 40%)",
//         }}
//       />

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
//         {/* Header Section - Fade In */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={formInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="lg:w-1/2 space-y-4 text-center lg:text-left"
//         >
//           <h1 className="text-4xl font-bold mb-4 leading-snug">
//             Let&apos;s <span className="text-cyan-400">Transform </span><br /> Your{" "}
//             <span className="text-cyan-400">Vision</span> into Reality
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
//           <div className="mt-6">
//             <Link
//               href="/contact-us"
//               className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </motion.div>

//         {/* Form Section - Slides in from Right */}
//         <motion.div
//           ref={formRef}
//           variants={formVariants}
//           initial="hidden"
//           animate={formInView ? "visible" : "hidden"}
//           className="lg:w-1/2"
//         >
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
//                 <div>
//                   <PhoneInput
//                     country="in"
//                     value={formData.countryCode}
//                     onChange={(code) =>
//                       setFormData((prev) => ({ ...prev, countryCode: `+${code}` }))
//                     }
//                     inputProps={{ name: "countryCode", required: true }}
//                     enableSearch
//                     countryCodeEditable
//                     containerStyle={{ width: "100%" }}
//                     buttonStyle={{
//                       backgroundColor: "#1F2937",
//                       border: "1px solid #374151",
//                       borderRight: "none",
//                       borderRadius: "0.25rem",
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
//                   Service you&apos;re interested in
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
//                   disabled={loading || emailError || contactError}
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
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    service: "AI & Intelligent Systems", // ✅ Default is now AI
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
          service: "AI & Intelligent Systems", // ✅ Reset to AI
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

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const formVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
    },
  };

  return (
    <section className="relative py-20 bg-black text-white px-6 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        // style={{
        //   background:
        //     "radial-gradient(circle at 60% 50%, rgba(14,186,199,0.45), transparent 40%)",
        // }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-1/2 space-y-4 text-center lg:text-left"
        >
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Let&apos;s <span className="text-cyan-400">Transform </span><br /> Your{" "}
            <span className="text-cyan-400">Vision</span> into Reality
          </h1>
          <p className="text-gray-300">
            We understand your idea and what it means <br className="block lg:hidden"/> to you. To make it
            a reality, <br className="lg:block hidden"/>we&apos;ll be happy to help you.
          </p>
          <p className="text-gray-300">
            Fill in the form and let our team send a <br className="block lg:hidden"/>
            quotation that will include plans, <br />
            strategies and technologies with a price like no other in the market.
          </p>
          <div className="mt-6">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          ref={formRef}
          variants={formVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          className="lg:w-1/2"
        >
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
                    countryCodeEditable
                    containerStyle={{ width: "100%" }}
                    buttonStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRight: "none",
                      borderRadius: "0.25rem",
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
                  Service you&apos;re interested in
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  {/* ✅ AI & Intelligent Systems is now first */}
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
                  disabled={loading || emailError || contactError}
                  className="py-2 px-8 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-full duration-300 cursor-pointer shadow-lg shadow-black/50 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed border border-white/40"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {message && (
                <p className="text-center text-sm mt-4 text-black font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;