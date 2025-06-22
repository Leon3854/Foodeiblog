import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

export interface SocialLinkType {
  icon: JSX.Element;
  url: string;
  ariaLabel: string;
  faClass: string;
}

export default function Social() {
  const socialLinks: SocialLinkType[] = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      ariaLabel: "Facebook",
      faClass: "fa fa-facebook",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
      ariaLabel: "Twitter",
      faClass: "fa fa-twitter",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com",
      ariaLabel: "YouTube",
      faClass: "fa fa-youtube",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      ariaLabel: "Instagram",
      faClass: "fa fa-instagram",
    },
    {
      icon: <FaRegEnvelope />,
      url: "mailto:contact@example.com",
      ariaLabel: "Email us",
      faClass: "fa fa-envelope-o",
    },
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          aria-label={link.ariaLabel}
          className={link.faClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </>
  );
}
