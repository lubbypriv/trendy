import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/244935047246"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={26} fill="white" strokeWidth={0} />
  </a>
);

export default WhatsAppButton;
