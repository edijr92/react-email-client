export interface Job {
    id: string;
    title: string
}

export interface ApplyJobPayload {
  uuid?: string;
  jobId: string;
  candidateId?: string;
  repoUrl: string;
  applicationId: string
}

export interface ApplicationResponse {
    ok: boolean;
    message?: string;
}
