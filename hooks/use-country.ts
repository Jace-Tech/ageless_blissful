import { useEffect, useState } from "react";

export const useCountry = () => {
  const [country, setCountry] = useState('');

  const handleFetchCountry = async () => {
    const response = await fetch('https://ipapi.co/country');
    const data = await response.json();
    setCountry(data);
  }

  const isNigerian = country === 'NG';

  useEffect(() => {
    handleFetchCountry();
  }, []);

  return { country, setCountry, isNigerian };
};