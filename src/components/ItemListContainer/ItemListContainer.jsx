import Container from "react-bootstrap/Container";

export function ItemListContainer(props) {
    return (
        <Container className="text-center">
            <h1>{props.title}</h1>
        </Container>
    )
}
