import { useState, useEffect } from "react";
import {vestidosList} from "../../data/vestidos";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../../components/ItemCard/Item";

export function ItemList() {
     const [vestidos, setVestido] = useState([]);

     const getVestidos = () => {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(vestidosList);
         }, 2000);
       });
    };
    

    useEffect(() => {
        const renderVestidos = async () => {
            try {
                const listado = await getVestidos();
                setVestido(listado);
            } catch (error) {
                console.log("hubo un error");
            }
        };
        renderVestidos();
    }, []);
    
    
    return (
      <Container>
            {vestidos.map((vestido) => {
                console.log("vestido ", vestido.id, vestido)
                return <Item vestido={vestido} />;
            })}
      </Container>
    );
}