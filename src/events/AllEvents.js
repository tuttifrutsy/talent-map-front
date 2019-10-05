import React, {Component} from 'react';
import EventsList from './AllEventsList';
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import Loading from '../components/Loading';

class AllEvents extends Component {
  state = {
    events: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/api/events")
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
  
    const eventsData = this.state.events;
    return (
      <React.Fragment>
        {this.state.loading || !this.state.events ? (
          <Loading/>
        ) : (
          <React.Fragment>
            <div style={{ width: "100%", margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <RecentActorsIcon
                  style={{ color: "#23ca0f", fontSize: "38px" }}
                />
                <h2>Events</h2>
              </div>
              <EventsList eventsData={eventsData} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default AllEvents;

