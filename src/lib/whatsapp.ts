import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511991958127";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pela landing page da Master Apple e gostaria de ver os iPhones disponíveis."
);

export const getWhatsAppLink = () =>
  `https://wa.me/${11991958127}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppIcon = MessageCircle;
