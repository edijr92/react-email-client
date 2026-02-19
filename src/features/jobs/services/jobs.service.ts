import { getJobs, jobApplication } from "../api/jobs.api";
import { ApplyJobPayload } from "../types";
import { z } from "zod";

const repoSchema = z
  .url("Repo must be a valid URL")
  .includes("github.com", {
    message: "Repo must be a GitHub URL",
  });

export const fetchJobs = async () => {
  return await getJobs();
};

export const submitApplication = async (
  payload: ApplyJobPayload
) => {
  const validation = repoSchema.safeParse(
    payload.repoUrl
  );

  if (!validation.success) {
    throw new Error(
      validation.error.issues[0]?.message
    );
  }

  return await jobApplication(payload);
};
