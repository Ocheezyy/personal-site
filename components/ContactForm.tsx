"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface IContactForm {
  formsAccessKey: string;
}

export default function ContactForm(props: IContactForm) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onEmailChange = (e: any) => setEmail(e.target.value);
  const onNameChange = (e: any) => setName(e.target.value);
  const onMessageChange = (e: any) => setMessage(e.target.value);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", props.formsAccessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      e.target.reset();
    } else {
      console.error("SubmitError: ", data);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl">
              Have a project in mind or want to collaborate? Feel free to reach
              out using the form below.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-50" htmlFor="name">
                Name
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="name"
                onChange={onNameChange}
                name="name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-50" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                onChange={onEmailChange}
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-50" htmlFor="message">
                Message
              </Label>
              <Textarea
                className="bg-gray-800 text-gray-50"
                onChange={onMessageChange}
                id="message"
                name="message"
                required
              />
            </div>
            <p className="text-gray-400">
              This will only be used to communicate directly with you, and your
              information won&apos;t be put into some newsletter :&#41;
            </p>
            <Button
              className="w-full bg-gray-50 text-gray-900"
              type="submit"
              disabled={loading}
            >
              Submit
              {loading ? (
                <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin border-t-gray-900 dark:border-t-gray-100" />
              ) : (
                ""
              )}
            </Button>
          </div>
        </div>
        {/*<Image*/}
        {/*  alt="Image"*/}
        {/*  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last bg-gray-50"*/}
        {/*  height="310"*/}
        {/*  src="/placeholder.svg"*/}
        {/*  width="550"*/}
        {/*/>*/}
    </form>
  );
}
