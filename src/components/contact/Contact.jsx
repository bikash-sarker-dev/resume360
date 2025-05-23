import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import helpDesk from '../../assets/animation/contactUs/helpDesk.json'


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a4d97a92-ad16-4777-9d10-5aeafc49777b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
  <div>
<section id="contact" className="text-r-info grid grid-cols-1 md:grid-cols-2 gap-10 rounded-lg shadow-lg pb-5"> 
       <div className="flex justify-center items-center h-full">
         <Lottie animationData={helpDesk}></Lottie>
       </div>
       <div className="flex flex-col justify-center items-center w-full">
         <form
           className="mt-6 grid grid-cols-1 gap-6 max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 h-full w-full"
           onSubmit={onSubmit}
         >
             <motion.h3
           className="text-4xl font-bold text-center mb-6 bg-white"
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
           Contact Us
         </motion.h3>

           <motion.input
             type="text"
             name="name"
             placeholder="Your Name"
             className="input input-bordered w-full p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
             required
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
           />
           <motion.input
             type="email"
             name="email"
             placeholder="Your Email"
             className="input input-bordered w-full p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
             required
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           />
             <motion.input
             type="text"
             name="Location"
             placeholder="Your Location"
             className="input input-bordered w-full p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
             required
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
           />
           <motion.textarea
             name="message"
             placeholder="Your Message"
             className="textarea textarea-bordered w-full p-3 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
             rows="4"
             required
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           ></motion.textarea>
           <motion.button
             type="submit"
             className="btn  w-full p-3 rounded-md bg-r-accent text-r-infohover:text-white focus:ring-white focus:ring-r-hover"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2 }}
           >
             Send Message
           </motion.button>
         </form>
         {result && <p className="mt-4 text-center text-xl font-semibold">{result}</p>}
       </div>
     </section>
        </div>

     
    );
  };
  

export default Contact;