import React, {Component} from 'react';
import data from '../data.json';
import Typography from "@material-ui/core/Typography";
import DatePicker from '../components/DatePicker';
import axios from 'axios';

class EditEvent extends Component {
  state = {
    todos: data,
    speakers: data.speakers,
    stages: data.stages,
    stageSelected: "",
    speakerSelected:"",
    title:"",
    description:"",
    date: Date()
  }

  onSubmit = async e => {
    //console.log(this.state.title, this.state.description)
    e.preventDefault();
    const newEvent ={
      title: this.state.title,
      description:this.state.description,
      scheduledFor: this.state.date,
      speakerId: this.state.speakerSelected,
      stageId: this.state.stageSelected
    }
     const res = await axios.post("https://imap-talent.herokuapp.com/events", newEvent);
     console.log(res);
  };

  onSelectChange = e => {
    console.log(e.target.value, e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => {
    this.setState({});
  }
  // handleFormSubmit = (e) => {
  //   const title = this.state.title;
  //   const description = this.state.description;

  //   e.preventDefault();
  //   fetch(`https://imap-talent.herokuapp.com/events/${this.props.event._id}`, {
  //     method:'PUT',
  //     body: JSON.stringify(title, description),
  //     headers:{
  //       'Content-Type': 'application/json'}
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err))

  // }

  render() {
    const speakers = this.state.speakers;
    const stages = this.state.stages;

    return (
      <div>
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
          Editar Evento
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
            />
          </div>
          <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
        </div>
        <form onSubmit={this.onSubmit}>
          <button type="submit">save </button>
        </form>
      </div>
    );
  }
}

export default EditEvent;