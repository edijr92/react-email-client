import useSWR from "swr";
import { fetchJobs } from "../services/jobs.service";

export const useJobs = () => {
  const { data, error, isLoading } = useSWR(
    "jobs-list",
    fetchJobs
  );

  return {
    jobs: data ?? [],
    isLoading,
    error,
  };
};
