import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

function WeddingForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (loading) return;
    setLoading(true);

    try {
      await emailjs.send(
        "service_ksgjnvk",
        "template_sjet75m",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
        },
        "RpTKmqKcvysdeeL7b",
      );

      toast.success("¡Gracias por confirmar tu asistencia!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error, por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen min-h-screen flex overflow-hidden max-lg:flex-col max-sm:h-auto z-10">
      <div className="animation-scroll bg-[#45524c] h-auto z-10 w-1/2 flex items-center justify-center p-14 max-lg:h-auto max-lg:w-full max-lg:px-4">
        <article className="animate-on-scroll font-[freeFa900] w-full max-w-xl bg-[url(/img/hoja.webp)] bg-fixed bg-cover bg-no-repeat bg-center px-6 py-10 text-center text-[#8f8269]">
          <h2 className="text-3xl mb-6 font-bold">Confirmar Asistencia</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            {/* Nombre */}
            <div>
              <label className="block mb-1 font-semibold">Nombre</label>
              <input
                {...register("name", { required: true })}
                placeholder="Tu nombre"
                className="border border-gray-300 p-2 rounded-lg w-full"
                disabled={loading}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  El nombre es obligatorio
                </span>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label className="block mb-1 font-semibold">Teléfono 📞</label>
              <input
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
                placeholder="Tu número de teléfono"
                className="border border-gray-300 p-2 rounded-lg w-full"
                disabled={loading}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  Ingresa un número de teléfono válido
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">
                Correo electrónico
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Tu correo electrónico"
                className="border border-gray-300 p-2 rounded-lg w-full"
                disabled={loading}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  El correo es obligatorio
                </span>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-[#8f8269] text-white hover:bg-[#9a7b55] flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                ) : null}

                {loading ? "Enviando..." : "Confirmar asistencia"}
              </button>
            </div>
          </form>
        </article>
      </div>

      {/* Imagen */}
      <img
        className="w-1/2 h-screen object-cover max-lg:w-full max-lg:h-[50vh] z-10"
        src="/img/12.webp"
        alt="Boda"
      />
    </section>
  );
}

export default memo(WeddingForm);
