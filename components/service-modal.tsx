"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export interface ServiceDetail {
  id: string;
  icon: string;
  title: {
    es: string;
    en: string;
  };
  modalTitle?: {
    es: string;
    en: string;
  };
  benefitsTitle?: {
    es: string;
    en: string;
  };
  description?: {
    en: string;
    es: string;
  };
  pricing?: {
    en: { number: string; text: string }[];
    es: { number: string; text: string }[];
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

export const services: ServiceDetail[] = [
  {
    id: "inspection",
    icon: "/icons/1.png",
    title: {
      es: "Inspección submarina y registro fílmico",
      en: "Underwater Inspection & Video Recording – Why It Matters",
    },
    benefitsTitle: {
      es: "¿Por qué deberia realizar este servicio?",
      en: "Why should this service be done?",
    },
    description: {
      en: "Hull cleaning service (bottom and running gear). Visual inspection included at no extra cost.\n\nService without maintenance: $150\n\n\nUnderwater Inspection & Video Recording – Why It Matters\n\nRegular underwater inspections are essential to maintain the safety, performance, and value of your vessel. Many critical components of a boat remain out of sight below the waterline, where damage and deterioration can go unnoticed until they become serious and costly problems.\n",
      es: "Servicio de limpieza del casco (fondo y equipo de gobierno). Inspección visual incluida sin costo adicional.\n\nServicio sin mantenimiento: $150\n\n\nInspección submarina y registro fílmico – Importancia del servicio\n\nLa inspección submarina periódica es clave para mantener la seguridad, el rendimiento y el valor de su embarcación. Muchas partes críticas del barco se encuentran bajo el agua, fuera de la vista, donde los daños pueden pasar desapercibidos hasta convertirse en problemas graves y costosos.\n",
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
  },
  {
    id: "hull-cleaning",
    icon: "/icons/2.png",
    title: {
      es: "Limpieza del casco del barco(obra viva)",
      en: "Hull cleaning (running gear and bottom)",
    },
    modalTitle: {
      es: "Limpieza del casco (obra viva) – Importancia del servicio",
      en: "Hull Cleaning (Underwater Hull Maintenance) – Why It's Essential",
    },
    benefitsTitle: {
      es: "¿Por qué es necesario este servicio?",
      en: "Why is hull cleaning necessary?",
    },
    description: {
      en: "Regular hull cleaning is one of the most important maintenance services for any vessel. Marine growth such as algae, slime, and barnacles quickly accumulate on the hull (below the waterline), creating drag that directly affects your boat's performance, fuel efficiency, and overall operating costs.",
      es: "La limpieza periódica del casco es uno de los mantenimientos más importantes para cualquier embarcación. Las algas, limo y percebes se adhieren rápidamente al casco bajo la línea de flotación, generando resistencia que afecta directamente el rendimiento, el consumo de combustible y los costos de operación.",
    },
    pricing: {
      en: [
        {
          number: "1",
          text: "Remove rust stains from fittings near the waterline (Free)",
        },
        { number: "2", text: "Hull cleaning $4 per foot" },
        { number: "3", text: "Sterndrive $20 each" },
        { number: "4", text: "Hydraulic platform $50" },
      ],
      es: [
        {
          number: "1",
          text: "Quitar manchas de óxido a los accesorios cerca de la línea de flotación (Free).",
        },
        { number: "2", text: "Limpieza del casco del barco $4 ft." },
        { number: "3", text: "Sterndrive $20 cada uno." },
        { number: "4", text: "Plataforma hidráulica $50." },
      ],
    },
    benefits: {
      en: [
        "⚡ Improves Performance & Speed - A clean hull reduces hydrodynamic drag, allowing the boat to move more smoothly through the water. This results in better acceleration, higher top speed, and more stable handling.",
        "⛽ Reduces Fuel Consumption - Marine fouling forces engines to work harder. A dirty hull can increase fuel consumption significantly. Regular cleaning helps lower fuel costs and engine wear.",
        "🧰 Protects the Hull & Running Gear - Barnacles and hard growth can damage hull coatings, propellers, shafts, and intakes over time. Routine cleaning prevents long-term surface damage and corrosion.",
        "💰 Prevents Costly Haul-Outs & Repairs - Keeping the hull clean in the water extends the life of antifouling paint and reduces the need for frequent haul-outs, saving time and money.",
        "🔍 Early Detection of Underwater Issues - During cleaning, potential problems such as loose fittings, damaged paint, worn anodes, or small cracks can be spotted early before they become major repairs.",
      ],
      es: [
        "⚡ Mejora el rendimiento y la velocidad - Un casco limpio reduce la fricción con el agua, permitiendo que el barco se desplace con mayor suavidad y eficiencia.",
        "⛽ Reduce el consumo de combustible - La suciedad obliga al motor a trabajar más, aumentando el gasto de combustible.",
        "🧰 Protege el casco y componentes - Las incrustaciones pueden dañar la pintura antifouling, hélices, ejes y tomas de agua.",
        "💰 Evita gastos mayores - Mantener el casco limpio prolonga la vida útil de los recubrimientos y reduce la necesidad de sacar el barco del agua con frecuencia.",
        "🔍 Detección temprana de problemas - Durante la limpieza se pueden identificar daños, piezas flojas o desgaste de ánodos a tiempo.",
      ],
    },
    frequency: {
      en: "Recommended Frequency: Hull cleaning is recommended every 4 to 8 weeks depending on water conditions, usage, and marina environment.",
      es: "Frecuencia recomendada: Cada 4 a 8 semanas, dependiendo del uso del barco y las condiciones del agua.",
    },
  },
  {
    id: "anodes",
    icon: "/icons/3.png",
    title: {
      es: "Reemplazo de ánodos de sacrificio (zincs)",
      en: "Replacement of sacrificial anodes (zincs)",
    },
    modalTitle: {
      es: "Reemplazo de ánodos de sacrificio (Zincs) – Importancia del servicio",
      en: "Sacrificial Anode (Zincs) Replacement – Why It's Critical",
    },
    benefitsTitle: {
      es: "¿Por qué es necesario el reemplazo de ánodos?",
      en: "Why is anode replacement necessary?",
    },
    pricing: {
      en: [
        { number: "1", text: "With bottom cleaning $15 each" },
        { number: "2", text: "No with bottom cleaning $30 each" },
        { number: "3", text: "Sterndrive boat engine zincs $30 each" },
      ],
      es: [
        { number: "1", text: "Con limpieza del casco $15 cada uno" },
        { number: "2", text: "Sin limpieza del casco $30 cada uno" },
        { number: "3", text: "Ánodos de motor sterndrive $30 cada uno" },
      ],
    },
    description: {
      en: 'Sacrificial anodes (commonly known as "zincs") are a vital protection system for any boat. Their function is to prevent galvanic corrosion by sacrificing themselves to protect your vessel\'s underwater metal components such as propellers, shafts, trim tabs, through-hulls, and engine parts.',
      es: "Los ánodos de sacrificio (“zincs”) son un sistema de protección esencial para cualquier embarcación. Su función es proteger los metales sumergidos del barco contra la corrosión galvánica, sacrificándose ellos mismos para evitar que hélices, ejes, timones, tomas de fondo y componentes del motor se deterioren.",
    },
    benefits: {
      en: [
        "🛡️ Prevents Galvanic Corrosion - In saltwater and brackish water, electrical currents naturally form between different metals. Zincs absorb this corrosion, protecting critical and expensive components from deteriorating.",
        "⚡ Protects Expensive Underwater Components - Without properly functioning anodes, corrosion attacks propellers, shafts, rudders, trim tabs, and metal fittings—leading to premature failure and costly replacements.",
        "💸 Avoids Major Repair Costs - Replacing worn zincs is inexpensive compared to repairing corroded underwater hardware or engine cooling components.",
        "🔍 Ensures Your Protection System Is Working - During replacement, the condition of underwater metals can be inspected, detecting early signs of corrosion, loose fittings, or electrical issues.",
        "🌊 Essential in Marinas with Shore Power - Boats connected to shore power or located in marinas are at higher risk of galvanic corrosion due to stray electrical currents. Proper anode maintenance is especially critical in these environments.",
      ],
      es: [
        "🛡️ Previene la corrosión galvánica - En el agua salada o salobre se generan corrientes eléctricas entre metales diferentes. Los zincs absorben esa corrosión.",
        "⚡ Protege componentes subacuáticos costosos - Sin ánodos en buen estado, la corrosión ataca directamente las piezas metálicas del barco.",
        "💸 Evita reparaciones mayores - Cambiar zincs es económico comparado con reemplazar hélices, ejes o componentes corroídos.",
        "🔍 Verificación del sistema de protección - Durante el reemplazo se revisa el estado general de los metales sumergidos.",
        "🌊 Clave en marinas con conexión eléctrica - Las embarcaciones conectadas a corriente en muelles están más expuestas a la corrosión galvánica.",
      ],
    },
    frequency: {
      en: "Recommended Frequency: Anodes should be inspected regularly and typically replaced when they are 50% worn, often every 3 to 6 months depending on water conditions and electrical exposure.",
      es: "Frecuencia recomendada: Revisar periódicamente y reemplazar cuando estén desgastados en un 50%, generalmente cada 3 a 6 meses según las condiciones del agua.",
    },
  },
  {
    id: "propeller",
    icon: "/icons/4.png",
    title: {
      es: "Ajuste y reemplazo de hélice",
      en: "Propeller adjustment and replacement",
    },
    modalTitle: {
      es: "Ajuste y reemplazo de hélices – Importancia del servicio",
      en: "Propeller Adjustment & Replacement – Why It's Important",
    },
    pricing: {
      en: [
        { number: "1", text: "Propeller removal: $12.50 per inch of diameter" },
        {
          number: "2",
          text: "Propeller installation: $12.50 per inch of diameter",
        },
        { number: "3", text: "Members: 50% discount" },
      ],
      es: [
        {
          number: "1",
          text: "Desmontaje de hélice: $12.50 por pulgada de diámetro.",
        },
        {
          number: "2",
          text: "Montaje de hélice: $12.50 por pulgada de diámetro. ",
        },
        { number: "3", text: "Para miembros: 50% de descuento." },
      ],
    },
    description: {
      en: "The propeller is one of the most critical components of your vessel's propulsion system. Even minor damage or misalignment can significantly affect performance, fuel efficiency, and cause harmful vibrations that lead to further mechanical issues.",
      es: "La hélice es uno de los componentes más importantes del sistema de propulsión del barco. Incluso daños pequeños o desajustes pueden afectar notablemente el rendimiento, el consumo de combustible y generar vibraciones que provocan daños mecánicos mayores.",
    },
    benefitsTitle: {
      es: "¿Por qué es necesario este servicio?",
      en: "Why is propeller adjustment and replacement necessary?",
    },
    benefits: {
      en: [
        "🚤 Restores Performance & Smooth Operation - Bent, nicked, or unbalanced propellers create vibration, reduce thrust, and strain the drivetrain. Proper adjustment or replacement restores smooth, efficient propulsion.",
        "⛽ Improves Fuel Efficiency - Damaged propellers increase engine load and fuel consumption. A properly tuned propeller helps your engine operate at optimal efficiency.",
        "🔧 Prevents Mechanical Damage - Continuous vibration from a damaged propeller can cause premature wear to bearings, seals, shafts, and transmissions. Early correction helps avoid costly mechanical failures.",
        "🧭 Ensures Safe Handling & Control - Propeller issues can affect maneuverability, acceleration, and stopping power—especially critical when docking or navigating in tight marinas.",
        "🔍 Early Detection of Underwater Impacts - Many propeller damages occur from minor groundings or submerged debris. Regular inspection allows issues to be identified and corrected before they worsen.",
      ],
      es: [
        "🚤  Recupera el rendimiento y la suavidad de marcha - Hélices dobladas o desbalanceadas generan vibraciones y pérdida de empuje.",
        "⛽ Mejora la eficiencia del combustible - Una hélice dañada obliga al motor a trabajar más, aumentando el consumo.",
        "🔧 Previene daños mecánicos - Las vibraciones continuas afectan sellos, ejes, rodamientos y transmisiones.",
        "🧭 Mayor control y seguridad en maniobras - Problemas en la hélice reducen la capacidad de maniobra, especialmente en muelles y espacios reducidos.",
        "🔍 Detección de impactos bajo el agua - Golpes con objetos sumergidos o encalladuras leves pueden dañar la hélice sin que el propietario lo note.",
      ],
    },
    frequency: {
      en: "Recommended Frequency: Propellers should be inspected periodically, after any grounding or impact, or if unusual vibration, noise, or loss of performance is noticed.",
      es: "Frecuencia recomendada: Revisión periódica, después de cualquier golpe o si se perciben vibraciones, ruidos o pérdida de potencia.",
    },
  },
  {
    id: "installation",
    icon: "/icons/5.png",
    title: {
      es: "Instalación submarina de luces, estabilizadores, tomas de fondo y otros accesorios.",
      en: "Underwater installation of lights, stabilizers, thru-hulls, and other fittings",
    },
    modalTitle: {
      es: "Instalación submarina de accesorios – Importancia del servicio",
      en: "Underwater Installation of Accessories – Why It's a Smart Choice",
    },
    pricing: {
      en: [
        { number: "1", text: "Light replacement (2): $200. Members $150" },
        { number: "2", text: "Transducer installation: $200. Members $150" },
        { number: "3", text: "Intake grate installation $200. Members $150" },
        { number: "4", text: "Trimtab replacement: $250. Members $150" },
        { number: "5", text: "Trimtab hinge replacement: $150. Members $80" },
        {
          number: "6",
          text: "Trimtab actuator replacement(2): $200. Members $150",
        },
        {
          number: "7",
          text: "Trimtab hole drilling plus zinc: $200. Members $150",
        },
        {
          number: "8",
          text: "Thruster propeller replacement: $150. Members $80",
        },
        { number: "9", text: "Ladder replacement $200. Members $150" },
      ],
      es: [
        { number: "1", text: "Reemplazo de luces (2): $200. Miembros $150" },
        {
          number: "2",
          text: "Instalación de transducer: $200. Miembros $150",
        },
        {
          number: "3",
          text: "Instalación de rejilla de admisión $200. Miembros $150",
        },
        {
          number: "4",
          text: "Remplazo del estabilizador $250. Miembros $150.",
        },
        {
          number: "5",
          text: "Remplazo de la bisagra del estabilizador $150. Miembros $80.",
        },
        {
          number: "6",
          text: "Remplazo del actuador del estabilizador (2) $200. Miembros $150.",
        },
        {
          number: "7",
          text: "Perforación de agujero del estabilizador más el zinc $200. Miembros $150.",
        },
        {
          number: "8",
          text: "Sustitución de la hélice del truster $150. Miembros $80.",
        },
        { number: "9", text: "Sustitución de escalera $200. Miembros $150." },
      ],
    },
    description: {
      en: "Many modern marine upgrades can be installed without removing the vessel from the water. Underwater installation of accessories allows owners to enhance functionality, safety, and aesthetics while saving time and avoiding costly haul-outs.",
      es: "Muchas mejoras modernas pueden instalarse sin sacar la embarcación del agua. La instalación submarina de accesorios permite mejorar la funcionalidad, la seguridad y la estética del barco ahorrando tiempo y evitando costos de varada.",
    },
    benefitsTitle: {
      es: "¿Por qué es beneficioso este servicio?",
      en: "Why is underwater installation beneficial?",
    },
    benefits: {
      en: [
        "⛴️ No Haul-Out Required (Save Time & Money) - Installing accessories in the water eliminates the need to take the boat out of the water, reducing marina fees, downtime, and scheduling delays.",
        "⏱️ Faster Upgrades with Minimal Disruption - Services such as installing underwater lights, transducers, intakes, stabilizers, or other fittings can often be completed quickly, keeping your vessel operational.",
        "🔧 Professional Sealing & Proper Fitment - Correct underwater installation ensures through-hulls and accessories are properly sealed and aligned, reducing the risk of leaks and future failures.",
        "🛥️ Enhances Safety & Functionality - Properly installed underwater components improve navigation, visibility, cooling efficiency, and onboard systems performance.",
        "🔍 Inspection During Installation - While installing accessories, surrounding areas can be inspected for corrosion, loose fittings, or wear, adding preventive value to the service.",
      ],
      es: [
        "⛴️ No requiere sacar el barco del agua - Evita gastos de grúas, varadas y tiempos muertos.",
        "⏱️  Instalaciones rápidas y sin interrupciones - Luces submarinas, transductores, tomas de fondo, estabilizadores y otros accesorios pueden instalarse con mínima molestia para el propietario.",
        "🔧 Sellado profesional y ajuste correcto - Una instalación adecuada reduce el riesgo de filtraciones y fallos futuros.",
        "🛥️ Mejora la seguridad y funcionalidad - Los accesorios bien instalados optimizan la navegación, la visibilidad y el funcionamiento de sistemas del barco.",
        "🔍 Inspección preventiva durante la instalación - Se revisan áreas cercanas para detectar corrosión o desgaste.",
      ],
    },
    frequency: {
      en: "Recommended Use: Ideal for adding or upgrading underwater lights, transducers, intakes, stabilizers, and other submerged accessories without interrupting your boating schedule.",
      es: "Uso recomendado: Ideal para instalar o actualizar luces submarinas, tomas de fondo, sensoresestabilizadores y otros accesorios sin afectar la disponibilidad de la embarcación.",
    },
  },
  {
    id: "docks",
    icon: "/icons/6.png",
    title: {
      es: "Limpieza y mantenimiento de pilotes y estructuras de muelles.",
      en: "Cleaning and maintenance of dock pilings and marine structures",
    },
    modalTitle: {
      es: "Limpieza y mantenimiento de pilotes y estructuras de muelles.",
      en: "Dock Pilings & Marine Structures – Specialized Services",
    },
    pricing: {
      en: [
        { number: "1", text: "Dock piling cleaning: $50 each" },
        {
          number: "2",
          text: "Piling coating and cleaning (including all materials): $150 each",
        },
        { number: "3", text: "Dock ladder cleaning: $70, monthly $40" },
      ],
      es: [
        { number: "1", text: "Limpieza de pilotes de muelle $50 cada uno." },
        {
          number: "2",
          text: "Revestimiento y limpieza de pilotes incluyendo todo el material $150 cada uno.",
        },
        {
          number: "3",
          text: "Limpieza de escalera del muelle $70, mensualmente $40.",
        },
      ],
    },
    description: {
      en: "Dock pilings and marina structures are constantly exposed to marine growth, corrosion, and environmental wear. Regular underwater cleaning and maintenance help preserve structural integrity, improve safety, and extend the lifespan of docks and waterfront facilities.",
      es: "Los pilotes y estructuras de muelles están constantemente expuestos al crecimiento marino, la corrosión y el desgaste ambiental. La limpieza y el mantenimiento submarino ayudan a preservar la integridad estructural, mejorar la seguridad y prolongar la vida útil de las instalaciones.",
    },
    benefitsTitle: {
      es: "¿Por qué es necesario este servicio?",
      en: "Why is dock and piling cleaning necessary?",
    },
    benefits: {
      en: [
        "🧱 Preserves Structural Integrity - Marine growth and fouling accelerate deterioration of pilings and underwater hardware. Routine cleaning helps prevent long-term damage to wood, concrete, and metal structures.",
        "⚠️ Improves Safety Around the Dock - Barnacles and sharp marine growth create hazardous surfaces that can cause cuts, damage to hulls, and injuries to swimmers or divers. Keeping pilings clean reduces these risks.",
        "🌿 Prevents Excessive Marine Build-Up - Heavy fouling increases weight and stress on dock components and can hide cracks, corrosion, or fastener failures. Cleaning allows for early detection of issues.",
        "🛠️ Reduces Long-Term Maintenance Costs - Preventive underwater maintenance extends the service life of dock infrastructure and helps avoid costly repairs or replacements.",
        "🔍 Improves Inspection Visibility - Clean structures make it easier to inspect for damage, loose hardware, erosion, and other underwater problems that may compromise dock stability.",
      ],
      es: [
        "🧱 Preserva la integridad estructural - Las incrustaciones marinas aceleran el deterioro de madera, concreto y metales.",
        "⚠️ Mejora la seguridad en el muelle - Percebes y superficies filosas representan un riesgo de cortes, daños al casco y accidentes.",
        "🌿 Evita acumulación excesiva de incrustaciones - El crecimiento pesado añade peso y oculta grietas, corrosión o tornillería suelta.",
        "🛠️ Reduce costos de mantenimiento a largo plazo - El mantenimiento preventivo evita reparaciones mayores o reemplazos prematuros.",
        "🔍 Facilita la inspección de las estructuras - Con superficies limpias es más fácil detectar daños bajo el agua.",
      ],
    },
    frequency: {
      en: "Recommended Frequency: Cleaning frequency depends on water conditions and marina activity, but periodic maintenance is recommended to keep structures safe and in good condition year-round.",
      es: "Frecuencia recomendada:Depende de las condiciones del agua y el entorno del muelle, pero se recomienda mantenimiento periódico durante el año.",
    },
  },
  {
    id: "recovery",
    icon: "/icons/7.png",
    title: {
      es: "Recuperación de objetos sumergidos.",
      en: "Underwater object recovery",
    },
    modalTitle: {
      es: "Recuperación de objetos sumergidos – Importancia del servicio.",
      en: "Underwater Object Recovery – Why It's Valuable",
    },
    pricing: {
      en: [
        { number: "1", text: "Object search and recovery: $150. Members $80" },
      ],
      es: [
        {
          number: "1",
          text: "Búsqueda y recuperación de objetos $150. Miembros $80.",
        },
      ],
    },
    description: {
      en: "Losing objects in the water is more common than people think—tools, equipment, anchors, propellers, keys, or personal items can easily slip overboard. Professional underwater recovery services increase the chances of locating and safely retrieving valuable or critical items without risking personal safety.",
      es: "La pérdida de objetos en el agua es más común de lo que parece: herramientas, anclas, piezas, llaves, equipos o pertenencias personales pueden caer fácilmente al fondo. La recuperación profesional aumenta las probabilidades de localizarlos y extraerlos de forma segura.",
    },
    benefitsTitle: {
      es: "¿Por qué es importante la recuperación profesional?",
      en: "Why is professional recovery important?",
    },
    benefits: {
      en: [
        "🎯 Higher Success Rate - Trained divers use proper search techniques and equipment to locate items even in low visibility, currents, or muddy bottoms—conditions that make self-recovery difficult or unsafe.",
        "🔒 Safety First - Attempting to retrieve objects without proper training or equipment can be dangerous due to poor visibility, entanglement hazards, boat traffic, and underwater obstacles. Professional recovery minimizes these risks.",
        "💎 Saves Valuable Equipment - Many lost items are expensive or critical for vessel operation (anchors, props, tools, electronics). Recovery can save significant replacement costs.",
        "🌊 Prevents Environmental Hazards - Removing debris and equipment from the water helps keep marinas and waterways safer and cleaner for other boaters, swimmers, and marine life.",
        "🔍 Fast Response in Time-Sensitive Situations - Quick recovery reduces the chance of items being buried in sediment, swept away by currents, or damaged by corrosion.",
      ],
      es: [
        "🎯 Mayor probabilidad de éxito - Buceadores entrenados utilizan técnicas y equipos adecuados para buscar en condiciones de baja visibilidad o corrientes.",
        "🔒 Prioriza la seguridad - Intentar recuperar objetos sin experiencia puede ser peligroso por la visibilidad limitada, obstáculos y tráfico de embarcaciones.",
        "💎 Ahorra dinero en reemplazos - Muchos objetos son costosos o esenciales para la operación del barco.",
        "🌊 Reduce riesgos ambientales - Retirar objetos del fondo ayuda a mantener marinas y canales más seguros y limpios.",
        "🔍  Respuesta rápida en casos urgentes - Actuar rápido evita que el objeto se entierre, se desplace por la corriente o se deteriore.",
      ],
    },
    frequency: {
      en: "Recommended Use: Ideal for recovering dropped tools, anchors, chains, props, mooring hardware, personal items, or any object lost overboard in marinas, canals, or nearshore waters.",
      es: "Uso recomendado:Recuperación de herramientas, anclas, cadenas, hélices, piezas de amarre, equipos y objetos personales perdidos en marinas, canales o zonas costeras.",
    },
  },
  {
    id: "additional",
    icon: "/icons/8.png",
    title: {
      es: "Servicios submarinos adicionales bajo solicitud.",
      en: "Additional underwater services upon request",
    },
    modalTitle: {
      es: "Servicios submarinos adicionales bajo solicitud – Importancia del servicio",
      en: "Additional Underwater Services Upon Request – Flexible Solutions",
    },
    pricing: {
      en: [{ number: "1", text: "Fouled propeller: $150. Members $80" }],
      es: [{ number: "1", text: "Hélice obstruida $150. Miembros $80." }],
    },
    description: {
      en: "Every vessel and marina has unique needs. Not all underwater jobs fit into a standard service list, which is why customized underwater services are available upon request. This flexible approach ensures that specific challenges can be addressed with professional support and safe execution.",
      es: "Cada embarcación y cada marina presentan necesidades diferentes. No todos los trabajos submarinos encajan en una lista estándar de servicios, por eso se ofrecen soluciones personalizadas bajo solicitud para atender situaciones específicas de manera profesional y segura.",
    },
    benefitsTitle: {
      es: "¿Por qué ofrecer servicios personalizados?",
      en: "Why offer custom underwater services?",
    },
    benefits: {
      en: [
        "🛠️ Solutions Tailored to Your Needs - Each boat and situation is different. Custom services allow targeted solutions for specific underwater problems or special projects.",
        "🧠 Expert Assessment & Technical Support - Professional divers can evaluate unusual situations and recommend the safest and most effective approach.",
        "⏱️ Fast Response for Non-Routine Tasks - When unexpected issues arise, having access to on-demand underwater services helps resolve problems quickly and minimize downtime.",
        "🔧 Versatility for Special Projects - From unique installations to specialized inspections or emergency assistance, flexible services cover a wide range of underwater needs.",
        "🔒 Safety & Professional Execution - Non-standard underwater work can be risky if performed without proper training. Professional handling ensures safety and proper results.",
      ],
      es: [
        "🛠️ Soluciones adaptadas a cada necesidad - Cada caso es distinto; este servicio permite atender problemas o proyectos especiales bajo el agua.",
        "🧠 Evaluación experta y apoyo técnico - Buceadores profesionales pueden analizar situaciones no comunes y proponer la mejor solución.",
        "⏱️ Respuesta rápida ante situaciones imprevistas - Cuando surgen problemas inesperados, contar con este servicio reduce tiempos muertos.",
        "🔧 Versatilidad para trabajos especiales - Instalaciones no convencionales, inspecciones especiales o apoyo de emergencia.",
        "🔒 Seguridad y ejecución profesional - Trabajos no rutinarios bajo el agua requieren experiencia para realizarse de forma segura.",
      ],
    },
  },
];

interface ServiceModalProps {
  selectedService: ServiceDetail | null;
  onClose: () => void;
}

export function ServiceModal({ selectedService, onClose }: ServiceModalProps) {
  const { language } = useLanguage();

  if (!selectedService) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b">
          <div className="flex items-center gap-3 mb-3 pr-10">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src={selectedService.icon}
                alt=""
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {selectedService.modalTitle?.[language] ||
                selectedService.title[language]}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 pt-4">
          {/* Pricing - For services */}
          {selectedService.pricing && (
            <div className="relative space-y-2 mb-6">
              <div className="relative p-1 rounded-lg">
                {(selectedService.id === "inspection" ||
                  selectedService.id === "hull-cleaning") && (
                  <div className="absolute inset-x-0 top-0 h-15 -mt-1 md:h-15">
                    <Image
                      src="/icons/free.png"
                      alt=""
                      fill
                      className="object-contain opacity-30"
                    />
                  </div>
                )}
                <div className="relative z-10 space-y-2">
                  {selectedService.pricing[language === "en" ? "en" : "es"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Image
                          src="/icons/start.PNG"
                          alt=""
                          width={30}
                          height={30}
                          className="object-contain mt-0.5 shrink-0"
                        />
                        <p className="text-gray-700 font-medium text-sm md:text-base">
                          {item.text}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          {selectedService.description && (
            <div className="mb-6">
              {selectedService.id === "inspection" ? (
                <>
                  {/* First two lines with star icons - Inspection service */}
                  <div className="relative space-y-2 mb-4">
                    {/* Container with background image for both lines */}
                    <div className="relative p-1 rounded-lg">
                      {/* Background image - behind both lines */}
                      {(selectedService.id === "inspection" ||
                        selectedService.id === "hull-cleaning") && (
                        <div className="absolute inset-x-0 top-0 h-25 -mt-1 md:h-15">
                          <Image
                            src="/icons/free.png"
                            alt=""
                            fill
                            className="object-contain opacity-30"
                          />
                        </div>
                      )}
                      {/* Content */}
                      <div className="relative z-10 space-y-2">
                        {/* First line */}
                        <div className="flex items-start gap-0">
                          <Image
                            src="/icons/start.PNG"
                            alt=""
                            width={30}
                            height={30}
                            className="object-contain mt-0.5 shrink-0"
                          />
                          <p className="text-gray-600 font-medium">
                            {selectedService.description[language]
                              .split("\n\n")
                              .slice(0, 1)
                              .join("")}
                          </p>
                        </div>
                        {/* Second line */}
                        <div className="flex items-start gap-0">
                          <Image
                            src="/icons/start.PNG"
                            alt=""
                            width={30}
                            height={30}
                            className="object-contain mt-0.5 shrink-0"
                          />
                          <p className="text-gray-600 font-medium">
                            {selectedService.description[language]
                              .split("\n\n")
                              .slice(1, 2)
                              .join("")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Rest of description after the first two lines (separator) */}
                  {selectedService.description[language]
                    .split("\n\n")
                    .filter((part) => part.trim() !== "")
                    .slice(2)
                    .join("\n\n") && (
                    <div className="whitespace-pre-line">
                      {/* First paragraph as title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {selectedService.description[language]
                          .split("\n\n")
                          .filter((part) => part.trim() !== "")
                          .slice(2, 3)
                          .join("")}
                      </h3>
                      {/* Rest of the content */}
                      <p className="text-gray-600">
                        {selectedService.description[language]
                          .split("\n\n")
                          .filter((part) => part.trim() !== "")
                          .slice(3)
                          .join("\n\n")}
                      </p>
                    </div>
                  )}
                </>
              ) : (selectedService.id === "hull-cleaning" ||
                  selectedService.id === "anodes" ||
                  selectedService.id === "propeller" ||
                  selectedService.id === "installation" ||
                  selectedService.id === "docks" ||
                  selectedService.id === "recovery" ||
                  selectedService.id === "additional") &&
                selectedService.description ? (
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedService.description[language]}
                </p>
              ) : selectedService.id !== "hull-cleaning" &&
                selectedService.id !== "anodes" &&
                selectedService.id !== "propeller" &&
                selectedService.id !== "installation" &&
                selectedService.id !== "docks" &&
                selectedService.id !== "recovery" &&
                selectedService.id !== "additional" ? (
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedService.description[language]}
                </p>
              ) : null}
            </div>
          )}

          {/* Benefits */}
          {selectedService.benefits && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {selectedService.benefitsTitle?.[language] ||
                  (language === "en"
                    ? "Why choose this service?"
                    : "¿Por qué elegir este servicio?")}
              </h3>
              <ul className="space-y-2">
                {selectedService.benefits[language === "en" ? "en" : "es"].map(
                  (benefit, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {benefit}
                    </li>
                  ),
                )}
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
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === "en" ? "Close" : "Cerrar"}
          </button>
        </div>
      </div>
    </div>
  );
}
