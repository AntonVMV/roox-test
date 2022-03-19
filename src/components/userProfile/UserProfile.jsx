import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserForm } from "./UserForm";
import { useState, useEffect } from "react";
import { Button } from "../Button";

import "./style.scss";

export const UserProfile = () => {
  const { users } = useSelector((store) => store.usersSlice);
  const [editable, setEditable] = useState(false);
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (users) {
      setUser(users.find((item) => item.id === parseInt(id)));
    }

    // Or usunig new request

    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((response) => response.json())
    //   .then((result) => setUser(result));
  }, [users]);

  return (
    <>
      <div className="profile-header">
        <p>Профиль пользователя:</p>
        <Button
          text={"Редактировать"}
          onClick={() => setEditable(!editable)}
          className={"button edit__button text-m"}
        />
      </div>

      {user && <UserForm user={user} editable={editable} />}
    </>
  );
};
