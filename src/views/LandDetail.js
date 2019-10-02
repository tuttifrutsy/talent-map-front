import React, { Component } from "react";
import ViewDetail from "../components/ViewDetail";

class LandDetail extends Component {
  state = {
    land: [],
    loading: true
  };

  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://imap-talent.herokuapp.com/lands/${params.id}`)
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
    // const landDataStages = [this.state.land.stages];
    // console.log(landDataStages, "del LAndDetail");
    return (
      <React.Fragment>
        {this.state.loading || !this.state.land ? (
          <div>Loading...</div>
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
