import React, { Component } from "react";
import EventDetail from "../components/EventDetail";
import Loading from '../components/Loading';

class InfoEvent extends Component {
  state = {
    event: [],
    loading: true
  };
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://imap-talent.herokuapp.com/events/${params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          event: data.event,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const eventData = [this.state.event];
    console.log(this.state.event);
    return (
      <React.Fragment>
        {this.state.loading || !this.state.event ? (
          <Loading/>
        ) : (
          eventData.map((e, i) => {
            return (
              <EventDetail
                key={i}
                title={e.title}
                description={e.description}
                speaker={e.speaker}
                stage={e.stage}
                type={e.type}
                scheduledFor={e.scheduledFor}
                id={e._id}
              />
            );
          })
        )}
      </React.Fragment>
    );
  }
}

export default InfoEvent;
