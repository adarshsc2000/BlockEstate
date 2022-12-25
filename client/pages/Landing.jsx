import Container from "react-bootstrap/Container";
import AnimatedTextCharacter from "../components/Animations/AnimatedTextCharacter.jsx";
import AnimationForDescription from "../components/Animations/AnimationForDescription.jsx";
import AnimationForImages from "../components/Animations/AnimationForImages.jsx";

export default function Landing() {
  return (
    
    <Container fluid>
      <br />
      <b ><AnimatedTextCharacter text="Welcome to BlockEstate" /></b>
      <br />
      <AnimationForDescription/>
      <div align="center"> 
        <AnimationForImages/>
      </div>
    </Container>
  )
}


