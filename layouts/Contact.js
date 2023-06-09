// import config from "@config/config.json";
import Banner from "./components/Banner";
import { useState } from 'react';
import ImageFallback from "./components/ImageFallback";
import { useRouter } from 'next/router';
import axios from 'axios';

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsEmailSent(true);
    router?.req?.headers['x-forwarded-for'] || router?.req?.connection?.remoteAddress || '';
    const ipaddress = await axios.get('https://api.ipify.org?format=json');

    const date = new Date();
    const current = [];
    current.Date = date.toLocaleString('en-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    current.Time = date.toLocaleString('en-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
    // Kirim data ke Telegram menggunakan API Telegram
    const message = `
*Email Baru dari Lacak Lokasimu*
IpAddress: ${ipaddress.data.ip}
Device: ${navigator.userAgent}

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

Dikirim pada ${current.Date} Pukul ${current.Time}.`;

    const telegramToken = '6240160931:AAH3Db5656Ys_Oz03ABxF4hH8D3zu3uvjiU';
    const telegramChatId = '1222630961';
    

    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    axios
    .post(telegramApiUrl, {
      chat_id: telegramChatId,
      text: message,
      parse_mode: 'Markdown',
    })
    .then((response) => {
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Error sending message to Telegram', error);
    });
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            {isEmailSent ? (
              <Banner title={'Pesan telah dikirim!'} type='message'/>
            ) : (
              <form
                method="POST"
                // action={config.params.contact_form_action}
                onSubmit={handleSubmit}
                className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
              >
                <h2 className="h4 mb-6">Send A Message</h2>
                <div className="mb-6">
                  <label
                    className="mb-2 block font-medium text-dark"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="form-input w-full"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="mb-2 block font-medium text-dark"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="form-input w-full"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="mb-2 block font-medium text-dark"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="form-input w-full"
                    name="subject"
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="mb-2 block font-medium text-dark"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea name="message" className="form-textarea w-full" rows="6" onChange={handleChange} />
                </div>
                <button className="btn btn-primary block w-full">
                  Submit Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
