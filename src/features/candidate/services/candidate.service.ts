import { z } from "zod";
import { getCandidate } from "../api/candidate.api";
import { Candidate } from "../types";

const emailSchema = z
  .email({ message: "Invalid email format" })
  .min(1, { message: "Email is required" });

export class CandidateValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CandidateValidationError";
  }
}

export const fetchCandidateByEmail = async (
  email: string
): Promise<Candidate> => {
  const validation = emailSchema.safeParse(email);

  if (!validation.success) {
    throw new CandidateValidationError(
      validation.error.issues[0].message
    );
  }

  return await getCandidate(validation.data);

};
