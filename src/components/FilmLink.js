import React, {Component} from 'react'

class FilmLink extends Component {
  render() {
    return (
      <a href={this.props.url}> {this.props.name} </a>
    )
  }
}

export default FilmLink
