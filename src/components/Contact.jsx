// import { CONTACT } from "../constants"
// import { motion } from "framer-motion"
// const Contact = () => {
//   return (
//     <div className="border-t border-stone-900 pb-20">
//         <motion.h2
//         whileInView={{opacity:1,y:0}}
//         initial={{opacity:1,y:-100}}
//         transition={{duration:0.5}} 
//         className="my-10 text-center text-7xl">Get In Touch</motion.h2>
//         <div className="text-center tracking-tighter">
//             <motion.p 
//             whileInView={{opacity:1,x:0}}
//             initial={{opacity:0,x:-100}}
//             transition={{duration:1}}
//             className="my-4">
//               {CONTACT.address}
//             </motion.p>
//             <motion.p
//             whileInView={{opacity:1,x:0}}
//             initial={{opacity:0,x:100}}
//             transition={{duration:1}}
//              className="my-4">
//               {CONTACT.phoneNo}
//             </motion.p>
//           <a href="#" className="border-b">{CONTACT.email}</a>
//         </div>
      
//     </div>
//   )
// }

// export default Contact

import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 px-4 md:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl md:text-7xl font-semibold"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tight space-y-6">
        {/* Current Address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <h3 className="text-lg font-semibold">Current Address</h3>
          <p>{CONTACT.currentAddress}</p>
        </motion.div>

        {/* Permanent Address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <h3 className="text-lg font-semibold">Permanent Address</h3>
          <p>{CONTACT.permanentAddress}</p>
        </motion.div>

        {/* Phone Number */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email */}
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="inline-block border-b border-gray-500 hover:text-blue-600 transition duration-300"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
