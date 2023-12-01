import { forwardRef } from "react";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import bg from "../../img/aston-martin.jpeg";

const SecondPage = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} style={{ height: "100%" }}>
    <Box
      component="div"
      sx={{
        height: "100%",
      }}>
      <Box
        component="div"
        sx={{
          scale: 0.2,
          backgroundImage: `url(${bg}) `,
          filter: "grayscale(50%) blur(2px)",
          opacity: 0.9,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70%",
        }}>
        1
      </Box>
      <Footer />
    </Box>
  </section>
));

export default SecondPage;
