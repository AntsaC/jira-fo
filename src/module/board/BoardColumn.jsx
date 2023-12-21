import { Card, CardContent, Stack, Typography } from "@mui/material";
import BoardItem from "./BoardItem";

export default function BoardColumn({ column }) {
  return (
    <Card sx={{ width: "25%", minHeight: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {column.name}
        </Typography>
        <Stack mt={2} gap={2}>
          {column.cards?.map((story) => (
            <BoardItem key={story.id} story={story} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
