import { Delete } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { getSkillColor } from "../helpers/getSkillColor";

export const ItemTasks = ({ task, onDeleteTask }) => {
  return (
    <Box borderRadius={"8px"} border={"1px solid #c4c4c4"} padding={"8px"} marginTop={"15px"}>
      <Typography fontWeight={"medium"} paddingBottom={"10px"}>
        {task.task}
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          {task.skills.map((skill, index) => (
            <Button
              key={index}
              sx={{
                backgroundColor: getSkillColor(skill),
                marginRight: "4px",
                fontSize: "12px",
                color: "#1f1f1f",
                border: "1px solid #c4c4c4",
              }}
            >
              {skill.toUpperCase()}
            </Button>
          ))}
        </Box>
        <IconButton onClick={() => onDeleteTask(task)}>
          <Delete></Delete>
        </IconButton>
      </Box>
    </Box>
  );
};
