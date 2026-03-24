import Card from "./Card";

export default function Grid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {images.map(image => <Card key={image.id} image={image} />)}
    </div>
  );
}