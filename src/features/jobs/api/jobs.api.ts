import { api } from "../../../shared/api/axios";
import { Job, ApplyJobPayload, ApplicationResponse } from '../types'

export const getJobs = async (): Promise<Job[]> => {
  const { data }= await api.get('/api/jobs/get-list');
  return data
}

export const jobApplication = async (body: ApplyJobPayload ): Promise<ApplicationResponse> => {
    const { data } = await api.post(
      '/api/candidate/apply-to-job',
      body
    );

    return data
}
