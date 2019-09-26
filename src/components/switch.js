import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Switches = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <FormGroup >
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="events"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Events"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="lands"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Lands"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="Speakers"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Speakers"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="sponsors"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Sponsors"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="stages"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Stages"
        />
      </FormGroup>
    </div>
  );
}

export default Switches