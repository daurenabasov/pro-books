import React, { useState } from "react";
import axios from "axios";

const Frontend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("../data/books.json");
    }
    fetchData();
  }, [data]);

  return <div></div>;
};

export default Frontend;
