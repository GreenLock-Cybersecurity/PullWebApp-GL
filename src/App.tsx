import { Navigate, Route, Routes } from "react-router-dom";
import { VenuesPage } from "./pages/venues-page/venues-page";
import { EventsPage } from "./pages/events-page/events-page";
import { WalletPage } from "./pages/wallet-page/wallet-page";
import { AboutUsPage } from "./pages/about-us/about-us";
import { VenueEventsPage } from "./pages/venue-event-page/event-venue-page";
import { EventDetailedPage } from "./pages/event-detailed-page/event-detailed-page";
import { PrePurchasePage } from "./pages/pre-purchase-page/pre-purchase-page";
import { PaymentPage } from "./pages/payment-page/payment-page";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/venues" />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:eventId" element={<EventDetailedPage />} />
        <Route path="/venues/events/:venueId" element={<VenueEventsPage />} />
        <Route path="/event/:eventId/tickets/:ticketTypeId" element={<PrePurchasePage />} />
        <Route path="/event/:eventId/tickets/:ticketTypeId/:quantity" element={<PaymentPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/signIn" element={<h1>Sign In Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}