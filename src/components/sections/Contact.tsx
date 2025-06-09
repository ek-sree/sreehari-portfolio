"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {Mail,Phone,MapPin,Loader, ArrowUp} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";
import sendEmail from "@/actions/sendMail";
import { socialLinks } from "@/constants/social-icon";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newError = { name: "", email: "", message: "" };

    if (formData.name.trim().length < 3) {
      newError.name = "Name must be atleast 3 character long";
      hasError = true;
    }
    if (!validateEmail(formData.email.trim())) {
      newError.email = "Please enter a valid email address.";
      hasError = true;
    }
    if (formData.message.trim().length < 8) {
      newError.message = "Message must be atleast 8 character long";
      hasError = true;
    }
    if (hasError) {
      setError(newError);
      return;
    }
    try {
      setError({ name: "", email: "", message: "" });
      setLoading(true);
      const result = await sendEmail(formData.name, formData.email, formData.message);

    toast(result === "Message sent successfully" ? result : "Failed to send");
    if (result === "Message sent successfully") {
      setFormData({ name: "", email: "", message: "" });
    }
      toast("Message has been sended successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error occured while sending message", error);
      toast.error("Message not sended! Try later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <Toaster position="top-center" expand={false} />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
               {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed  md:right-10 md:bottom-24 z-50 p-3 rounded-full dark:bg-slate-500/30 border-black bg-slate-50 text-white shadow-xl hover:shadow-xl transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 dark:text-white text-black" />
        </motion.button>
      )}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Let&apos;s work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  eksreehari05@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  +91 9562605265
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">
                  Kerala, In
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Follow me on social media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      disabled={loading}
                      className={`${
                        error.name
                          ? "border-red-500 dark:border-red-500 border-2"
                          : "dark:border-gray-700"
                      }`}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                    {error.name && (
                      <div className="text-red-500 text-sm">{error.name}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      disabled={loading}
                      className={`${
                        error.email
                          ? "border-red-500 dark:border-red-500 border-2"
                          : "dark:border-gray-700"
                      }`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                    />
                    {error.email && (
                      <div className="text-red-500 text-sm">{error.email}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      disabled={loading}
                      className={`${
                        error.message
                          ? "border-red-500 dark:border-red-500 border-2"
                          : "dark:border-gray-700"
                      } `}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      rows={5}
                    />
                    {error.message && (
                      <div className="text-red-500 text-sm">
                        {error.message}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {loading &&(<Loader className="animate-spin dark:text-white text-black"/>)}
                    {loading ? "Sending ...": "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
