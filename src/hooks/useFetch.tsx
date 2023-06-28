import { useCallback, useEffect, useState } from "react";
import { fetchReturnProps, dentists, fetchError } from "../utils/types";

import { initialDentist } from "../utils/models";

import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_API_KEY;

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
      toast.error("Error al obtener los datos");
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
