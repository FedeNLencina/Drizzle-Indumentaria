import Container from "react-bootstrap/Container";
import "./Location.css";

export function Location() {
  return (
    <Container className="mapContainer d-flex ">
      <iframe
        className="map"
        title="myFrame"
        frameborder="0"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=710&amp;height=506&amp;hl=en&amp;q=Remedios%20de%20escalada%202193%20Villa%20de%20Mayo+(Floran's%20Belleza)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Container>
  );
}
