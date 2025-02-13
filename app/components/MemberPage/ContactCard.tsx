'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

interface ContactProps {
    ccEmail: string;
    name: string;
}

const Contact: React.FC<ContactProps> = ({ ccEmail, name }) => {
    const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const phoneNumber = (document.getElementById('phone') as HTMLInputElement).value;
        const emailAddress = (document.getElementById('email') as HTMLInputElement).value;
        const message = formData.get('message') as string;

        // Accessing EmailJS service ID, template ID, and user ID from environment variables
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

        if (!serviceID || !templateID || !userID) {
            console.error('EmailJS configuration is missing. Check your environment variables.');
            return;
        }

        if (!recaptchaToken) {
            console.error('reCAPTCHA validation failed.');
            return;
        }

        const templateParams = {
            to_name: ccEmail,
            from_name: `${firstName} ${lastName}`,
            phone_number: phoneNumber,
            email_address: emailAddress,
            message: message,
            'g-recaptcha-response': recaptchaToken, // Add the reCAPTCHA token to the template parameters
        };

        // Log templateParams to debug
        console.log('Template Parameters:', templateParams);

        try {
            const result = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log('Email sent:', result.text);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const onRecaptchaChange = (value: string | null) => {
        console.log("Captcha value:", value);
        setRecaptchaToken(value);
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card>
                <CardContent className='justify-center'>
                    <h1 className="text-start text-4xl font-bold mb-2 ml-20 mt-8">Get In Touch</h1>
                    <h3 className="text-center text-2xl from-neutral-400 mb-8">Send a message to {name}</h3>
                    <div className="max-w-lg mx-auto">
                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your First Name Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Last Name Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Phone Number Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Email Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Message Here'
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                                    onChange={onRecaptchaChange}
                                />
                            </div>
                            <div className="flex justify-end p-4">
                                <Button variant="contained" size="large" color="primary" type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Contact;
