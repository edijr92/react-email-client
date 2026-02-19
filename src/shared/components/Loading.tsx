import { Stack, Skeleton, Card, CardContent } from "@mui/material";

interface LoadingSkeletonProps {
  rows?: number;
}

export function LoadingSkeleton({
  rows = 6,
}: LoadingSkeletonProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          {Array.from({ length: rows }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              height={24}
              animation="wave"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
