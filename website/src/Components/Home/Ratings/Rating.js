import styled from "styled-components";
import StarRating from "./Rating/StarRating";
import RatingItem from "./Rating/RatingValue";
const {Component} = require("react")

const RatingContainer = styled.tr`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 1300px) {
    padding: 15px;
  }

  @media(max-width: 1080px) {
    padding: 10px;
  }
  
`;

const RatingInnerContainer = styled.td`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Number = styled.div`
  min-width: 50px;
  min-height: 50px;
  background-color: rgb(227, 24, 55);
  border-radius: 10000px;
  text-align: center;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 20px;
  font-family: "Rubik", sans-serif;

  @media(max-width: 1300px) {
    min-width: 40px;
    min-height: 40px;
    font-size: 18px;
  }

  @media(max-width: 550px) {
    min-width: 35px;
    min-height: 35px;
    font-size: 14px;
  }

  @media(max-width: 600px) {
    min-width: 0;
    min-height: 0;
    background-color: transparent;
    color: black;
  }

  @media(max-width: 350px) {
    display: none;
  }
  
  
`;

const TeacherInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  
  @media(max-width: 1000px) {
    width: 65%;
  } 

  @media(max-width: 600px) {
    width: 55%;
  }

  @media(max-width: 350px) {
    justify-content: center;
  }

  @media(max-width: 350px) {
    width: 25%;
  }


`;

const RatingItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  flex-grow: 1;
  
  @media(max-width: 1000px) {
    display: block;
    width: 20%;
    padding-left: 12%;
  }

  @media(max-width: 800px) {
    padding-left: 0;
  }

  @media(max-width: 350px) {
    padding-left: 20%;
  }
`;


const TeacherName = styled.a`
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #363333;
  font-family: "Roboto", sans-serif;
  text-align: center;
  
  &:hover {
    cursor: ${props => props["static"] ? 'not-allowed' : 'pointer'};
    text-decoration: ${props => props["static"] ? 'none' : 'underline'};
  }

  @media(max-width: 1300px) {
    font-size: 15px;
  }

  @media(max-width: 800px) {
    padding-left: 0;
  }

  @media(max-width: 600px) {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 350px) {
    font-size: 10px;
  }
  
  
`;



class RatingBox extends Component {

    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
        this.first = true;

    }

    getWindowState() {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    onResize() {
        this.setState(this.getWindowState());
    }

    componentDidMount() {
        if (!this.first) return;
        this.first = false;

        window.addEventListener("resize", this.onResize.bind(this));

    }

    getTeacherName() {

        let rank = this.state.windowWidth < 350 ? `#${this.props.rank}` : "";
        let doBreak = this.state.windowWidth < 350 ? <br/> : "";

        return this.data["legacyId"] ? (
            <TeacherName target="_blank" href={`https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${this.data['legacyId']}`}>
                {rank}{doBreak}{this.data.real_name}
            </TeacherName>
        ) : (
            <TeacherName static>{rank}{doBreak}{this.data.real_name}</TeacherName>
        )
    }

    render() {
        let sx = {
            "borderBottom": !this.props.last ? "1px solid rgba(0, 0, 0, 0.23)" : null
        }

        let takeAgainPercent = this.data["wouldTakeAgainPercent"] ? `${parseFloat(this.data["wouldTakeAgainPercent"]).toFixed(1)}%` : "N/A";
        let avgRating = this.data["avgRating"] ? `${parseFloat(this.data["avgRating"]).toFixed(1)}/5.0` : "N/A";
        let avgDifficulty = this.data["avgDifficulty"] ? `${parseFloat(this.data["avgDifficulty"]).toFixed(1)}/5.0` : "N/A";

        return (
            <RatingContainer style={sx}>
                <RatingInnerContainer>
                    <TeacherInfo>
                        <Number>#{this.props.rank}</Number>
                        {this.getTeacherName()}
                        <StarRating windowWidth={this.state.windowWidth} rating={this.data["avgRating"]} />
                    </TeacherInfo>
                    <RatingItems>
                        <RatingItem windowWidth={this.state.windowWidth} label="Sections" value={this.data?.sections?.join(", ")} />
                        <RatingItem windowWidth={this.state.windowWidth} label="Rating" value={avgRating} />
                        <RatingItem windowWidth={this.state.windowWidth} label="Ratings" value={this.data["numRatings"] || "N/A"} />
                        <RatingItem windowWidth={this.state.windowWidth} label="Difficulty" value={avgDifficulty} />
                        <RatingItem windowWidth={this.state.windowWidth} label="Would Retake" value={takeAgainPercent} />
                    </RatingItems>
                </RatingInnerContainer>
            </RatingContainer>
        )
    }

}

export default RatingBox;
