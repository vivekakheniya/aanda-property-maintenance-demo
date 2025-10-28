import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

const GallerySection = () => {
  const [showGallery, setShowGallery] = useState(false);

  // Auto-generate all image URLs from /public/gallery/image1.jpg to image43.jpg
  const images = Array.from({ length: 43 }, (_, i) => ({
    original: `/gallery/image${i + 1}.jpg`,
    thumbnail: `/gallery/image${i + 1}.jpg`,
  }));

  // Show first 8 in preview grid
  const previewImages = images.slice(0, 8);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Work Gallery
        </h2>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {previewImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setShowGallery(true)}
              className="relative cursor-pointer group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={img.original}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-medium text-sm transition">
                View Gallery
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => setShowGallery(true)}
          className="mt-10 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          View All Photos
        </button>

        {/* Fullscreen Modal */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="w-full max-w-5xl relative">
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-3 right-1 z-10 bg-white/80 text-gray-800 px-3 py-1 rounded-md hover:bg-white transition cursor-pointer"
              >
                ✕ Close
              </button>
              <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
