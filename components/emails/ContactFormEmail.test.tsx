import * as React from 'react';

interface ContactFormEmailProps {
    firstName: string;
    company: string;
}

export const ContactFormEmail = ({ firstName, company }: ContactFormEmailProps) => (
    <div>
        <h1>New Contact from {company}</h1>
        <p>Name: {firstName}</p>
    </div>
);

export default ContactFormEmail;
