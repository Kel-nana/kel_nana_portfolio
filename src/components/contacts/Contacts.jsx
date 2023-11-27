/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
function Contacts() {
  return (
    <section id="contact" className="mt-[60px] h-[100vh]">
      <div />
      <form action="https://formspree.io/f/xleyyjpe" method="POST" id="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="txt"
          maxLength={30}
          placeholder="Your name"
          required=""
          id="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="txt"
          placeholder="Email"
          id="email"
          required=""
        />
        <small />
        <label htmlFor="txtarea">Message:</label>
        <textarea
          name="message"
          required=""
          maxLength={500}
          id="txtarea"
          className="txt"
          placeholder="Write your message here"
          defaultValue=""
        />
        <button type="submit" className="detail-btn white">
          <b>Get In Touch</b>
        </button>
      </form>

    </section>
  );
}

export default Contacts;
