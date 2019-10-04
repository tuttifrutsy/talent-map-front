import React, {Component} from 'react';
import Loading from '../components/Loading';
import SpeakerDetail from './SpeakerDetail';

class SpeakerViewDetail extends Component {
  state = {
    speaker: [],
    loading: true,
  }
  componentDidMount() {
    const {params}= this.props.match;
    fetch(`https://imap-talent.herokuapp.com/speakers/${params.id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        speaker: data.speaker,
        loading: false
      });
    })
    .catch(err => console.log(err));
  }
  render() {
    const speakerData = [this.state.speaker];
    console.log(speakerData)
    return(
      <React.Fragment>
        {this.state.loading || !this.state.speaker ? (
          <Loading />
        ) : (
          speakerData.map((e, i) => {
            return (
              <SpeakerDetail 
              key={i}
              name={e.name}
              resume={e.resume}
              occupation={e.occupation} 
              avatar={e.avatar}
              land={e.land}
              id={e._id}
              />
            )
          })
        )}
      </React.Fragment>
    )
  }
}

export default SpeakerViewDetail;