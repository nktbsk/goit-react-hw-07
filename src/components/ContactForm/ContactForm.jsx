import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPersonAddOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";

// Валидация
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContacts({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "", id: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span className={style.span}>Name</span>
          <Field
            className={style.field}
            type="text"
            name="name"
            placeholder="Alina Becker"
          />
          <ErrorMessage
            name="name"
            component="div"
            className={style.errorMessage}
          />
        </label>

        <label className={style.label}>
          <span className={style.span}>Number</span>
          <Field
            className={style.field}
            type="text"
            name="phone"
            placeholder="000-00-00"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={style.errorMessage}
          />
        </label>

        <button className={style.btn} type="submit">
          <IoPersonAddOutline className={style.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
