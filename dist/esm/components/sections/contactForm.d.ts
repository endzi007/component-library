import React from 'react';
declare const ContactForm: React.FC<Props>;
export interface Props {
    nameText: string;
    emailText: string;
    subjectText: string;
    messageText: string;
    buttonText: string;
}
export default ContactForm;
