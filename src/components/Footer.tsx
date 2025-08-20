import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#5542ff] py-4 px-10 text-black">
            <div className="container flex items-center justify-between flex-row">
                <p className="text-center text-sm font-light">
                    ©Nova 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
