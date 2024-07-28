import { Box, Container, CssBaseline, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm" className="width-container center">
        <Box sx={{ width: "100%" }}>
          <Typography variant="h1" gutterBottom>
            Hola Mundo.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
