import { z } from "zod";

export const applySchema = z.object({
  uuid: z.string().min(1, 'UUID es requerido'),
  jobId: z.string().min(1, 'JobId es requerido'),
  candiateId: z.string().min(1, 'CandidateId es requerido'),
  repoUrl: z
    .string()
    .min(1, "El repositorio es requerido")
    .includes("github.com", {
      message: "Debe ser un repositorio de GitHub",
    }),
});