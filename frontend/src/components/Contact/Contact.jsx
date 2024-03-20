import React, {useState} from "react";
import "./contact.css";
import { Envelope, Whatsapp, Messenger } from "react-bootstrap-icons";
import useShowToast from '../../Hooks/useShowToast'
import { Button } from "@chakra-ui/react";

function Contact() {
    const showToast = useShowToast();
    const [result, setResult] = useState("");
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      setLoading(true);
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            access_key: "c5ac776b-53e9-47f3-9f58-32d6879a82e9",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
  
        if (data.success) {
          setResult("Form Submitted Successfully");
          showToast("Successfully submitted successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          console.error("Error:", data);
          setResult("Failed to submit form");
          showToast("Failed to submit form");
        }
      } catch (error) {
        console.error("Error:", error);
        setResult("Failed to submit form");
      }finally{
        setLoading(false)
      }
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div id="main-container" className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <Envelope className="contact-icon my_code m-auto" />
            <h4 className=" text-[1.2rem] font-medium">Email</h4>
            <h6>madarauchia@gmail.com</h6>
            <a href="mailto:sunade@gmail.com" className=" mt-3 ">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <Whatsapp className="m-auto my_code" />
            <h4>Messenger</h4>
            <h6>madarauchia@gmail.com</h6>
            <a href="mailto:sunade@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <Messenger className="m-auto my_code" />
            <h4>WhatsApp</h4>
            <h5>123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=123456789">
              Send a message
            </a>
          </article>
        </div>

        {/* End Of Contact Options */}
        <form className=" flex  flex-col  g-[1.2rem]" onSubmit={handleSubmit}>
          <input
            className=" w-[100%] p-[1.5rem] rounded-lg bg-transparent"
            type="text"
            name="name"
            placeholder="your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className=" w-[100%] p-[1.5rem] rounded-lg bg-transparent"
            type="email"
            name="email"
            id=""
            placeholder="your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            className=" w-[100%] p-[1.5rem] rounded-lg bg-transparent"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <Button className="btn " bg={'#3498db'} color={'white'} type="submit"
          _hover={{bg:'#37739b',color:"white"}}
          isLoading={loading}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

// import React ,{useState} from "react";
// import "./contact.css";
// import { Envelope, Whatsapp, Messenger } from "react-bootstrap-icons";
// import useShowToast from '../../Hooks/useShowToast'
// function Contact() {
//     const showToast = useShowToast();
//     const [result, setResult] = useState("");
//     const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//       message: "",
//     });

//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");

//       try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           body: JSON.stringify({
//             ...formData,
//             access_key: "c5ac776b-53e9-47f3-9f58-32d6879a82e9",
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         const data = await response.json();

//         if (data.success) {
//           setResult("Form Submitted Successfully");
//           setFormData({
//             name: "",
//             email: "",
//             message: "",
//           });
//         } else {
//           console.error("Error:", data);
//           setResult("Failed to submit form");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         setResult("Failed to submit form");
//       }
//     };

//   return (
//     <section id="contact">
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>
//       <div id="main-container" className="container contact_container">
//         <div className="contact_options">
//           <article className="contact_option">
//             <Envelope className="contact-icon my_code m-auto" />
//             <h4 className=" text-[1.2rem] font-medium">Email</h4>
//             <h6>madarauchia@gmail.com</h6>
//             <a href="mailto:sunade@gmail.com" className=" mt-3 ">Send a message</a>
//           </article>

//           <article className="contact_option">
//             <Whatsapp className="m-auto my_code" />
//             <h4>Messenger</h4>
//             <h6>madarauchia@gmail.com</h6>
//             <a href="mailto:sunade@gmail.com">Send a message</a>
//           </article>

//           <article className="contact_option">
//             <Messenger className="m-auto my_code" />
//             <h4>WhatsApp</h4>
//             <h5>123456789</h5>
//             <a href="https://api.whatsapp.com/send?phone=123456789">
//               Send a message
//             </a>
//           </article>
//         </div>

//         {/* End Of Contact Options */}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             id=""
//             placeholder="your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Your message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button className="btn" type="submit">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;
