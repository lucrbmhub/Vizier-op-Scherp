import whatsappLogo from "@/assets/whatsapp-logo.png.asset.json";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/31611221424"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een WhatsApp-bericht"
      className="fixed bottom-[16px] right-[16px] md:bottom-5 md:right-5 z-50 inline-flex h-[56px] w-[56px] md:h-16 md:w-16 items-center justify-center transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <img
        src={whatsappLogo.url}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain"
      />
    </a>
  );
}
