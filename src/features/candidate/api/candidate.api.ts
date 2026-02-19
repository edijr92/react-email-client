import { api } from "../../../shared/api/axios";
import { Candidate } from "../types";

export const getCandidate = async (email: string): Promise<Candidate> => {
    const { data } = await api.get(
      `/api/candidate/get-by-email?email=${email}`
    );
    return data
}

