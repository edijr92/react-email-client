import useSWR from "swr";
import { useEffect } from "react";
import { fetchCandidateByEmail } from "../services/candidate.service";
import { useCandidateStore } from "../store/candidate.store";

export const useCandidate = (email?: string) => {
  const setCandidate = useCandidateStore(
    (state) => state.setCandidate
  );

  const {
    data,
    error,
    isLoading,
  } = useSWR(
    email ? ["candidate", email] : null,
    () => fetchCandidateByEmail(email!)
  );

  useEffect(() => {
    if (data) {
      setCandidate(data);
    }
  }, [data, setCandidate]);

  return {
    candidate: data,
    isLoading,
    error,
  };
};
