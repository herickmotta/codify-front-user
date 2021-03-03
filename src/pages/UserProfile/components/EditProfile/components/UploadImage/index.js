import React, { useContext, useState } from "react";

import { BsPencil } from "react-icons/bs";
import Spinner from "../../../../../../components/Spinner";
import UserContext from "../../../../../../contexts/UserContext";
import UserService from "../../../../../../services/UserService";
import { EditLabel, SpinnerBox } from "./styles";

export default function UploadImage() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleUpload = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("image", e.target.files[0]);
    setLoading(true);
    const { success } = await UserService.editAvatar(body, user.token);
    setLoading(false);
    if (success) {
      setUser({ ...user, imageUrl: success.imageUrl });
    } else {
      alert("Erro no servidor, tente novamente mais tarde.");
    }
  };

  return (
    <div>
      {loading ? (
        <SpinnerBox className="visible edit">
          <Spinner fontSize="60" />
        </SpinnerBox>
      ) : (
        <div>
          <EditLabel htmlFor="upload-button" className="edit">
            <BsPencil />
            <p>EDITAR</p>
          </EditLabel>
          <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </div>
      )}
    </div>
  );
}
