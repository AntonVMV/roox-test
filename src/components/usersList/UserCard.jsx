import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <ul className="user-card__list">
        <li className="user-card__item">
          ФИО:<p className="user-text">{user.name}</p>
        </li>
        <li className="user-card__item">
          Город:<p className="user-text">{user.address.city}</p>
        </li>
        <li className="user-card__item">
          Компания:<p className="user-text">{user.company.name}</p>
        </li>
      </ul>
      <Link to={`/profile/${user.id}`} className="user-link text-m">
        Подробнее
      </Link>
    </div>
  );
};
