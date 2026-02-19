import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Candidate } from "../types";

interface CandidateState {
  candidate: Candidate | null;
  uuid: string;
  candidateId: string;
  applicationId: string;
  setCandidate: (candidate: Candidate | null) => void;
  clearCandidate: () => void;
}

const initialState: Omit<
  CandidateState,
  "setCandidate" | "clearCandidate"
> = {
  candidate: null,
  uuid: "",
  candidateId: "",
  applicationId: ""
};

export const useCandidateStore = create<CandidateState>()(
  persist(
    (set) => ({
      ...initialState,
      setCandidate: (candidate) =>
        set(() => ({
          candidate,
          uuid: candidate?.uuid ?? "",
          candidateId: candidate?.candidateId ?? "",
          applicationId: candidate?.applicationId ?? ""
        })),

      clearCandidate: () => set(initialState),
    }),
    {
      name: "candidate-store",
    }
  )
);
