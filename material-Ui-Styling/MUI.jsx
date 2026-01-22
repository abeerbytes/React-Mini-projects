// MUICard.jsx
import { Card, CardContent, Avatar, Typography, Button } from "@mui/material";

export default function MUICard() {
  return (
    <Card sx={{ width: 320, textAlign: "center", p: 2, borderRadius: 4 }}>
      <Avatar
        src="https://i.pravatar.cc/150"
        sx={{ width: 96, height: 96, mx: "auto", mb: 2 }}
      />
      <CardContent>
        <Typography variant="h6">Abeer Rizwan</Typography>
        <Typography color="text.secondary" mb={2}>
          Frontend Developer
        </Typography>
        <Button variant="contained">Follow</Button>
      </CardContent>
    </Card>
  );
}
