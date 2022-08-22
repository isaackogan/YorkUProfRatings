import React, {Component} from 'react'
import { Rating } from 'react-simple-star-rating'

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.first = true;
        this.state = {
            value: this.props.rating
        }

    }

    render() {
        let size = undefined;
        if (this.props.windowWidth < 1300) size = 30;
        if (this.props.windowWidth < 1080) size = 25;
        if (this.props.windowWidth < 800) size = 0;
        return (
            <Rating size={size} fillColor={'rgb(227, 24, 55)'} ratingValue={(this.state.value / 5) * 100} allowHover={false} style={{pointerEvents: "none"}} />
        )
    }

}

export default StarRating;
