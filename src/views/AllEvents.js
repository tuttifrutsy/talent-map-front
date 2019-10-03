import React, {Component} from 'react';

class AllEvents extends Component {
  state = {
    events: [],
    loading: true,
  }

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/events")
    .then(res => res.json())
    .then(data => {
      this.setState({
        events: data.events,
        loading: false
      });
    })
    .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.events);
    return(
      <React.Fragment>
        {this.state.loading || !this.state.events ? (
          <div>Loading ...</div>
        ) : (
          <div>Ya asta aca</div>
        )}
      </React.Fragment>
    )
  }
}
export default AllEvents;

