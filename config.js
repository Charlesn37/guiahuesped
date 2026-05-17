const GUEST_CONFIG = {

  property: {
    name:        "Residencial Vista Aurora",
    tagline:     { es: "Experiencia Ejecutiva · Confort Total",                                               en: "Executive Experience · Total Comfort"                                          },
    description: { es: "Guía digital para huéspedes — acceso, reglas, servicios y asistencia en tiempo real.", en: "Digital guest guide — access, rules, services, and real-time support."       },
    language:    "es",
    themeColor:  "#0284c7",
  },

  ui: {
    welcomeHeader: { es: "Bienvenidos a",  en: "Welcome to"  },
    checkinLabel:       { es: "Llegada",         en: "Check-in"    },
    checkoutLabel:      { es: "Salida",          en: "Check-out"   },

    wifi: {
      connect:  { es: "Conectar a Wi-Fi (Copiar clave)",  en: "Connect to Wi-Fi (Copy password)" },
      copied:   { es: "¡Copiado! 🎉",                     en: "Copied! 🎉"                        },
      fallback: { es: "Clave:",                            en: "Password:"                         },
    },

    buttons: {
      location: { es: "Ubicación GPS", en: "GPS Location" },
      checkout:  { es: "Check-out",     en: "Check-out"    },
    },

    modal: {
      title:              { es: "Cierre de Estancia",                   en: "Checkout"                         },
      subtitle:           { es: "Confirma estos puntos antes de salir:", en: "Please confirm before leaving:"  },
      confirm:            { es: "Confirmar y continuar",                en: "Confirm and continue"             },
      stay:               { es: "Seguir aquí",                          en: "Stay here"                        },
      pendingError:       { es: "Falta(n) {n} punto(s) por confirmar.", en: "{n} item(s) still pending."      },
      experienceTitle:    { es: "¿Cómo fue tu experiencia?",            en: "How was your stay?"              },
      experienceSubtitle: { es: "Tu mensaje nos ayuda a mejorar.",      en: "Your feedback helps us improve." },
      excellent:          { es: "¡Excelente! Todo perfecto",            en: "Excellent! Everything was great" },
      suggestions:        { es: "Hubo detalles / sugerencias",          en: "Some details / suggestions"      },
    },

    whatsapp: {
      ariaLabel: { es: "Contactar al anfitrión por WhatsApp", en: "Contact host via WhatsApp" },
    },

    video: {
      closeLabel: { es: "Cerrar video", en: "Close video" },
    },

    checkout: {
      feedbackExcellent:   { es: "¡Excelente estancia! ⭐⭐⭐⭐",               en: "Excellent stay! ⭐⭐⭐⭐"              },
      feedbackSuggestions: { es: "Estancia buena, tengo algunas sugerencias.", en: "Good stay, I have some suggestions." },
      waMessage:           {
        es: "Hola! 👋 Confirmo mi salida de {id}.\n\n✅ Checklist completado.\n⭐ Feedback: {feedback}",
        en: "Hi! 👋 I'm checking out from {id}.\n\n✅ Checklist completed.\n⭐ Feedback: {feedback}",
      },
    },
  },

  schedule: {
    checkin:  "3:00 PM",
    checkout: "11:00 AM",
  },

  badge: [
    { label: { es: "Torre",  en: "Tower"  }, value: "B"      },
    { label: { es: "Depto",  en: "Unit"   }, value: "804"    },
    { label: { es: "Acceso", en: "Access" }, value: "A-8842" },
  ],

  contact: {
    whatsapp: "5213312345678",
    deptId:   "Vista Aurora 804",
  },

  wifi: {
    password: "Aurora2026VIP",
  },

  location: {
    googleMapsUrl: "https://maps.app.goo.gl/9D4PryH5XYgQPgAh9",
  },

  video: {
    youtubeId:   "APubdwLjOmQ",
    title:       { es: "Cómo acceder al departamento", en: "How to access the unit"    },
    buttonLabel: { es: "Ver acceso rápido (30 seg)",   en: "Quick access video (30s)"  },
    modalLabel:  { es: "Tutorial de acceso",           en: "Access tutorial"           },
    vertical:    true,
  },

  welcome: {
    show:  true,
    icon:  "👋",
    title: { es: "Bienvenido a Vista Aurora",                                                                                                                                                    en: "Welcome to Vista Aurora"                                                                                                                                    },
    body:  { es: "Hemos preparado este espacio para que tu estancia sea práctica, cómoda y sin fricción. Aquí encontrarás todo lo necesario en segundos.",                                       en: "We've prepared this space to make your stay smooth, comfortable, and effortless. Everything you need is right here."                                        },
    note:  { es: "Soporte disponible 24/7 vía WhatsApp.",                                                                                                                                        en: "24/7 support available via WhatsApp."                                                                                                                       },
  },

  waterSystem: {
    show:     true,
    icon:     "🚿",
    title:    { es: "Sistema de Agua Caliente",               en: "Hot Water System"           },
    subtitle: { es: "Configuración en menos de 20 segundos:", en: "Ready in under 20 seconds:" },
    steps: [
      { es: "Abre la llave de gas ubicada en el área de servicio.",            en: "Open the gas valve located in the service area."   },
      { es: "Gira la perilla del boiler a <strong>PILOTO</strong>.",           en: "Turn the boiler knob to <strong>PILOT</strong>."   },
      { es: "Mantén presionado el botón de encendido durante 10–15 segundos.", en: "Hold the ignition button for 10–15 seconds."       },
      { es: "Cambia a <strong>ENCENDIDO</strong>.",                            en: "Switch to <strong>ON</strong>."                    },
    ],
  },

  entertainment: {
    show:  true,
    icon:  "📺",
    title: { es: "Centro de Entretenimiento", en: "Entertainment Center" },
    body:  { es: "Smart TV con acceso a Netflix, YouTube y Prime Video. Puedes iniciar sesión con tu cuenta. <strong>Recuerda cerrarla antes de salir.</strong>",
             en: "Smart TV with Netflix, YouTube, and Prime Video. You can log in with your own account. <strong>Remember to sign out before leaving.</strong>" },
  },

  harmony: {
    show:  true,
    icon:  "📋",
    title: { es: "Normas del Residencial", en: "Community Rules" },
    items: [
      {
        icon:  "🏊",
        title: { es: "Alberca — 8:00 AM a 10:00 PM",    en: "Pool — 8:00 AM to 10:00 PM"    },
        body:  { es: "Uso exclusivo para residentes y huéspedes. No se permite música alta ni bebidas alcohólicas.", en: "Exclusive use for residents and guests. No loud music or alcoholic beverages." },
      },
      {
        icon:  "🏋️",
        title: { es: "Gimnasio — 6:00 AM a 11:00 PM",   en: "Gym — 6:00 AM to 11:00 PM"    },
        body:  { es: "Acceso con tarjeta. Limpia el equipo después de usarlo.",               en: "Card access required. Please clean equipment after use."                        },
      },
      {
        icon:  "🚗",
        title: { es: "Estacionamiento — #142",           en: "Parking — #142"                },
        body:  { es: "Espacio asignado. Evita ocupar lugares de visitantes.",                 en: "Assigned space. Please do not use visitor spots."                               },
      },
      {
        icon:  "🔇",
        title: { es: "Horario de silencio",              en: "Quiet hours"                   },
        body:  { es: "De 10:00 PM a 8:00 AM. Evita ruidos elevados.",                        en: "From 10:00 PM to 8:00 AM. Please keep noise to a minimum."                     },
      },
      {
        icon:  "👥",
        title: { es: "Visitas",                          en: "Visitors"                      },
        body:  { es: "Máximo 2 visitantes por huésped. Registro en recepción requerido.",     en: "Maximum 2 visitors per guest. Registration at reception required."              },
      },
    ],
    footer: { es: "El cumplimiento de estas normas garantiza una estancia óptima para todos.", en: "Following these rules ensures a great experience for everyone." },
  },

  checkoutChecklist: [
    { es: "Apagar luces y A/C",               en: "Turn off lights and A/C"       },
    { es: "Cerrar gas",                        en: "Turn off gas"                  },
    { es: "Depositar basura",                  en: "Take out trash"                },
    { es: "Cerrar puertas y ventanas",         en: "Close doors and windows"       },
    { es: "Verificar pertenencias personales", en: "Check personal belongings"     },
  ],

  lateCheckout: {
    show:  true,
    icon:  "⏱️",
    title: { es: "Extensión de estancia",                          en: "Late Checkout"                              },
    body:  { es: "Solicítala con anticipación. Sujeta a disponibilidad.", en: "Request in advance. Subject to availability." },
  },

  colors: {
    primary:     "#0284c7",
    primaryDark: "#020617",
    accent:      "#22c55e",
  },

};
