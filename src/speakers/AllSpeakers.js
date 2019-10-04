import React, { Component } from "react";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import AllSpeakerList from './AllSpeakerList'
import Loading from '../components/Loading';

class AllSpeakers extends Component {
  state = {
    speakers: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/speakers")
      .then(res => res.json())
      .then(data => {
        this.setState({
          speakers: data.speakers,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const speakersData = this.state.speakers;
    return (
      <React.Fragment>
        {this.state.loading || !this.state.speakers ? (
          <Loading/>
        ) : (
          <React.Fragment>
            <div style={{ width: "80%", margin: "auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <RecordVoiceOverIcon
                  style={{ color: "#23ca0f", fontSize: "38px" }}
                />
                <h2>Speakers</h2>
              </div>
              <AllSpeakerList speakersData={speakersData} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default AllSpeakers;
