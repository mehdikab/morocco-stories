"use client";
import ModernBookingModal from '@/components/booking/ModernBookingModal';

export default function Home() {
  return (
    <div>
      <ModernBookingModal
        isOpen={true}
        onClose={() => {}}
        tour={{
          title: "Morocco Tour",
          price: "$599",
          duration: "7 days"
        }}
        onProceedToCheckout={(data) => console.log(data)}
      />
    </div>
  );
}
