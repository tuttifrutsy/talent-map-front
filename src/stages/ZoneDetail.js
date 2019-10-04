import React, {Component} from "react";
import ZoneViewDetail from "./ZoneViewDetail";
import Loading from '../components/Loading';

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
   console.log(stageData)
  return (
    <React.Fragment>
    {this.state.loading || !this.state.stage ? ( 
    <Loading/>
    ) : (
      stageData.map((e, i) => {
        return (
          <ZoneViewDetail 
          key={i}
          name={e.name}
          description={e.description}
          events={e.events}
          zone={e.zone}
          image={e.image}
          />
        );
      })  
    )}
    </React.Fragment>
  );
 }
};

export default ZoneDetail;
