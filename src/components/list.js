import React, { useContext } from "react";
import Context from "../store/context";

import ListElement from "./listElement";
import { STUDENTS } from "../constants";

const List = () => {
  const { globalState } = useContext(Context);

  return (
    <>
      {globalState.isLoggedIn &&
        STUDENTS.map((st) => {
          return (
            <ListElement key={st.orderNum}>
              <span className="index">{st.orderNum}</span>. {st.studentFullName}{" "}
              {st.fatherName}
            </ListElement>
          );
        })}
    </>
  );
};

export default List;
