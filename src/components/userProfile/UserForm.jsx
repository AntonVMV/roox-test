import React, { useState } from "react";
import { FormField } from "./FormField";
import { Button } from "../Button";
import useValidation from "../../hooks/useValidation";

export const UserForm = ({ user, editable }) => {
  const [values, setValues] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    zipcode: user.address.zipcode,
    phone: user.phone,
    website: user.website,
  });

  const errors = useValidation(values);

  const changeHandler = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const submitHandler = (e) => {
    errors.checkErrors(e);
    console.log(JSON.stringify(values));
  };

  return (
    <>
      <form className="user-form">
        {values &&
          Object.entries(values).map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item[0] !== "comment" && (
                  <FormField
                    id={item[0]}
                    value={item[1]}
                    onChange={changeHandler}
                    editable={editable}
                    error={errors[item[0]]}
                  />
                )}
              </React.Fragment>
            );
          })}
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <textarea
          className="form-field form-comment"
          id="comment"
          disabled={!editable}
          onChange={(e) => changeHandler("comment", e.target.value)}
        />
      </form>
      <Button
        type="submit"
        text={"Отправть"}
        className={"button submit-button text-m"}
        disabled={!editable}
        onClick={submitHandler}
      />
    </>
  );
};
