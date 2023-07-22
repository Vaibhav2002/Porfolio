"use client"

import React, { FormEventHandler, useState } from "react";
import TextInput from "@/components/socialSection/contactForm/TextInput";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import * as yup from "yup";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { mailSchema } from "@/utils/MailSchema";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const onSubmit = async () => {
    try{
      const data = await mailSchema.validate({ name, email, subject, message })
    } catch(err){
      if(err instanceof yup.ValidationError || err instanceof Error)
        toast(err.message)
      else
        toast("Unknown error")
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`flex flex-col gap-4 md:flex-row ${className}`}>
        <div className="flex flex-col gap-4 md:basis-4/5">
          <div className="flex flex-col justify-stretch gap-4 lg:flex-row">
            <div className="flex basis-2/3 flex-col justify-stretch gap-4 md:flex-row">
              <TextInput placeholder="Name" className="basis-1/2" value={name} onValueChange={setName} />
              <TextInput placeholder="Email" className="basis-1/2" value={email} onValueChange={setEmail} />
            </div>
            <TextInput placeholder="Subject" className="basis-1/3" value={subject} onValueChange={setSubject} />
          </div>
          <TextInput placeholder="Message" multiline rows={10} value={message} onValueChange={setMessage} />
        </div>
        <div className="md:basis-1/5">
          <button className="btn btn-block h-full rounded-sm bg-brand4-content hover:bg-brand4-content">
            <PaperAirplaneIcon className={`h-8 w-8 text-brand4`} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
