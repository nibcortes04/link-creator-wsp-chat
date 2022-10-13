import React from "react";

import { useForm } from "react-hook-form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { LabelWithInput } from "../../atoms";

function HomePage({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    const whatsappphonenumber = `57${formData.phone}`;
    const todayDate = new Date().toISOString().slice(0, 10);
    const urlencodedtext =
      `Cordial saludo ${formData.name}, somos la empresa ${formData.business}, ` +
      "tenemos un pedido programado para entregar el día de mañana " +
      `${todayDate}` +
      ", entre las 8am y las 6pm " +
      "Productos: 12 x GUANTE APLICADOR valor:" +
      ` $${formData.product} ` +
      "Ingrese por favor a el siguiente link para confirmar su entrega y validar si la información en la guía está correcta," +
      "de lo contrario si desea reprogramar, cancelar o tiene alguna novedad hacerlo saber por este medio.";
    const urlGenerete = `https://wa.me/${whatsappphonenumber}?text=${encodeURIComponent(
      urlencodedtext
    )}`;
    window.open(urlGenerete);
    // reset();
  };

  return (
    <Stack className="HomePage pt-5">
      <Stack className="HomePage__title mb-5">
        <h1 className="my-0">Generar link</h1>
      </Stack>
      <Stack className="HomePage__content ">
        <h1 className="my-0">Formulario</h1>
        <Form>
          <LabelWithInput
            label="Empresa"
            name="business"
            type="text"
            register={register}
            errors={errors}
            placeholder="Empresa"
            required
          />

          <LabelWithInput
            label="Cliente"
            name="name"
            type="text"
            register={register}
            errors={errors}
            placeholder="Escribe nombre del cliente"
            required
          />

          <LabelWithInput
            label="Celular"
            name="phone"
            type="number"
            register={register}
            errors={errors}
            placeholder="Escribe tu celular"
            required
          />

          <Form.Group className="mb-3">
            <Form.Label>Seleccione el producto</Form.Label>
            <Form.Select
              id="product"
              className={errors.product ? "required" : ""}
              {...register("product", { required: true })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="74900">Bronceador x3</option>
              <option value="69700">Tornillo x12</option>
            </Form.Select>
            {errors.product && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit(handleSubmitForm)}>
            Crear
          </Button>
        </Form>
      </Stack>
    </Stack>
  );
}

export { HomePage };

// Cordial saludo nombre, somos la empresa Paloma Mensajería, tenemos un pedido programado para entregar el día de mañana 24-02-2022,
// entre las 8am y las 6pm.     Productos: 12 x GUANTE APLICADOR valor: $250000 Ingrese por favor a el siguiente link para confirmar su
// entrega y validar si la información en la guía está correcta, de lo contrario si desea reprogramar, cancelar o tiene alguna novedad
// hacerlo saber por este medio.        https://web.palomamensajeria.com/ConfirmedGuide/20220224118778/118778

// Somos la empresa PALOMA MENSAJERÍA, reciba un coridal saludo, Estamos cerca de su domicilio, en los próximos minutos le estaremos
// entregando su pedido. Le agradecemos estar atento(a)      Productos: 12 x GUANTE APLICADOR  valor: $250000

// nombre
// producto
// precio
// empresa
// domicilio
// celular
// direccion
// estado del pedido
// guia
