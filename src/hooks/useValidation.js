import { useState } from "react";

const useValidation = (values) => {
  const [name, setNameError] = useState();
  const [username, setUserNameError] = useState();
  const [email, setEmailError] = useState();
  const [street, setStreetError] = useState();
  const [city, setCityError] = useState();
  const [zipcode, setZipCodeError] = useState();
  const [phone, setPhoneError] = useState();
  const [website, setWebsiteError] = useState();

  const checkErrors = (e) => {
    e.preventDefault();

    for (let value in values) {
      switch (value) {
        case "name":
          values[value].length < 2
            ? setNameError("Минимум 2 символа")
            : setNameError(null);
          break;

        case "username":
          values[value].length < 2
            ? setUserNameError("Минимум 2 символа")
            : setUserNameError(null);
          break;

        case "email":
          const emailReg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          !emailReg.test(values[value])
            ? setEmailError("Введите корректный email")
            : setEmailError(null);
          break;

        case "street":
          values[value].length < 1
            ? setStreetError("Необходимо заполнить")
            : setStreetError(null);
          break;

        case "city":
          values[value].length < 1
            ? setCityError("Необходимо заполнить")
            : setCityError(null);
          break;

        case "zipcode":
          values[value].length < 1
            ? setZipCodeError("Необходимо заполнить")
            : setZipCodeError(null);
          break;

        case "phone":
          values[value].length < 10
            ? setPhoneError("Слишком короткий номер")
            : setPhoneError(null);
          break;

        case "website":
          values[value].length < 4
            ? setWebsiteError("Минимум 4 символа")
            : setWebsiteError(null);
          break;

        default:
          break;
      }
    }
  };

  return {
    name,
    username,
    email,
    street,
    city,
    zipcode,
    phone,
    website,
    checkErrors,
  };
};

export default useValidation;
