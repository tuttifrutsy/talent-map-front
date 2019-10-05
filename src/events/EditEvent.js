import React, {Component} from 'react';
import data from '../data.json';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

class EditEvent extends Component {
  state = {
    todos: data,
    speakers: data.speakers,
    stages: data.stages,
    stageSelected: "",
    speakerSelected: "",
    title: "",
    description: "",
    date: new Date("2014-08-18T21:11:54")
  };

  onSubmit = async e => {
   
    e.preventDefault();
    const newEvent = {
      title: this.state.title,
      description: this.state.description,
      scheduledFor: this.state.date,
      speakerId: this.state.speakerSelected,
      stageId: this.state.stageSelected
    };
    const res = await axios.post(
      "https://imap-talent.herokuapp.com/api/events",
      newEvent
    );
  

    window.location.href = '/events';
  };

  onSelectChange = e => {
  
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({ date });
  };

  render() {
    const speakers = this.state.speakers;
    const stages = this.state.stages;

    return (
      <div className="form-login">
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
          Editar Evento
        </Typography>
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
          {}
        </Typography>
        <div className="form-group">
          <select
            onChange={this.onSelectChange}
            name="speakerSelected"
            className="form-control"
          >
            {speakers.map((e, i) => {
              return (
                <option key={i} value={`${e.id}`}>
                  {e.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <select
            onChange={this.onSelectChange}
            name="stageSelected"
            className="form-control"
          >
            {stages.map((e, i) => {
              return (
                <option key={i} value={`${e.id}`}>
                  {e.title}
                </option>
              );
            })}
          </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              required
              onChange={this.onSelectChange}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              required
              onChange={this.onSelectChange}
            ></textarea>
          </div>
          <div className="form-group">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={this.state.date}
                onChange={this.onChangeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={`${this.state.date}`}
                selected={this.state.date}
                onChange={this.onChangeDate}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <form onSubmit={this.onSubmit}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              style={{ margin: "2%" }}
              startIcon={<SaveIcon />}
            >
              Guardar
            </Button>
        
          </form>
        </div>
      
    );
  }
}

export default EditEvent;