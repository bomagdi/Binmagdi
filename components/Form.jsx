"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

// Email js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jmh36qr", "template_55ju0g8", form.current, {
        publicKey: "cBP9ch62kP310za57",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" name="from_name" placeholder="Name" required/>
        <User className="absolute right-6" size={20} />
      </div>
      {/* Email */}
      <div className="relative flex items-center">
        <Input type="email" name="email_id" placeholder="Email" required/>
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* TextAria  */}
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Your message here..." required/>
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
