// app/ui/ServiceCard.tsx
export default function ServiceCard({ service }: { service: any }) {
  return (
    <div
      className="
        relative
        bg-gray-300/30
        rounded-2xl
        p-5
        h-full
        flex flex-col justify-between
        shadow-sm

        transition-all duration-300 ease-out
        transform-gpu

        hover:scale-[1.05]
        hover:z-20
        hover:bg-slate-300/60
        hover:shadow-xl
      "
    >
      {/* HEADER : PHOTO + INFOS */}
      <div className="flex items-center gap-4 mb-4">
        {/* PHOTO PROFIL */}
        <div className="w-16 h-16 rounded-full overflow-hidden border bg-gray-100 flex items-center justify-center shrink-0">
          {service.photo ? (
            <img
              src={service.photo}
              alt={`${service.firstName} ${service.lastName}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-sm font-semibold">
              {service.firstName?.[0]}
              {service.lastName?.[0]}
            </span>
          )}
        </div>

        {/* NOM + AGE + VILLE */}
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            {service.firstName} {service.lastName}
          </h3>
          <p className="text-sm text-gray-500">
            {service.age} ans • {service.city}
          </p>
        </div>
      </div>

      {/* INFOS SERVICE */}
      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-medium">Service :</span> {service.serviceType}</p>
        <p><span className="font-medium">Expérience :</span> {service.experience} ans</p>
        <p><span className="font-medium">Disponibilité :</span> {service.availability}</p>
        <p><span className="font-medium">Zone :</span> {service.city}, {service.district}</p>
        <p><span className="font-medium">Tarif :</span> {service.price} CFA / {service.rateType}</p>
      </div>

      {/* ACTIONS */}
      <div className="mt-5 flex gap-3">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg text-sm font-semibold transition">
          Voir profil
        </button>
        <button className="flex-1 border border-green-500 text-green-600 hover:bg-green-50 py-2.5 rounded-lg text-sm font-semibold transition">
          Contacter
        </button>
      </div>
    </div>
  );
}
