import React, { useContext } from "react";
import Context from "../store/context";

const GiveList = () => {
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <div>
      {globalState.isLoggedIn ? (
        <button
          type="button"
          className="close"
          onClick={() => globalDispatch({ type: "LOGOUT" })}
        >
          Close List
        </button>
      ) : (
        <button type="button" onClick={() => globalDispatch({ type: "LOGIN" })}>
          Upload List
        </button>
      )}
    </div>
  );
};

export default GiveList;
