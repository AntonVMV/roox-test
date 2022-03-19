import "./style.scss";
import { useSelector } from "react-redux";
import { UserCard } from "./UserCard";

export const UsersList = () => {
  const { users, loading } = useSelector((store) => store.usersSlice);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <h3 className="users-title">Список пользователей:</h3>
      <div className="users-list">
        {users &&
          users.map((item) => {
            return <UserCard key={item.id} user={item} />;
          })}
      </div>
      {users && <p className="text-m">Найдено {users.length} пользователей</p>}
    </>
  );
};
