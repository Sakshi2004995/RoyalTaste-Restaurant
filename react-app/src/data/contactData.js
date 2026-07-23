import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

const contactData = [
  {
    id: 1,
    icon: FaLocationDot,
    title: "Address",
    description: "123 Royal Street, Jaipur, Rajasthan, India",
  },

  {
    id: 2,
    icon: FaPhone,
    title: "Phone",
    description: "+91 98765 43210",
    link: "tel:+919876543210",
  },

  {
    id: 3,
    icon: FaEnvelope,
    title: "Email",
    description: "info@royaltaste.com",
    link: "mailto:info@royaltaste.com",
  },

  {
    id: 4,
    icon: FaClock,
    title: "Opening Hours",
    description: "Mon – Sun : 11:00 AM – 11:00 PM",
  },
];

export default contactData;