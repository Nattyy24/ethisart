import Link from "next/link";

export default function Card({ image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={image.url} alt={image.title} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{image.title}</h3>
        <p className="text-gray-500 text-sm">By {image.user_name || "Ethisart AI"}</p>
        <Link href={`/image/${image.id}`} className="text-purple-500 hover:underline mt-2 block">
          View
        </Link>
      </div>
    </div>
  );
}