import {declareState, generateKey} from "../../Tools/Toolbox";
import DeclaredComponent from "../../Tools/DeclaredComponent";
import styled from "styled-components";
import Rating from "./Ratings/Rating";

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  margin-top: -4px;
`;



const RatingBox = styled.table`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: left;
  border-radius: 4px;
`;



class Ratings extends DeclaredComponent {

    constructor(props) {
        super(props);
        this.state = {teachers: [], value: null}
    }

    onDeclareState(stateChange, keys) {
        // If course name changes
        if (keys.includes("course")) this.clearValue();

        // Only care about sections
        if (!keys.includes("teachers")) return;

        // Update session
        stateChange = {teachers: this.sortTeachers(stateChange.teachers)};
        this.setState(stateChange);
    }

    sortTeachers(teachers) {
        if (!teachers) return [];
        return teachers.sort((a, b) => ((a["avgRating"] || 0) > (b["avgRating"] || -1)) ? -1 : 1)
    }

    clearValue() {
        this.setState({value: null, teachers: []});
    }

    render() {
        let ratings = this.getRatings();

        if (ratings.length < 1) {

            return (
                <div />
            )

        } else {

            return (
                <RatingContainer>
                    <RatingBox>
                        <tbody>
                            {ratings}
                        </tbody>
                    </RatingBox>
                </RatingContainer>
            )

        }


    }

    getRatings() {
        let elements = [];
        let int = 0;

        for (let teacher of this.state.teachers) {
            int++;
            elements.push(<Rating data={teacher} key={generateKey()} rank={int} last={int === this.state.teachers.length}/>);
        }

        return elements;

    }


}

export default Ratings;
