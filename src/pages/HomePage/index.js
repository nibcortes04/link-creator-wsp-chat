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

  const [products] = React.useState([
      {
        name: 'Bronceador x1',
        value: 10000,
      },
      {
        name: 'Bronceador x2',
        value: 20000,
      },
      {
        name: 'Bronceador x3',
        value: 30000,
      },
      {
        name: 'tornillos x12',
        value: 70000,
      },
      {
        name: 'tornillos x6',
        value: 30000,
      },
  ]);

  const returnValueProduct = (name) => {
    const result = products.filter((product) => product.name  === name)
    return result[0].value
  }


  const handleSubmitForm = (formData) => {
    console.log(formData);
    console.log(returnValueProduct(formData.product));
    const whatsappphonenumber = `57${formData.phone}`;
    const todayDate = new Date().toISOString().slice(0, 10);
    const urlencodedtext =
      `Cordial saludo ${formData.name}, Soy asesora de ${formData.business}, ` +
      "donde realizaste la compra del " +
      "Producto:"+ ` ${formData.product},`+ " de hoy " +
      `${todayDate} ` +
      "tu pedido será entregado en el transcurso del día, recuerda que debes pagar"+ 
      ` $ ${returnValueProduct(formData.product)}`+" Feliz dia"

    const urlGenerete = `https://wa.me/${whatsappphonenumber}?text=${encodeURIComponent(
      urlencodedtext
    )}`;
    window.open(urlGenerete);
    reset();
  };

  return (
    <Stack className="HomePage pt-5">
      <Stack className="HomePage__title mb-5">
        <h1 className="my-0">Generar link</h1>
      </Stack>
      <Stack className="HomePage__content ">
        <h1 className="my-4">Formulario</h1>
        <Form>
          <Form.Group className="mb-3 d-flex justify-content-around align-items-center">
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
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-around align-items-center">

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
                {products && products.map((product) =>
                  <option key={product.name} value={product.name}>{product.name}</option>
                )}
              </Form.Select>
              {errors.product && (
                <span className="text-danger">This field is required</span>
              )}
            </Form.Group>
          </Form.Group>

          <Button className="mt-5" onClick={handleSubmit(handleSubmitForm)}>
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
