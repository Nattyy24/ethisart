import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate Supabase or email API
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        {submitted ? (
          <p className="text-green-600 text-lg">Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" />
            <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={5}
            />
            <Button type="submit">Send Message</Button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}