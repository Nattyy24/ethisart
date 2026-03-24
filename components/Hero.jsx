export default function Hero() {
  return (
    <header className="relative text-center py-20 bg-gray-200 dark:bg-gray-900">
      <img src="/hero.jpg" alt="Ethisart AI Art" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20" />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Create Stunning AI Art with Ethisart</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Generate, download, and share AI-generated images for free</p>
      </div>
    </header>
  );
}