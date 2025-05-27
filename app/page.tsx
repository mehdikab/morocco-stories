"use client";
import ModernBookingModal from '@/components/booking/ModernBookingModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ModernBookingModal
        isOpen={true}
        onClose={() => {}}
        tour={{
          title: "Morocco Desert Tour",
          price: "$599",
          duration: "7 days",
          highlights: ["Sahara Desert", "Ait Ben Haddou"],
          image: "/placeholder.jpg"
        }}
      />
    </div>
  );
}
