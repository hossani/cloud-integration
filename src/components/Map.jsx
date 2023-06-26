import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const mapContainerRef = useRef(null);
  const key = "YOUR_KEY_HERE (https://api.maptiler.com/)";
  useEffect(() => {
    // Initialize map
    const map = L.map(mapContainerRef.current).setView(
      [34.020882, -6.841682],
      13
    );

    // Add tile layer to the map using MapTiler API
    const tileLayer = L.tileLayer(
      `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`,
      {
        attribution:
          '&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors',
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        maxZoom: 20,
      }
    );
    tileLayer.addTo(map);

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <section className="bg-[#0f172a]">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Discover Morocco with our interactive map
          </h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <div ref={mapContainerRef} className="w-full h-96" />
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-gray-300">
              <p>
                Explore the beauty of Morocco using our interactive map. With
                just a few clicks, you can discover the country's top
                attractions, best restaurants, and hidden gems. Whether you're
                planning your next adventure or just want to learn more about
                this fascinating country, our map is the perfect tool for you.
              </p>

              <p>
                Our interactive map allows you to explore the rich culture and
                history of Morocco. Discover hidden gems and popular tourist
                destinations with just a few clicks. Whether you're planning
                your next trip or just exploring, our map has everything you
                need to experience Morocco like never before.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
