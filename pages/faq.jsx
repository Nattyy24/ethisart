import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    { q: "Is Ethisart free?", a: "Yes! You can generate AI images completely for free." },
    { q: "Do I need an account?", a: "Accounts are optional but recommended for saving your images and favorites." },
    { q: "Which AI models are used?", a: "We use OpenAI DALL·E and Stable Diffusion for image generation." },
    { q: "Can I share my images?", a: "Yes! You can download and share any generated images." },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}