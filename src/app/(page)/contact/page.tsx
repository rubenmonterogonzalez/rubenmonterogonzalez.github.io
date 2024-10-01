'use client';

import { Heading } from "@/components/Heading";
import { itemSlideUp, item, list } from "@/helpers/animations";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' } as FormData);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' } as Errors);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'A valid email is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill out all required fields correctly.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Thank you for reaching out!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20 overflow-hidden dark:bg-dark-theme bg-white">
      <div className="max-w-screen-lg w-full mx-auto px-8 lg:px-2">
        <Heading heading="Contact me" />
        <div className="lg:grid-cols-2 grid grid-cols-1 gap-12 lg:max-w-none max-w-screen-sm mx-auto ">
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={list}
            className="w-full"
            noValidate
          >
            <motion.div variants={itemSlideUp} className="mb-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`focus:outline-none shadow w-full border bg-transparent dark:border-primary p-2 border-black text-gray-500 dark:text-gray-200 rounded-md ${errors.name ? 'ring-1 ring-red-500' : ''}`}
                required
                minLength={3}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </motion.div>

            <motion.div variants={itemSlideUp} className="mb-4">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`focus:outline-none shadow w-full border dark:border-primary bg-transparent dark:text-gray-200 p-2 border-black text-gray-500 rounded-md ${errors.email ? 'ring-1 ring-red-500' : ''}`}
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Invalid email address"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </motion.div>

            <motion.div variants={itemSlideUp} className="mb-4">
              <textarea
                id="message"
                rows={6}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`focus:outline-none shadow w-full border bg-transparent p-2 border-black dark:border-primary dark:text-gray-200 text-gray-500 rounded-md ${errors.message ? 'ring-1 ring-red-500' : ''}`}
                required
                minLength={10}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </motion.div>

            <motion.div variants={itemSlideUp} className="text-center">
              <button
                type="submit"
                className={`rounded bg-primary text-black font-main font-bold px-10 py-2 place-self-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </motion.div>
          </motion.form>

          <div className="lg:block md:flex md:justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="mb-6"
            >
              <motion.h3
                variants={item}
                className="text-2xl font-main font-bold mb-4 capitalize dark:text-white text-black"
              >
                Contact info :
              </motion.h3>

              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
              >
                <IconMail />
                <span className="text-lg font-main">
                  rubenmontero@rocketmail.com
                </span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
              >
                <IconPhone />
                <span className="text-lg font-main">+356 792 161 79</span>
              </motion.div>
              <motion.div
                variants={item}
                className="flex mb-4 items-center space-x-4 text-gray-700 dark:text-gray-300"
              >
                <IconMapPin />
                <span className="text-lg font-main">Malta</span>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={list}>
              <motion.h3
                variants={item}
                className="text-2xl font-main font-bold mb-4 capitalize dark:text-white text-black"
              >
                Social Networks :
              </motion.h3>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex space-x-10 text-lg items-center text-gray-700"
              >
                <motion.a
                  variants={itemSlideUp}
                  className="hover:text-primary dark:text-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ruben-montero-gonzalez/"
                >
                  <IconBrandLinkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  variants={itemSlideUp}
                  className="hover:text-primary dark:text-primary"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/rubenmonterogonzalez"
                >
                  <IconBrandGithub className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};