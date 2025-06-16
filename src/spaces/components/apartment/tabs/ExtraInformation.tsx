import { type FC } from "react";
import { Box, Container } from "@mui/material";
import AddapartmentDetail from "../../../components/apartment/AddapartmentDetail";
import AddapartmentDeffects from "../../../components/apartment/AddapartmentDeffects";

interface BasicInformationProps {
  methods: any;
}

const ExtraInformation: FC<BasicInformationProps> = ({ methods }) => {
  return (
  
      <Container
        sx={{
          width: "80%",
          margin: 0,
        }}
      >
        <Box mb={2}>
          <AddapartmentDetail
            label="Home Details (Additional Details)"
            placeholder="Enter home detail"
            onChange={(values) => console.log(values)}
          />
        </Box>

        <Box mb={2}>
          <AddapartmentDeffects
            label="Home Deffects"
            keyPlaceholder="Enter title"
            valuePlaceholder="Enter value"
            initialCount={2}
            onChange={(data) => console.log(data)}
          />
        </Box>
      </Container>
  );
};

export default ExtraInformation;
