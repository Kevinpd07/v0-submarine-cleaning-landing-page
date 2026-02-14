"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useWhatsApp } from "./whatsapp-context";
import { useLanguage } from "./language-context";

const services = [
  { es: "Inspección submarina y grabación de video", en: "Underwater inspection and video recording" },
  { es: "Limpieza del casco (equipo de propulsión y fondo)", en: "Hull cleaning (running gear and bottom)" },
  { es: "Reemplazo de ánodos de sacrificio (zincs)", en: "Replacement of sacrificial anodes (zincs)" },
  { es: "Ajuste y reemplazo de hélice", en: "Propeller adjustment and replacement" },
  { es: "Instalación submarina de luces, estabilizadores, etc.", en: "Underwater installation of lights, stabilizers, thru-hulls, and other fittings" },
  { es: "Limpieza y mantenimiento de pilotes de muelle", en: "Cleaning and maintenance of dock pilings and marine structures" },
  { es: "Recuperación de objetos submarinos", en: "Underwater object recovery" },
  { es: "Servicios submarinos adicionales bajo solicitud", en: "Additional underwater services upon request" },
];

export function WhatsAppModal() {
  const { isOpen, closeModal } = useWhatsApp();
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    vesselName: "",
    brand: "",
    model: "",
    year: "",
    lengthFt: "",
    marinaLocation: "",
    slipNumber: "",
    facilityAccessCode: "",
    maintenanceFrequency: "",
    selectedServices: [] as string[],
    initialCondition: "",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = language === "es" 
    ? `*Nueva Solicitud de Servicio*\n\n*Información de Contacto:*\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\n\n*Información del Barco:*\nNombre del Barco: ${formData.vesselName}\nMarca: ${formData.brand}\nModelo: ${formData.model}\nAño: ${formData.year}\nEslora (pies): ${formData.lengthFt}\n\n*Ubicación:*\nMarina/Ubicación: ${formData.marinaLocation}\nSlip #: ${formData.slipNumber}\nCódigo de Acceso: ${formData.facilityAccessCode}\n\n*Mantenimiento:*\nFrecuencia de Mantenimiento: ${formData.maintenanceFrequency}\n\n*Servicios Solicitados:*\n${formData.selectedServices.map((s) => `- ${s}`).join("\n")}\n\n*Observaciones:*\n${formData.initialCondition}\n\n*Fecha Preferida:*\n${formData.date}`
    : `*New Service Request*\n\n*Contact Information:*\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n*Vessel Information:*\nVessel Name: ${formData.vesselName}\nBrand: ${formData.brand}\nModel: ${formData.model}\nYear: ${formData.year}\nLength (ft): ${formData.lengthFt}\n\n*Location:*\nMarina/Location: ${formData.marinaLocation}\nSlip #: ${formData.slipNumber}\nFacility Access Code: ${formData.facilityAccessCode}\n\n*Maintenance:*\nMaintenance Frequency: ${formData.maintenanceFrequency}\n\n*Services Required:*\n${formData.selectedServices.map((s) => `- ${s}`).join("\n")}\n\n*Initial Condition/Observations:*\n${formData.initialCondition}\n\n*Preferred Date:*\n${formData.date}`;

    const whatsappUrl = `https://wa.me/13059050376?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6" />
            <h2 className="text-xl font-bold">{t({ es: "Solicitar Cotización", en: "Request Quote" })}</h2>
          </div>
          <button
            onClick={closeModal}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ es: "Nombre *", en: "Name *" })}
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ es: "Empresa", en: "Company" })}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ es: "Teléfono *", en: "Phone *" })}
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ es: "Correo electrónico *", en: "Email *" })}
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Vessel Info */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">{t({ es: "Información del Barco", en: "Vessel Information" })}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Nombre del Barco *", en: "Vessel Name *" })}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.vesselName}
                  onChange={(e) => setFormData({ ...formData, vesselName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Marca", en: "Brand" })}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Modelo", en: "Model" })}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Año", en: "Year" })}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Eslora (pies) *", en: "Length (ft) *" })}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.lengthFt}
                  onChange={(e) => setFormData({ ...formData, lengthFt: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">{t({ es: "Ubicación", en: "Location" })}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Marina/Ubicación *", en: "Marina/Location *" })}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.marinaLocation}
                  onChange={(e) => setFormData({ ...formData, marinaLocation: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Slip #", en: "Slip #" })}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.slipNumber}
                  onChange={(e) => setFormData({ ...formData, slipNumber: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Código de Acceso", en: "Facility Access Code" })}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.facilityAccessCode}
                  onChange={(e) => setFormData({ ...formData, facilityAccessCode: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Maintenance Frequency */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">{t({ es: "Mantenimiento", en: "Maintenance" })}</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maintenance Frequency
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.maintenanceFrequency}
                onChange={(e) => setFormData({ ...formData, maintenanceFrequency: e.target.value })}
              >
                <option value="">{t({ es: "Seleccionar frecuencia...", en: "Select frequency..." })}</option>
                <option value="Monthly">{t({ es: "Mensual", en: "Monthly" })}</option>
                <option value="Every 20 days">{t({ es: "Cada 20 días", en: "Every 20 days" })}</option>
                <option value="Every 15 days">{t({ es: "Cada 15 días", en: "Every 15 days" })}</option>
              </select>
            </div>
          </div>

          {/* Services */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">{t({ es: "Servicios Requeridos *", en: "Services Required *" })}</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service) => (
                <label
                  key={service.en}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    formData.selectedServices.includes(service[language])
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                    checked={formData.selectedServices.includes(service[language])}
                    onChange={() => handleServiceToggle(service[language])}
                  />
                  <span className="text-sm text-gray-700">{service[language]}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Observations & Date */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Condición Inicial/Observaciones", en: "Initial Condition/Observations" })}
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.initialCondition}
                  onChange={(e) => setFormData({ ...formData, initialCondition: e.target.value })}
                  placeholder={t({ es: "Describe la condición actual del barco...", en: "Describe the current condition of the vessel..." })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t({ es: "Fecha Preferida", en: "Preferred Date" })}
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || formData.selectedServices.length === 0}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            {isSubmitting ? (
              <>
                <Send className="h-5 w-5 animate-pulse" />
                {t({ es: "Enviando...", en: "Sending..." })}
              </>
            ) : (
              <>
                <MessageCircle className="h-5 w-5" />
                {t({ es: "Enviar por WhatsApp", en: "Send via WhatsApp" })}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
