"use client";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-context";

interface ServiceDetail {
  id: string;
  icon: string;
  title: {
    es: string;
    en: string;
  };
  description?: {
    en: string;
    es: string;
  };
  price?: {
    en: string;
    es: string;
  };
  benefits?: {
    en: string[];
    es: string[];
  };
  frequency?: {
    en: string;
    es: string;
  };
}

const services: ServiceDetail[] = [
  {
    id: "inspection",
    icon: "/icons/1.png",
    title: {
      es: "Inspección submarina y registro fílmico",
      en: "Underwater inspection and video recording",
    },
    description: {
      en: "Hull cleaning service (bottom and running gear). Visual inspection included at no extra cost.\n\nService without maintenance: $150\n\n---\n\nUnderwater Inspection & Video Recording – Why It Matters\n\nRegular underwater inspections are essential to maintain the safety, performance, and value of your vessel. Many critical components of a boat remain out of sight below the waterline, where damage and deterioration can go unnoticed until they become serious and costly problems.\n",
      es: "Servicio de limpieza del casco (fondo y equipo de gobierno). Inspección visual incluida sin costo adicional.\n\nServicio sin mantenimiento: $150\n\n---\n\nInspección submarina y registro fílmico – Importancia del servicio\n\nLa inspección submarina periódica es clave para mantener la seguridad, el rendimiento y el valor de su embarcación. Muchas partes críticas del barco se encuentran bajo el agua, fuera de la vista, donde los daños pueden pasar desapercibidos hasta convertirse en problemas graves y costosos.\n",
    },
    price: {
      en: "Service without maintenance: $150",
      es: "Servicio sin mantenimiento: $150",
    },
    benefits: {
      en: [
        "⚠️ Early Detection of Problems - Cracks, corrosion, loose fittings, damaged propellers, worn zinc anodes, and marine growth can be identified before they lead to mechanical failure or structural damage.",
        "🚤 Improved Performance & Efficiency - A fouled hull or damaged running gear increases drag, fuel consumption, and vibration. Inspection allows timely maintenance that keeps your boat running smoother and more efficiently.",
        "🛠️ Prevent Costly Repairs - Small issues underwater can quickly turn into major repairs if ignored. Routine inspections help prevent expensive haul-outs and emergency fixes.",
        "📸 Visual Proof & Transparency - Photo and video documentation provides clear evidence of the condition of your hull and underwater components, giving you confidence and full transparency about the work needed or completed.",
        "🔒 Safety & Peace of Mind - Knowing the true condition of what's happening below the surface reduces the risk of unexpected failures at sea and increases overall safety for you and your crew.",
      ],
      es: [
        "⚠️ Detección temprana de problemas - Grietas, corrosión, piezas flojas, daños en hélices, desgaste de ánodos y acumulación de incrustaciones pueden detectarse a tiempo.",
        "🚤 Mejor rendimiento y eficiencia - Un casco sucio o componentes dañados aumentan la fricción, el consumo de combustible y las vibraciones.",
        "🛠️ Prevención de reparaciones costosas - Pequeños daños bajo el agua pueden convertirse en grandes averías si no se atienden a tiempo.",
        "📸 Evidencia visual y transparencia - Fotos y videos permiten al propietario ver el estado real del casco y las partes sumergidas.",
        "🔒 Seguridad y tranquilidad - Conocer el estado real de su embarcación bajo el agua reduce riesgos y aumenta la seguridad en navegación.",
      ],
    },
    frequency: {
      en: "Recommended Frequency: Periodic inspections are recommended every few months or before long trips, after groundings, or if unusual vibrations, noise, or performance changes are noticed.",
      es: "Frecuencia recomendada: Se recomienda realizar inspecciones periódicas cada pocos meses o antes de viajes largos, después de encallar, o si se notan vibraciones, ruidos o cambios de rendimiento inusuales.",
    },
  },
  {
    id: "hull-cleaning",
    icon: "/icons/2.png",
    title: {
      es: "Limpieza del casco del barco(obra viva)",
      en: "Hull cleaning (running gear and bottom)",
    },
    description: {
      en: "Hull cleaning service (bottom and running gear). Visual inspection included at no extra cost.",
      es: "Servicio de limpieza del casco (fondo y equipo de gobierno). Inspección visual incluida sin costo adicional.",
    },
    price: {
      en: "Service without maintenance: $150",
      es: "Servicio sin mantenimiento: $150",
    },
    benefits: {
      en: [
        "✨ Complete hull cleaning from bow to stern",
        "✨ Removal of marine growth, algae, and barnacles",
        "✨ Cleaning of running gear (propellers, shafts, rudders)",
        "✨ Visual inspection included at no extra cost",
        "✨ Improved boat performance and fuel efficiency",
      ],
      es: [
        "✨ Limpieza completa del casco de proa a popa",
        "✨ Eliminación de incrustaciones, algas y percebes",
        "✨ Limpieza del equipo de gobierno (hélices, ejes, timones)",
        "✨ Inspección visual incluida sin costo adicional",
        "✨ Mejor rendimiento y eficiencia de combustible",
      ],
    },
  },
  {
    id: "anodes",
    icon: "/icons/3.png",
    title: {
      es: "Reemplazo de ánodos de sacrificio (zincs)",
      en: "Replacement of sacrificial anodes (zincs)",
    },
    description: {
      en: "We replace worn or depleted sacrificial anodes (zincs) to protect your boat's metal components from galvanic corrosion. This essential maintenance extends the life of your underwater hardware.",
      es: "Reemplazamos ánodos de sacrificio gastados o agotados para proteger los componentes metálicos de su embarcación contra la corrosión galvánica. Este mantenimiento esencial extiende la vida útil de su equipo subacuático.",
    },
    benefits: {
      en: [
        "🛡️ Protection against galvanic corrosion",
        "✨ Extended life of underwater hardware",
        "🔧 Professional assessment of anode condition",
        "⚡ Proper grounding system maintenance",
      ],
      es: [
        "🛡️ Protección contra corrosión galvánica",
        "✨ Vida útil prolongada del equipo subacuático",
        "🔧 Evaluación profesional del estado de los ánodos",
        "⚡ Mantenimiento adecuado del sistema de puesta a tierra",
      ],
    },
  },
  {
    id: "propeller",
    icon: "/icons/4.png",
    title: {
      es: "Ajuste y reemplazo de hélice",
      en: "Propeller adjustment and replacement",
    },
    description: {
      en: "We provide propeller maintenance services including adjustment, repair, and replacement. A properly functioning propeller ensures optimal performance and reduces vibration.",
      es: "Brindamos servicios de mantenimiento de hélices incluyendo ajuste, reparación y reemplazo. Una hélice funcionando correctamente asegura un rendimiento óptimo y reduce las vibraciones.",
    },
    benefits: {
      en: [
        "⚙️ Propeller adjustment and alignment",
        "🔧 Repair of damaged propeller blades",
        "🆕 Propeller replacement services",
        "🚤 Reduced vibration and improved performance",
      ],
      es: [
        "⚙️ Ajuste y alineación de hélices",
        "🔧 Reparación de palas de hélices dañadas",
        "🆕 Servicios de reemplazo de hélices",
        "🚤 Reducción de vibraciones y mejor rendimiento",
      ],
    },
  },
  {
    id: "installation",
    icon: "/icons/5.png",
    title: {
      es: "Instalación submarina de luces, estabilizadores, tomas de fondo y otros accesorios.",
      en: "Underwater installation of lights, stabilizers, thru-hulls, and other fittings",
    },
    description: {
      en: "Professional installation of underwater equipment including lights, stabilizers, thru-hulls, sea cocks, and other fittings. We ensure proper sealing and installation.",
      es: "Instalación profesional de equipos subacuáticos incluyendo luces, estabilizadores, tomas de fondo, válvulas de mar y otros accesorios. Aseguramos un sellado e instalación adecuados.",
    },
    benefits: {
      en: [
        "💡 Underwater lighting installation",
        "🔧 Stabilizer installation and repair",
        "🔩 Thru-hull fitting installation",
        "✅ Proper sealing and watertight integrity",
      ],
      es: [
        "💡 Instalación de iluminación subacuática",
        "🔧 Instalación y reparación de estabilizadores",
        "🔩 Instalación de tomas de fondo",
        "✅ Sellado adecuado e integridad hermética",
      ],
    },
  },
  {
    id: "docks",
    icon: "/icons/6.png",
    title: {
      es: "Limpieza y mantenimiento de pilotes y estructuras de muelles.",
      en: "Cleaning and maintenance of dock pilings and marine structures",
    },
    description: {
      en: "We clean and maintain dock pilings, marine structures, and seawalls. Remove marine growth and maintain structural integrity.",
      es: "Limpiamos y mantenemos pilotes de muelle, estructuras marinas y muros de contención. Eliminamos incrustaciones y mantenemos la integridad estructural.",
    },
    benefits: {
      en: [
        "🧹 Removal of marine growth and algae",
        "🛡️ Structural inspection and maintenance",
        "🔧 Repair of damaged pilings",
        "✨ Clean and maintained appearance",
      ],
      es: [
        "🧹 Eliminación de incrustaciones y algas",
        "🛡️ Inspección y mantenimiento estructural",
        "🔧 Reparación de pilotes dañados",
        "✨ Apariencia limpia y mantenida",
      ],
    },
  },
  {
    id: "recovery",
    icon: "/icons/7.png",
    title: {
      es: "Recuperación de objetos sumergidos.",
      en: "Underwater object recovery",
    },
    description: {
      en: "We recover lost items from the water including anchors, equipment, personal belongings, and more. Our team uses specialized equipment for efficient recovery.",
      es: "Recuperamos objetos perdidos en el agua incluyendo anclas, equipos, pertenencias personales y más. Nuestro equipo usa equipos especializados para una recuperación eficiente.",
    },
    benefits: {
      en: [
        "⚓ Recovery of lost anchors and chains",
        "📦 Retrieval of fallen equipment",
        "💎 Location and recovery of valuable items",
        "🔍 Systematic search and recovery process",
      ],
      es: [
        "⚓ Recuperación de anclas y cadenas perdidas",
        "📦 Recuperación de equipos caídos",
        "💎 Localización y recuperación de objetos valiosos",
        "🔍 Proceso sistemático de búsqueda y recuperación",
      ],
    },
  },
  {
    id: "additional",
    icon: "/icons/8.png",
    title: {
      es: "Servicios submarinos adicionales bajo solicitud.",
      en: "Additional underwater services upon request",
    },
    description: {
      en: "We offer a wide range of additional underwater services tailored to your specific needs. Contact us to discuss your requirements.",
      es: "Ofrecemos una amplia gama de servicios submarinos adicionales adaptados a sus necesidades específicas. Contáctenos para discutir sus requisitos.",
    },
    benefits: {
      en: [
        "📋 Customized services for specific needs",
        "💬 Consultations for special projects",
        "🔧 Specialized underwater work",
        "✅ Quality guarantee on all services",
      ],
      es: [
        "📋 Servicios personalizados para necesidades específicas",
        "💬 Consultas para proyectos especiales",
        "🔧 Trabajo subacuático especializado",
        "✅ Garantía de calidad en todos los servicios",
      ],
    },
  },
];

