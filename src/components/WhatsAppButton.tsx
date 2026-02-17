const WhatsAppButton = () => {
  const message =
    "Olá, vim do site da Trendy e quero ajuda para tirar a minha marca do anonimato. Podemos falar sobre ideias de design e presença digital para o meu negócio?";
  const encoded = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/244935047246?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Trendy pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <span className="sr-only">Contactar a Trendy pelo WhatsApp</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 3C9.383 3 4 8.383 4 15c0 2.104.594 4.055 1.63 5.73L4 29l8.42-1.602A11.8 11.8 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10a9.77 9.77 0 0 1-3.77-.754l-.27-.11-4.98.947.953-4.86-.175-.285A9.77 9.77 0 0 1 6 15C6 9.465 10.465 5 16 5Zm-3.193 4.5a1.06 1.06 0 0 0-.77.383c-.2.238-.733.718-.733 1.75 0 1.032.75 2.03.853 2.171.105.14 1.48 2.356 3.574 3.31 2.096.953 2.324.766 2.745.718.422-.047 1.35-.55 1.54-1.082.189-.531.189-.985.132-1.082-.056-.094-.21-.15-.44-.262-.23-.11-1.36-.672-1.572-.75-.21-.079-.363-.118-.517.118-.154.238-.594.75-.728.907-.133.157-.268.177-.497.066-.23-.11-.969-.357-1.845-1.133-.682-.608-1.143-1.36-1.278-1.596-.133-.238-.014-.366.1-.48.103-.102.23-.266.344-.398.112-.133.148-.223.226-.373.079-.157.04-.295-.02-.413-.056-.11-.497-1.191-.68-1.63-.18-.438-.361-.379-.517-.386Z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
