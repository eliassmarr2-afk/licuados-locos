/**
 * LICUADOS LOCOS — tracking demo adapter
 * Image-less structural build.
 */
(function () {
  "use strict";

  const records = {
    "123456": {
      trackingId: "123456",
      orderId: "LL-1048",
      status: "En camino",
      statusTone: "in-transit",
      statusDetail: "Tu pedido salió del local y está viajando hacia el domicilio de entrega.",
      progress: 72,
      etaLabel: "Hoy",
      etaWindow: "14:00–18:00",
      lastUpdate: "Actualizado hoy · 11:48",
      paymentStatus: "Pagado",
      delivery: {
        address: "Av. Santa Fe 3250, CABA",
        recipient: "Martín López",
        phone: "+54 11 5555-0184",
        notes: "Entregar en recepción.",
        city: "Ciudad Autónoma de Buenos Aires"
      },
      shipment: {
        method: "Envío a domicilio",
        carrier: "Operador logístico",
        service: "Entrega a domicilio",
        estimatedDate: "Hoy",
        estimatedWindow: "14:00–18:00"
      },
      product: {
        id: "combo-frutilla-banana",
        title: "Frutilla + Banana",
        subtitle: "Frutilla · banana · leche · hielo",
        price: 9230,
        quantity: 1,
        image: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      }
    }
  };

  const clone = (value) => JSON.parse(JSON.stringify(value));

  window.TheCampingTracking = {
    async getByTrackingId(trackingId) {
      const normalized = String(trackingId || "").trim();
      return records[normalized] ? clone(records[normalized]) : null;
    }
  };
})();