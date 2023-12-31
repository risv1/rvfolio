import React, { FC, FormEvent, useRef } from "react";

const Contact: FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current && emailRef.current && messageRef.current) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <div className="bg-sky-800 h-fit p-4 rounded-xl">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-white text-2xl mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-white rounded-xl"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-white rounded-xl"
          />
          <textarea
            ref={messageRef}
            placeholder="Your Message"
            className="w-full p-3 border border-white rounded-xl"
            rows={4} 
          ></textarea>
          <button
            type="submit"
            className="bg-white text-sky-800 text-lg px-6 py-3 rounded-xl hover:bg-yellow-300 hover:text-sky-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
