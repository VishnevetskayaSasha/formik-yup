import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"

const CustomForm = () => {

    return (
        <Formik
        initialValues = {{
            name: "",
            email: "",
            amount: 0,
            currency: "",
            text: "",
            terms: false
        }}
        validationSchema = {Yup.object({ // валидация с импользованием библиотеки Yup // формируем объект ошибки
            name: Yup.string()
                    .min(2, "Минимум 2 символа для заполнения")
                    .required("Обязательное поле!"),
            email: Yup.string()
                    .email("Неправильный email адрес") // заменяет регулярку 
                    .required("Обязательное поле!"),
            amount: Yup.number()
                    .min(5, "Не менее 5")
                    .required("Обязательное поле!"),
            currency: Yup.string()
                    .required("Выберите валюту!"),
            text: Yup.string()
                    .min(10, "Не менее 10 символов"),
            terms: Yup.boolean()
                    .required("Необходимо согласие!")
                    .oneOf([true], "Необходимо согласие!") // какие значения могут быть, если не true => ошибка
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))} // трансформируем объект в строку
        >
            <Form className="form" >
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                {/* рендерится див с сообщением об ошибке + к ниму приаязывется className + он связан с определенным импутом по name*/}
                <ErrorMessage className="error" name="name" component="div"/> 
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div"/> 
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div"/> 
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select" 
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/> 
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div"/> 
                <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className="error" name="terms" component="div"/> 
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;