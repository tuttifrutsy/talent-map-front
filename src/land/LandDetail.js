import React, { Component } from "react";
import ViewDetail from "./ViewDetail";
import Loading from '../components/Loading';

class LandDetail extends Component {
  state = {
    land: [],
    loading: true
  };

  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://imap-talent.herokuapp.com/api/lands/${params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          land: data.section,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const landData = [this.state.land];
   
    return (
      <React.Fragment>
        {this.state.loading || !this.state.land ? (
          <Loading/>
        ) : (
          landData.map((land,  i) => {
            return (
              <ViewDetail
                title={land.title}
                description={land.description}
                speakers={land.speakers}
                events={land.events}
                stages={land.stages}
                logoUrl={land.logoUrl}
                imageBg={land.imageBg}
                imageDetail={land.imageDetail}
                key={i}
              >
              </ViewDetail>
            );
          })
        )}
      </React.Fragment>
    );
  }
}

export default LandDetail;
