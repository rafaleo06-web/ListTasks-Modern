import { Box, Grid, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { ItemTasks } from "./ItemTasks";

export const ListTasks = ({ tasks, onDeleteTask }) => {
  const taskTodo = tasks.filter((ta) => ta.state === "todo");
  const taskDoing = tasks.filter((ta) => ta.state === "doing");
  const taskDone = tasks.filter((ta) => ta.state === "done");

  return (
    <Box display="flex" justifyContent="center" alignItems="center" paddingTop={"30px"} paddingX={"70px"}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <GpsFixedIcon sx={{ color: "#a51d28" }} />
            <Typography align="center" fontSize={"20px"} fontWeight={"bold"} ml={1}>
              To do
            </Typography>
          </Box>
          {taskTodo.map((task, index) => (
            <ItemTasks key={index} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <StarIcon sx={{ color: "#ffe959" }} />
            <Typography align="center" fontSize={"20px"} fontWeight={"bold"}>
              Doing
            </Typography>
          </Box>
          {taskDoing.map((task, index) => (
            <ItemTasks key={index} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center">
            <CheckBoxIcon sx={{ color: "#09bc07" }} />
            <Typography align="center" fontSize={"20px"} fontWeight={"bold"}>
              Done
            </Typography>
          </Box>
          {taskDone.map((task, index) => (
            <ItemTasks key={index} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
