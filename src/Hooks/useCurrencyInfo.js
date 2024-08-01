import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencies, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`);
        const result = await response.json();
        setData(result[currency]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return { currencies, error, loading };
}

export default useCurrencyInfo;
