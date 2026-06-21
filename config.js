/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           GUIAHUÉSPED — ARCHIVO DE CONFIGURACIÓN             ║
 * ║  Edita solo este archivo para personalizar cada propiedad.   ║
 * ║  No es necesario tocar index.html salvo cambios de diseño.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

var GUEST_CONFIG = {

  // ──────────────────────────────────────────────────────────────
  // 1. IDENTIDAD DE LA PROPIEDAD
  // ──────────────────────────────────────────────────────────────
  property: {
    name:        "CarAle",
    tagline:     { es: "Tu Estancia en Calma",                                        en: "Your Peaceful Stay"                                       },
    description: { es: "Guía de bienvenida para huéspedes de CarAle, depto 302.",    en: "Welcome guide for CarAle guests, unit 302."                },
    language:    "es",
    themeColor:  "#0284c7",
  },

  // ──────────────────────────────────────────────────────────────
  // 2. TEXTOS DE INTERFAZ — no tocar salvo traducción
  // ──────────────────────────────────────────────────────────────
  ui: {
    welcomeHeader: { es: "Bienvenidos a",  en: "Welcome to"  },
    checkinLabel:  { es: "Llegada",        en: "Check-in"    },
    checkoutLabel: { es: "Salida",         en: "Check-out"   },

    wifi: {
      networkLabel:  { es: "Red",    en: "Network"  },
      passwordLabel: { es: "Clave",  en: "Password" },
      connect:       { es: "Wi-Fi — Toca para copiar la clave",       en: "Wi-Fi — Tap to copy the password"      },
      copyBtn:       { es: "Copiar clave",                                en: "Copy password"                         },
      connectQr:     { es: "O escanea el código QR con tu cámara",    en: "Or scan the QR code with your camera"  },
      copied:        { es: "¡Copiado al portapapeles!",               en: "Copied to clipboard!"                  },
      fallback:      { es: "Clave:",                                  en: "Password:"                             },
    },

    buttons: {
      location: { es: "Ubicación GPS", en: "GPS Location" },
      checkout:  { es: "Check-out",    en: "Check-out"    },
    },

    modal: {
      title:              { es: "Cierre de Estancia",                    en: "Checkout"                        },
      subtitle:           { es: "Confirma estos puntos antes de salir:", en: "Please confirm before leaving:"  },
      confirm:            { es: "Confirmar y continuar",                 en: "Confirm and continue"            },
      stay:               { es: "Seguir aquí",                           en: "Stay here"                       },
      pendingError:       { es: "Falta(n) {n} punto(s) por confirmar.",  en: "{n} item(s) still pending."      },
      experienceTitle:    { es: "¿Cómo fue tu experiencia?",             en: "How was your stay?"              },
      experienceSubtitle: { es: "Tu mensaje nos ayuda a mejorar.",       en: "Your feedback helps us improve." },
      excellent:          { es: "⭐ Todo perfecto",                      en: "⭐ Everything was great"          },
      suggestions:        { es: "💬 Tengo comentarios",                  en: "💬 I have some feedback"          },
    },

    whatsapp: {
      ariaLabel: { es: "Contactar al anfitrión por WhatsApp", en: "Contact host via WhatsApp" },
    },

    video: {
      closeLabel: { es: "Cerrar video", en: "Close video" },
    },

    checkout: {
      feedbackExcellent:   { es: "Excelente estancia ⭐⭐⭐⭐⭐",            en: "Excellent stay ⭐⭐⭐⭐⭐"             },
      feedbackSuggestions: { es: "Buena estancia, tengo comentarios.",     en: "Good stay, I have some feedback."   },
      waMessage: {
        es: "Hola! 👋 Confirmo mi salida de {id}.\n\n✅ Checklist completado.\n⭐ Feedback: {feedback}",
        en: "Hi! 👋 I'm checking out from {id}.\n\n✅ Checklist completed.\n⭐ Feedback: {feedback}",
      },
    },
  },

  // ──────────────────────────────────────────────────────────────
  // 3. HORARIOS
  // ──────────────────────────────────────────────────────────────
  schedule: {
    checkin:  "3:00 PM",
    checkout: "12:00 PM",
  },

  // ──────────────────────────────────────────────────────────────
  // 4. BADGE DE IDENTIFICACIÓN
  // ──────────────────────────────────────────────────────────────
  badge: [
    { label: { es: "Edificio", en: "Building" }, value: "7"   },
    { label: { es: "Depto",    en: "Unit"     }, value: "302" },
    { label: { es: "Cajón",    en: "Parking"  }, value: "302" },
  ],

  // ──────────────────────────────────────────────────────────────
  // 5. CONTACTO
  // ──────────────────────────────────────────────────────────────
  contact: {
    whatsapp: "523328329427",
    deptId:   "CarAle 302",
  },

  // ──────────────────────────────────────────────────────────────
  // 6. WI-FI
  // NOTA: La contraseña es obfuscation superficial (reverse string),
  // no seguridad real. Cualquier persona con acceso al source la ve.
  // El QR generado en runtime no expone la contraseña en texto plano.
  // ──────────────────────────────────────────────────────────────
  wifi: {
    ssid:          "Infinitum 152D",
    password:      "Fygf5PWpanq",   // contraseña invertida: qnapWP5fgyF (valor real)
    showQr:        true,            // muestra QR escaneable además del botón copiar
  },

  // ──────────────────────────────────────────────────────────────
  // 7. UBICACIÓN GPS
  // ──────────────────────────────────────────────────────────────
  location: {
    googleMapsUrl: "https://maps.app.goo.gl/fMkzaC7NjFFRRnCu6",
  },

  // ──────────────────────────────────────────────────────────────
  // 8. VIDEO TUTORIAL
  // ──────────────────────────────────────────────────────────────
  video: {
    youtubeId:   "APubdwLjOmQ",
    title:       { es: "Tutorial boiler agua caliente",  en: "Hot water boiler tutorial"     },
    buttonLabel: { es: "Ver Video Tutorial (15 seg)",    en: "Watch Video Tutorial (15 sec)"  },
    modalLabel:  { es: "Video tutorial boiler",          en: "Boiler video tutorial"          },
    vertical:    true,
  },

  // ──────────────────────────────────────────────────────────────
  // 9. BIENVENIDA
  // ──────────────────────────────────────────────────────────────
  welcome: {
    show:  true,
    icon:  "👋",
    title: { es: "Bienvenido",                                                                                           en: "Welcome"                                                                                   },
    body:  { es: "Tu estancia está lista. Aquí encontrarás todo lo necesario para un acceso rápido y sin complicaciones.", en: "Your stay is ready. Here you'll find everything you need for quick and easy access."       },
    note:  { es: "¿Necesitas ayuda? Escríbenos por WhatsApp desde el botón verde en pantalla.",                           en: "Need help? Message us on WhatsApp using the green button on screen."                        },
  },

  // ──────────────────────────────────────────────────────────────
  // 10. AGUA CALIENTE
  // ──────────────────────────────────────────────────────────────
  waterSystem: {
    show:     true,
    icon:     "🚿",
    title:    { es: "Agua Caliente (Boiler)",                en: "Hot Water (Boiler)"          },
    subtitle: { es: "Para disfrutar de una ducha caliente:", en: "To enjoy a hot shower:"      },
    steps: [
      { es: "Ubica el cilindro de gas y abre la llave.",                                                                         en: "Locate the gas cylinder and open the valve."                                                   },
      { es: "En el calentador, gira la perilla a <strong>PILOTO</strong> y mantén el botón rojo presionado (15 seg).",           en: "On the heater, turn the knob to <strong>PILOT</strong> and hold the red button for 15 seconds." },
      { es: "Ya encendido, gira a <strong>CALIENTE</strong>.",                                                                   en: "Once lit, turn to <strong>HOT</strong>."                                                       },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // 11. ENTRETENIMIENTO
  // ──────────────────────────────────────────────────────────────
  entertainment: {
    show:  true,
    icon:  "📺",
    title: { es: "Entretenimiento",  en: "Entertainment" },
    body:  {
      es: "Siéntete libre de usar tus cuentas de streaming en la Smart TV. <strong>Al salir, cierra sesión manualmente para proteger tu cuenta.</strong>",
      en: "Feel free to use your streaming accounts on the Smart TV. <strong>When leaving, sign out manually to protect your account.</strong>",
    },
  },

  // ──────────────────────────────────────────────────────────────
  // 12. EMERGENCIAS
  // Agrega información local relevante para la propiedad.
  // ──────────────────────────────────────────────────────────────
  emergency: {
    show: true,
    icon: "🚨",
    title: { es: "Emergencias", en: "Emergencies" },
    gasLeak: {
      show:  true,
      title: { es: "Fuga de gas", en: "Gas leak" },
      steps: [
        { es: "No enciendas luces ni aparatos eléctricos.",   en: "Do not turn on lights or electrical devices."  },
        { es: "Cierra la llave del cilindro de gas.",         en: "Close the gas cylinder valve."                 },
        { es: "Abre puertas y ventanas para ventilar.",       en: "Open doors and windows to ventilate."          },
        { es: "Sal del departamento y avisa al anfitrión.",   en: "Leave the unit and contact the host."          },
      ],
    },
    contacts: [
      { icon: "🚒", label: { es: "Bomberos",       en: "Fire dept."    }, number: "068"            },
      { icon: "🚑", label: { es: "Cruz Roja",      en: "Red Cross"     }, number: "065"            },
      { icon: "🚓", label: { es: "Policía",        en: "Police"        }, number: "911"            },
      { icon: "💬", label: { es: "Anfitrión (WA)", en: "Host (WA)"     }, number: "523328329427", isWhatsapp: true },
    ],
    extintor: {
      show: false,
      body: {
        es: "El extintor está ubicado en el pasillo del edificio, junto al elevador. Planta baja, edificio 7.",
        en: "The fire extinguisher is located in the building hallway, next to the elevator. Ground floor, building 7.",
      },
    },
  },

  // ──────────────────────────────────────────────────────────────
  // 13. ARMONÍA / REGLAS
  // ──────────────────────────────────────────────────────────────
  harmony: {
    show:  true,
    icon:  "📋",
    title: { es: "Reglas del Condominio", en: "Community Rules" },
    items: [
      {
        icon:  "🏊",
        title: { es: "Alberca — 9:00 AM a 11:00 PM",              en: "Pool — 9:00 AM to 11:00 PM"              },
        body:  { es: "Disponible todos los días. Viernes y sábado el horario se extiende hasta medianoche. Disfruta el área respetando su uso: traje de baño obligatorio y sin alimentos, envases de vidrio o música alta.", en: "Available every day. Friday and Saturday hours extend until midnight. Enjoy the area respectfully: swimwear required, no food, glass containers, or loud music." },
      },
      {
        icon:  "🚗",
        title: { es: "Estacionamiento — Cajón 302",                en: "Parking — Space 302"                     },
        body:  { es: "Tu lugar está reservado. Utiliza únicamente este espacio para evitar cualquier inconveniente durante tu estancia.", en: "Your spot is reserved. Please use only this space to avoid any issues during your stay." },
      },
      {
        icon:  "🔇",
        title: { es: "Ambiente de descanso — 10:00 PM a 8:00 AM", en: "Quiet hours — 10:00 PM to 8:00 AM"       },
        body:  { es: "Este es un espacio pensado para el descanso. Mantén un volumen bajo durante la noche.",     en: "This is a space designed for rest. Please keep noise low during the night."                   },
      },
      {
        icon:  "🪟",
        title: { es: "Balcones y Ventanas",                        en: "Balconies and Windows"                   },
        body:  { es: "Ayúdanos a conservar la estética del condominio evitando colocar objetos visibles hacia el exterior.", en: "Help us preserve the building's appearance by avoiding placing visible objects facing outside." },
      },
      {
        icon:  "🔒",
        title: { es: "Acceso controlado",                          en: "Controlled access"                       },
        body:  { es: "El acceso está limitado a huéspedes registrados para mantener un entorno seguro y tranquilo.", en: "Access is limited to registered guests to maintain a safe and peaceful environment."       },
      },
    ],
    footer: { es: "Gracias por respetar estas reglas. Tu colaboración mantiene la experiencia cómoda para todos.", en: "Thank you for following these rules. Your cooperation keeps the experience comfortable for everyone." },
  },

  // ──────────────────────────────────────────────────────────────
  // 14. CHECKLIST DE SALIDA
  // ──────────────────────────────────────────────────────────────
  checkoutChecklist: [
    { es: "A/C y Luces apagadas",       en: "A/C and lights off"         },
    { es: "Basura en contenedores",     en: "Trash in containers"        },
    { es: "Ventanas y Balcón cerrados", en: "Windows and balcony closed" },
    { es: "Gas cerrado",                en: "Gas turned off"             },
    { es: "Sesión cerrada en Smart TV", en: "Signed out of Smart TV"     },
  ],

  // ──────────────────────────────────────────────────────────────
  // 15. SALIDA TARDÍA
  // ──────────────────────────────────────────────────────────────
  lateCheckout: {
    show:  true,
    icon:  "⏱️",
    title: { es: "Salida Tardía",  en: "Late Checkout" },
    body:  {
      es: "¿Necesitas un poco más de tiempo? Consúltanos vía WhatsApp el día anterior. Si no hay una reserva inmediata, nos encantará apoyarte.",
      en: "Need a little more time? Message us on WhatsApp the day before. If there's no immediate booking, we'll be happy to help.",
    },
  },

  // ──────────────────────────────────────────────────────────────
  // 16. COLORES DE MARCA
  // Estos valores sobreescriben las CSS variables --primary,
  // --primary-dark y --accent en runtime.
  // themeColor en property solo afecta el meta tag del navegador.
  // ──────────────────────────────────────────────────────────────
  colors: {
    primary:     null,   // ej: "#0284c7"
    primaryDark: null,   // ej: "#075985"
    accent:      null,   // ej: "#f59e0b"
  },

};
