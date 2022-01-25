import { useEffect, useState } from "react";
const { Axios, default: axios } = require("axios");

export default function useAxios(info, param = null) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios({
      method: info.method,
      url: info.path,
      data: param,
    }).then(function (res) {
      setResponse(res.data);
    });
  }, [info]);

  return response;
}
