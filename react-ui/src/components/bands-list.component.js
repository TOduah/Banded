import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Band = props => (
  <tr>
    <td>{props.band.username}</td>
    <td>{props.band.description}</td>
    <td>{props.band.duration}</td>
    <td>{props.band.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.band._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBand(props.band._id) }}>delete</a>
    </td>
  </tr>
)

export default class BandsList extends Component {
  constructor(props) {
    super(props);

    this.deleteBand = this.deleteBand.bind(this)

    this.state = {bands: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/bands/')
      .then(response => {
        this.setState({ bands: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBand(id) {
    axios.delete('http://localhost:5000/bands/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      bands: this.state.bands.filter(el => el._id !== id)
    })
  }

  bandList() {
    return this.state.bands.map(currentband => {
      return <Band band={currentband} deleteBand={this.deleteBand} key={currentband._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Bands</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.bandList() }
          </tbody>
        </table>
      </div>
    )
  }
}