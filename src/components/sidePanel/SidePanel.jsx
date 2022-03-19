import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { sortUsers } from "../../store/usersSlice";

export const SidePanel = () => {
  const dispatch = useDispatch();

  const sortFunct = (condition) => {
    dispatch(sortUsers(condition));
  };

  return (
    <div className="side-panel">
      <h3 className="text-m">Сортировка</h3>
      <Button
        text={"По городу"}
        onClick={() => sortFunct("city")}
        className={"button side__button text-m"}
      />
      <Button
        text={"По имени"}
        onClick={() => sortFunct("name")}
        className={"button side__button text-m"}
      />
    </div>
  );
};
