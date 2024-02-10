/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import send from '../../assets/icons/send.png';
import sendHover from '../../assets/icons/sendHover.png';

const Contacts = (props) => {
  const formRef = useRef();
  const { breakPoint } = props;
  console.log(breakPoint, 'breakpoint contacts');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_e155j8r',
        'template_07soesa',
        {
          from_name: form.name,
          to_name: 'Kelvin Irungu',
          from_email: form.email,
          to_email: 'kelvinn.irungu69@gmail.com',
          message: form.message,
        },
        '4qDFSHnwSIghThl1Y',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        },
      );
  };

  return (
    <section className={breakPoint > 516 ? 'pt-[10px]' : 'pt-[180px]'}>
      <div
        id="contact"
        className="pt-[74px] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      >
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [-290, 180, 0] }}
          transition={{
            duration: 3,
            delay: 0.3,
          }}
          className="flex-[0.95] pl-[5.5%] bg-jet p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-[70vw]"
          >
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-eerieBlack py-2 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-eerieBlack py-2 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="bg-eerieBlack py-2 px-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
              />
            </label>

            <button
              type="submit"
              className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document.querySelector('.contact-btn').setAttribute('src', sendHover);
              }}
              onMouseOut={() => {
                document.querySelector('.contact-btn').setAttribute('src', send);
              }}
            >
              {loading ? 'Sending' : 'Send'}
              <img
                src={send}
                alt="send"
                className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

Contacts.propTypes = {
  breakPoint: PropTypes.number.isRequired,
};

export default Contacts;