const serviceImages = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/10.jpeg",
  "/images/11.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  "/images/15.jpeg",
  "/images/16.jpeg",
  "/images/17.jpeg",
  "/images/18.jpeg",
  "/images/19.jpeg",
  "/images/20.jpeg",
  "/images/21.jpeg",
  "/images/22.jpeg",
  "/images/23.jpeg",
  "/images/24.jpeg",
  "/images/25.jpeg",
  "/images/26.jpeg",
  "/images/27.jpeg",
  "/images/28.jpeg",
  "/images/29.jpeg",
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );
  const { language } = useLanguage();

  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % serviceImages.length;
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-60 pb-30 md:pt-80 md:pb-40"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Underwater background"
          fill
          priority
          className="hidden md:block object-cover"
        />
        <Image
          src="/hero-mobile.jpeg"
          alt="Underwater background"
          fill
          priority
          className="object-cover md:hidden"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-1"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-xs md:text-base ">
          {/* Services List - Left Side */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="w-full flex items-start gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-left"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors overflow-hidden">
                  <Image
                    src={service.icon}
                    alt=""
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black/90 leading-snug pt-2 pl-1">
                    <span className="text-black/60 font-bold mr-2">
                      {index + 1}.
                    </span>
                    {service.title[language]}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Rotating Images - Right Side */}
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl bg-slate-950">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Service image ${index + 1}`}
                  fill
                  className="object-contain"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {serviceImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Header */}
            <div className="p-6 pb-4 border-b">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedService.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedService.title[language]}
                </h2>
              </div>
              {selectedService.price && (
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg">
                  <span className="text-blue-700 font-semibold">
                    {selectedService.price[language]}
                  </span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-6 pt-4">
              {/* Description */}
              {selectedService.description && (
                <div className="mb-6">
                  <p className="text-gray-600 whitespace-pre-line">
                    {selectedService.description[language]}
                  </p>
                </div>
              )}

              {/* Benefits */}
              {selectedService.benefits && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === "en"
                      ? "Why should this service be done?"
                      : "¿Por qué se debe realizar este servicio?"}
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.benefits[
                      language === "en" ? "en" : "es"
                    ].map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Frequency */}
              {selectedService.frequency && (
                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600">
                    {selectedService.frequency[language]}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 border-t flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {language === "en" ? "Close" : "Cerrar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
