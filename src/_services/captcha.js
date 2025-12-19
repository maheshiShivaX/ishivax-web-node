import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Wrap your app or component tree
export default function ContactUsWrapper() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_V3_SITE_KEY">
      <ContactUs />
    </GoogleReCaptchaProvider>
  );
}

// Inside your ContactUs component
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactUs = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const saveEnquiryData = async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      toast.error('Captcha not ready');
      return;
    }
    const token = await executeRecaptcha('contact_form');
    // Send this token to your backend for verification
    // ...rest of your code
  };

  // ...rest of your component
}