import { useState } from "react";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataTable, ColumnDef } from "../../../shared/components/DataTable";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { getErrorMessage } from "../../../shared/utils/error-handler";
import { useCandidateStore } from "../../candidate";
import { useJobs } from "../hooks/useJobs";
import { submitApplication } from "../services/jobs.service";
import { Job } from "../types";

export const JobsTable = () => {
  const navigate = useNavigate();
  const { jobs, isLoading } = useJobs();
  const { uuid, candidateId, applicationId } = useCandidateStore();
  const [repoMap, setRepoMap] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const handleApply = async (jobId: string) => {
    try {
      setSubmitError("");
      setSubmitSuccess("");
      const response = await submitApplication({
        uuid,
        jobId,
        candidateId,
        applicationId,
        repoUrl: repoMap[jobId],
      });
      setSubmitSuccess(
        response.message ?? "Success: job application sended"
      );
    } catch (error) {
      setSubmitSuccess("");
      setSubmitError(getErrorMessage(error));
    }
  };

  const columns: ColumnDef<Job>[] = [
    {
      name: "ID",
      field: "id",
    },
    {
      name: "Title",
      field: "title",
    },
    {
      name: "Repo Git",
      formatter: (row) => (
        <TextField
          size="small"
          value={repoMap[row.id] ?? ""}
          onChange={(e) =>
            setRepoMap((prev) => ({
              ...prev,
              [row.id]: e.target.value,
            }))
          }
        />
      ),
    },
    {
      name: "Action",
      formatter: (row) => (
        <Button variant="contained" onClick={() => handleApply(row.id)}>
          Enviar
        </Button>
      ),
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Button onClick={handleBack} sx={{ mb: 2 }}>
        Atras
      </Button>
      {submitError && <ErrorMessage message={submitError} />}
      {submitSuccess && (
        <Alert severity="success" variant="outlined" sx={{ mb: 2 }}>
          <AlertTitle>Success</AlertTitle>
          {submitSuccess}
        </Alert>
      )}
      <DataTable rows={jobs} columns={columns} hover />
    </>
  );
};
