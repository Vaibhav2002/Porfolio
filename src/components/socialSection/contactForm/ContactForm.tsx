"use client";

import React, { useCallback, useState } from "react";
import TextInput from "@/components/socialSection/contactForm/TextInput";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendMail from "@/data/Mail";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const notify = useCallback((text: string, type: TypeOptions) => {
    toast(text, { type: type });
  }, []);

  const clearForm = useCallback(() => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSending(true);
      await sendMail({ name, email, subject, message });
      clearForm()
      notify("Message sent successfully", "success");
    } catch (err) {
      if (err instanceof Error) notify(err.message, "error");
      else notify("Unknown error", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />

      <form onSubmit={(e) => onSubmit(e)}>
        <div className={`flex flex-col gap-4 md:flex-row ${className}`}>
          <div className="flex flex-col gap-4 md:basis-4/5">
            <div className="flex flex-col justify-stretch gap-4 lg:flex-row">
              <div className="flex basis-2/3 flex-col justify-stretch gap-4 md:flex-row">
                <TextInput
                  placeholder="Name"
                  className="basis-1/2"
                  value={name}
                  onValueChange={setName}
                />
                <TextInput
                  placeholder="Email"
                  className="basis-1/2"
                  value={email}
                  onValueChange={setEmail}
                />
              </div>
              <TextInput
                placeholder="Subject"
                className="basis-1/3"
                value={subject}
                onValueChange={setSubject}
              />
            </div>
            <TextInput
              placeholder="Message"
              multiline
              rows={10}
              value={message}
              onValueChange={setMessage}
            />
          </div>
          <div className="md:basis-1/5">
            <button
              type="submit"
              disabled={sending}
              className="btn btn-block h-full rounded-sm bg-brand4-content hover:bg-brand4-content disabled:bg-brand4-content disabled:opacity-50"
            >
              {sending && (
                <span className="loading loading-spinner text-brand4" />
              )}
              {!sending && (
                <PaperAirplaneIcon className={`h-8 w-8 text-brand4`} />
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
