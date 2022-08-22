import {Component} from "react";
import styled from "styled-components";

const RatingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 1000px) {
    display: inline-block;
    white-space: nowrap
  }

  font-size: 15px;

  @media(max-width: 1300px) {
    font-size: 13px;
  }

  @media(max-width: 600px) {
    font-size: 12px;
  }

  @media(max-width: 350px) {
    font-size: 10.5px;
  }

`;

const OuterRatingContainer = styled.div`
    display: flex;
`;

const RatingItemLabel = styled.span`
  font-weight: 900;
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
  color: rgb(26, 26, 26);
  overflow: hidden;
  
  
`;

const RatingItemValue = styled.span`
    
`;


class RatingItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <OuterRatingContainer>
                <RatingItemContainer style={this.props.style}>
                    <RatingItemLabel>{this.props.label}{this.props.windowWidth < 1000 ? ": " : ""}</RatingItemLabel>
                    <RatingItemValue>{this.props.value}</RatingItemValue>
                </RatingItemContainer>
            </OuterRatingContainer>
        );
    }
}

export default RatingItem;
