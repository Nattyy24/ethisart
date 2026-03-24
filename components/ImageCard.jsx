import Link from "next/link";

export default function ImageCard({ image }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg overflow-hidden">
      <img src={image.url} alt={image.title} className="w-full h-64 object-cover"/>
      <div className="p-2">
        <h3 className="font-semibold">{image.title}</h3>
        <p className="text-sm text-gray-500">By {image.user_name || "AI"}</p>
        <Link href={`/image/${image.id}`} className="text-blue-600 hover:underline">View</Link>
      </div>
    </div>
  );
}