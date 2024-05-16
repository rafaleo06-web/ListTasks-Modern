import { Alert, AlertTitle, Box, Button, FormControl, MenuItem, Modal, Select, TextField } from "@mui/material";
import { AddTaskOutlined } from "@mui/icons-material";
import { useState } from "react";

export const InsertForm = ({ onAddTask, validTaskNotRepeat }) => {
  const [inputTask, setInputTask] = useState("");
  const [inputSkills, setInputSkills] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handlerInput = ({ target }) => {
    setInputTask(target.value);
  };

  const handleToggleSkill = (skill) => {
    if (inputSkills.includes(skill)) {
      setInputSkills(inputSkills.filter((s) => s !== skill));
    } else {
      setInputSkills([...inputSkills, skill]);
    }
  };

  const submitTask = () => {
    if (inputTask.length <= 0 || inputSkills.length <= 0 || !selectedState) {
      setShowAlert(true);
      setAlertType("warning");
      setOpenModal(true);
      setTimeout(() => {
        setShowAlert(false);
        setOpenModal(false);
      }, 2000);
      return;
    }
    const taskFound = validTaskNotRepeat(inputTask);
    if (!taskFound) {
      const task = { task: inputTask, skills: inputSkills, state: selectedState };
      onAddTask(task);
      setInputTask("");
      setInputSkills([]);
      setSelectedState("");
      setShowAlert(true);
      setAlertType("success");
      setOpenModal(true);
      setTimeout(() => {
        setShowAlert(false);
        setOpenModal(false);
      }, 2000);
    } else {
      setShowAlert(true);
      setAlertType("error");
      setOpenModal(true);
      setTimeout(() => {
        setShowAlert(false);
        setOpenModal(false);
      }, 2000);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginY={"30px"}
      mx={"auto"}
      sx={{ width: 700 }}
    >
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ p: 3, width: "400px", mx: "auto" }}>
          {showAlert && (
            <Alert severity={alertType}>
              <AlertTitle>
                {alertType === "success" ? "Successfully" : alertType === "error" ? "Error" : "warning"}
              </AlertTitle>
              {alertType === "success"
                ? "Task added successfully "
                : alertType === "error"
                ? "Task already exists"
                : "A input is empty"}
            </Alert>
          )}
        </Box>
      </Modal>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        value={inputTask}
        placeholder="Enter a task"
        onChange={handlerInput}
        fullWidth
      />
      <Box
        width={"100%"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        paddingTop="10px"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            sx={{
              backgroundColor: inputSkills.find((da) => da === "html") ? "#faa320" : "white",
              margin: "5px",
              fontSize: "12px",
              color: "#1f1f1f",
              border: "1px solid #c4c4c4",
              ":hover": {
                backgroundColor: "#faa320",
                color: "#1f1f1f",
              },
            }}
            onClick={() => handleToggleSkill("html")}
          >
            HTML
          </Button>
          <Button
            sx={{
              backgroundColor: inputSkills.includes("css") ? "#18d4c7" : "white",
              margin: "5px",
              fontSize: "12px",
              color: "#1f1f1f",
              border: "1px solid #c4c4c4",
              ":hover": {
                backgroundColor: "#18d4c7",
                color: "#1f1f1f",
              },
            }}
            onClick={() => handleToggleSkill("css")}
          >
            CSS
          </Button>
          <Button
            sx={{
              backgroundColor: inputSkills.includes("javascript") ? "#ffcf32" : "white",
              margin: "5px",
              fontSize: "12px",
              color: "#1f1f1f",
              border: "1px solid #c4c4c4",
              ":hover": {
                backgroundColor: "#ffcf32",
                color: "#1f1f1f",
              },
            }}
            onClick={() => handleToggleSkill("javascript")}
          >
            JAVASCRIPT
          </Button>
          <Button
            sx={{
              backgroundColor: inputSkills.includes("react") ? "#47dcfa" : "white",
              margin: "5px",
              fontSize: "12px",
              color: "#1f1f1f",
              border: "1px solid #c4c4c4",
              ":hover": {
                backgroundColor: "#47dcfa",
                color: "#1f1f1f",
              },
            }}
            onClick={() => handleToggleSkill("react")}
          >
            REACT
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select displayEmpty size="small" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"todo"}>To do</MenuItem>
              <MenuItem value={"doing"}>Doing</MenuItem>
              <MenuItem value={"done"}>Done</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<AddTaskOutlined></AddTaskOutlined>}
            sx={{ backgroundColor: "#6555fb" }}
            onClick={submitTask}
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
