import { useState, useEffect } from "react";
import { getSnippets } from "../api";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at index i and index j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const useSnippet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    try {
      const result = await getSnippets()
      setData(shuffleArray(result));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length === 0) fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setCurrentIndex(0);
    }
  }, [data]);

  const nextSnippet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return {
    currentSnippet: data[currentIndex] || null,
    loading,
    error,
    nextSnippet,
  };
};

export default useSnippet;
