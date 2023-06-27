import { useCallback, useEffect, useState } from "react";
import { fetchReturnProps, dentists, fetchError } from "../types";

import { initialDentist } from "../models";

const BASE_URL = import.meta.env.VITE_API_KEY;

async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

const useFetch: (id?: number) => fetchReturnProps = (id) => {
  const [dentists, setDentists] = useState<dentists[]>([]);
  const [dentist, setDentist] = useState<dentists>(initialDentist);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<fetchError>({
    message: "",
    error: false,
  });

  const fetchData: (id?: number) => Promise<void> = useCallback(async (id) => {
    setError({ message: "", error: false });
    setLoading(true);
    try {
      if (typeof id === "number" && id > 0) {
        const dentist = await fetch(BASE_URL + "/" + id);

        const dentistJson = await dentist.json();

        setDentist(dentistJson);
      } else {
        const dentistArr = await fetch(BASE_URL);

        const dentistArrJson = await dentistArr.json();

        setDentists(dentistArrJson);
      }
    } catch (error) {
      setError({ message: "Error al obtener los datos", error: true });
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(id);
  }, [fetchData, id]);

  return { dentists, loading, error, dentist };
};

export default useFetch;
