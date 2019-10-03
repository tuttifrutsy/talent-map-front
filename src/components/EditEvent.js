import React, {Component} from 'react';
import FormEditEvent from './FormEditEvent';
import Typography from "@material-ui/core/Typography";

class EditEvent extends Component {

  state = {
    title: this.props.title,
    description: this.props.description,
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


  render () {
    return (
      <div>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
         Editar Evento
        </Typography>
        <FormEditEvent />
      </div>
    );
  }
}

export default EditEvent;