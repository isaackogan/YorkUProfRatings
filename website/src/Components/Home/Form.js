import CourseSearch from "./Form/CourseSearch";
import styled from "styled-components";
import SessionSearch from "./Form/SessionSearch";

const {Component} = require("react")

const FormContainer = styled.div`
  display: inline-block;
  height: 100%;
  margin-bottom: 32px;
  margin-top: 20px;
`;


class Form extends Component {
    padding = "50px";

    constructor(props) {
        super(props);
        this.first = true;
        this.state = this.getWindowState()

    }

    getWindowState() {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    componentDidMount() {
        if (!this.first) return;
        this.first = false;

        window.addEventListener("resize", () => this.onResize.bind(this));

    }

    onResize() {
        let windowState = this.getWindowState();
        this.setState(windowState);
    }

    render() {

        let width = "300px";
        if (this.state.windowWidth < 1000) {
            width = "100%";
        }

        let sx = {height: "50px", width: width}
        let sx2 = {...sx, ...{marginTop: "20px"}}

        return (
            <FormContainer style={{width: width}}>
                <SessionSearch style={sx} />
                <CourseSearch style={sx2} />
            </FormContainer>
        )
    }

}

export default Form;
