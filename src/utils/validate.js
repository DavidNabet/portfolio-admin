import { useState, useEffect } from "react";

export default function validate(values) {
  let errors = {};
  if (!values?.email) {
    errors.email = "L'adresse email est requise";
  } else if (!/\S+@\S+\.\S+/.test(values?.email)) {
    errors.email = "L'adresse email est invalide";
  }

  if (!values?.password) {
    errors.password = "Le mot de passe est requis";
  } else if (values?.password <= 5) {
    errors.password = "Le mot de passe doit comporter plus de 8 caractères";
  }
  return errors;
}

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Si les erreurs sont vides alors le callback est appelé
    if (Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setisSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((val) => ({ ...val, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
