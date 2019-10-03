import React, {Component} from "react";
import datos from '../data.json';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";



 class  FormEditEvent extends Component {
  state = {
     allData: datos,
     speakers:datos.speakers,
     stages:datos.stages,
     valuesStages: datos.stages.map((e, i)=>{
       return e._id
     })

  }

  render() { 
    const speakers = this.state.speakers;
    const stages = this.state.stages;
    const values = this.state.values;
    console.log(values)
  return (
    <Paper
      style={{
        padding: "2%",
        width: "50%",
        margin: "auto",
        background: "none",
        height: "85vh"
      }}
    >
      <form
        style={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-email-input"
          label="Título"
          style={{ color: "#001355" }}
          type="email"
          name="title"
          margin="normal"
          variant="outlined"
          placeholder="Ingresa el título"
        />

        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          style={{ color: "#001355" }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          style={{ color: "#001355" }}
          margin="normal"
          variant="outlined"
        />
        <select name="speakers">
          {speakers.map((stage, i) => {
            return (
              <option key={i} value={stage._id}>
                {stage.title}
              </option>
            );
          })}
        </select>
        <select name="stages">
          {stages.map((stage, i) => {
            return (
              <option key={i} value={stage._id}>
                {stage.title}
              </option>
            );
          })}
        </select>
        <TextField
          id="datetime-local"
          label="Fecha del Evento"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          style={{ color: "#001355" }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outlined-full-width"
          label="Resumen"
          style={{ margin: 8 }}
          placeholder="Describe el evento"
          helperText="No olvides este Campo!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            size="large"
            style={{ margin: "5%", backgroundColor: "#23ca0f" }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ margin: "5%", backgroundColor: "#23ca0f" }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Paper>
  );
}
}
export default FormEditEvent;