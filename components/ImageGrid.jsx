import ImageCard from "./ImageCard";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
  );
}