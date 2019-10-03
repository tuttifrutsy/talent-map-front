import React, {Component} from "react";
import ZoneViewDetail from "../components/ZoneViewDetail";

class ZoneDetail extends Component {

  state ={
    stage:[],
    loading: true,
  }

  componentDidMount() {
    const {params} = this.props.match;
    fetch(`https://imap-talent.herokuapp.com/stage/${params.id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        stage: data.stage,
        loading: false
      });
    })
    .catch(err => console.log(err));
  }
  render() {
    const stageData =[this.state.stage];
  
  return (
    <React.Fragment>
    {this.state.loading || !this.state.stage ? ( 
    <div> Loading ...</div>
    ) : (
      stageData.map((e, i) => {
        return (
          <ZoneViewDetail 
          key={i}
          name={e.name}
          description={e.description}
          events={e.events}
          zone={e.zone}
          />
        );
      })  
    )}
    </React.Fragment>
  );
 }
};

export default ZoneDetail;
