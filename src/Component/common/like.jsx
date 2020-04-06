import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolideHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={this.getClass()} onClick={this.props.onClLick} />
      </div>
    );
  }

  getClass() {
    return this.props.isLiked ? faSolideHeart : faRegularHeart;
  }
}

export default Like;
