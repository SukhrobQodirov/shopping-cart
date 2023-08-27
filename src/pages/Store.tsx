import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  console.log(storeItems);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return(
            <Col key={item.id}>
              <StoreItem {...item}></StoreItem>
            </Col>
          ) 
        })}
        <Col></Col>
      </Row>
    </>
  );
}