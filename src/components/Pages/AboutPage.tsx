import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import gif from "/v8.gif";

const AboutPage = () => {
  return (
    <section
      style={{
        backgroundColor: "rgb(4, 3, 4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center", // Центрирование по горизонтали
        height: "100vh",
        overflowY: "hidden",
      }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          marginTop: "7em",
        }}>
        <Box
          component="div"
          sx={{
            borderRadius: "2px solid white",
            width: "100%",
          }}>
          <img
            style={{ margin: "0 auto", display: "block" }}
            className="motor"
            src={gif}
            alt="Earth"
            width={"350px"}
          />
        </Box>
      </Box>

      <Footer />
    </section>
  );
};

export default AboutPage;
