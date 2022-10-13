import React from "react";

import Form from "react-bootstrap/Form";

import "./index.css";

function LabelWithInput({
  label,
  name,
  type,
  register,
  placeholder,
  required,
  errors,
}) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={errors.name ? "required" : ""}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {errors.name && (
        <span className="text-danger">This field is required</span>
      )}
    </Form.Group>
  );
}

export { LabelWithInput };
