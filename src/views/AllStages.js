import React, { Component } from "react";
import ItemList from '../components/ItemList';
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Loading from '../components/Loading';

class AllStages extends Component {
  state = {
    stages: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/stage")
      .then(res => res.json())
      .then(data => {
        this.setState({
          stages: data.stages,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const stagesData = this.state.stages; 
    return (
      <React.Fragment>
        {this.state.loading || !this.state.stages ? (
          <Loading/>
        ) : (
          <React.Fragment>
            <div style={{width:"80%", margin:"auto"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <CropOriginalIcon style={{ color: "##001355", fontSize:"38px" }} />
              <h2>Stages</h2>
            </div>
            <ItemList stagesData={stagesData} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default AllStages;
