import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5d232b0f-8122-4cf9-a37c-adcceb3d3f21-1g.jpeg",
  "https://utfs.io/f/daa6d393-d358-40be-97cb-188fc0275b5b-1f.jpeg",
  "https://utfs.io/f/1d0349d8-74a0-4af2-930b-4670f171695b-1d.jpeg",
  "https://utfs.io/f/d9f1a497-0221-484b-a0b6-6ba0d1799bc5-1e.jpeg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
