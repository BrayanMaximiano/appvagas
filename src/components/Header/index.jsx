import { Link} from "react-router-dom";
import { AddButton, Container, Title } from "./styles";


const Index = () => {

    

    return(
        <Container >
            <Title>Vagas</Title>
            <AddButton><Link to={"/form"}> +</Link></AddButton>
        </Container>
    )
}

export default Index;