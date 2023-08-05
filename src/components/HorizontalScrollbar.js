import React from "react";
import { Box, Typography} from "@mui/material";
import ExercisesCard from "./ExercisesCard";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";





const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div>
      <Typography variant='h5' mb={1}>
      Horizonatlly scroll to see all the categories
      </Typography>
      <ScrollMenu >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExercisesCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
      
    </div>
  );
};

export default HorizontalScrollbar;
