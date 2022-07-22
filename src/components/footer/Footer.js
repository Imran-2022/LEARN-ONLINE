import React from 'react';
const Footer = () => {
    return (
        <div>
            <section className="footer w-100 text-center p-5 pb-3 pt-2">
                <h4 className="my-4 fw-bold">About Us</h4>
                <p>The spacious well-ventilated PLATFORM, provide a conducive environment for learning.<br /> we are here to being a part of your successful career. we will provide all you need to be pro. just stay with us. </p>
                <p>&copy; {new Date().getFullYear()}, All right reserved by 'Learn | online</p>
            </section>
        </div>
    );
};

export default Footer;