import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill";

// Background image constant
const HERO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.discount}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {property.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {property.address.city}, {property.address.state}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <svg
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            {property.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${property.price}
            </span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const filterLabels = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Beachfront",
    "Mountain View",
    "Pet Friendly",
    "Pool",
    "WiFi"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BACKGROUND_IMAGE}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterLabels.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
