import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  Divider,
  TextField,
  Stack,
  Typography
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { PropertyList } from "../../../shared/components/PropertyList";
import { PropertyItem } from "../../../shared/components/PropertyItem";
import { useCandidate } from "../hooks/useCandidate";
import { useCandidateStore } from "../store/candidate.store";
import { LoadingSkeleton } from "../../../shared/components/Loading";
import { ErrorMessage } from "../../../shared/components/ErrorMessage";
import { getErrorMessage } from "../../../shared/utils/error-handler";
import { useNavigate } from "react-router-dom";


export function CandidateCard(): React.JSX.Element {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = React.useState("");
  const [emailToSearch, setEmailToSearch] = React.useState<string>();
  const [isSearching, setIsSearching] = React.useState(false);

  const candidate = useCandidateStore(
    (state) => state.candidate
  );

  const { isLoading, error } =
    useCandidate(emailToSearch);

  React.useEffect(() => {
    if (isSearching && !isLoading) {
      setIsSearching(false);
    }
  }, [isSearching, isLoading]);

  const handleSearch = () => {
    if (!emailInput) return;
    setIsSearching(true);
    setEmailToSearch(emailInput);
  };

  const handleNavigateJobs = () => {
    navigate("/jobs");
  };

  return (
    <Card>
      <CardHeader
        title="Candidate Information"
      />

      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Candidate Email"
              value={emailInput}
              onChange={(e) =>
                setEmailInput(e.target.value)
              }
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>

          {isSearching && isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {error && (
                <ErrorMessage message={getErrorMessage(error)} />
              )}
              <Card variant="outlined">
                <PropertyList
                  divider={<Divider />}
                  sx={{ "--PropertyItem-padding": "12px 24px" }}
                >
                  {[
                    { key: "UUID", value: candidate?.uuid ?? "-" },
                    { key: "Candidate ID", value: candidate?.candidateId ?? "-" },
                    { key: "Application ID", value: candidate?.applicationId ?? "-" },
                    { key: "First Name", value: candidate?.firstName ?? "-" },
                    { key: "Last Name", value: candidate?.lastName ?? "-" },
                    { key: "Email", value: candidate?.email ?? "-" },
                  ].map((item) => (
                    <PropertyItem
                      key={item.key}
                      name={item.key}
                      value={
                        <Typography variant="subtitle2">
                          {item.value}
                        </Typography>
                      }
                    />
                  ))}
                </PropertyList>
              </Card>
               {candidate && !isLoading && !error && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNavigateJobs}
                >
                  Job Applications
                </Button>
              )}
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
