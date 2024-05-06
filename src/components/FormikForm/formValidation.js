import { nanoid } from 'nanoid';
import * as Yup from 'yup';
export const initialValue = {
  id: nanoid,
  name: '',
  number: '',
};

export const formValidation = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я є обов'язковим!")
    .min(3, 'Має бути не менше 3-х символів')
    .max(50, 'Має бути не більше 20-ти символів')
    .trim('Не має містити пробілів'),

  number: Yup.string()
    .required('Номер телефону є обов’язковим')
    .min(10, 'Має бути не менше 10-ти символів'),
});
