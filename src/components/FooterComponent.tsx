"use client";
import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const FooterComponent = () => (
    <Footer container>
        <FooterCopyright href="#" by="Rayhan Zulfitri" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.instagram.com/r.e_ray/" target="_blank" icon={BsInstagram} />
            <FooterIcon href="https://github.com/Ryftri" target="_blank" icon={BsGithub} />
            <FooterIcon href="https://www.linkedin.com/in/rayhan-zulfitri-dwi-cahyo/" icon={BsLinkedin} />
        </div>
    </Footer>
);