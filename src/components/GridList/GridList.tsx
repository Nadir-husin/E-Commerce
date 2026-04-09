import { Row, Col } from "react-bootstrap";



type TGridListProps <T>={
    records : T[] ,
    renderItem : (record: T) => React.ReactNode
}

type hasId = {
    id? : number
}

const Gridlist = <T extends hasId> ({records , renderItem } :TGridListProps<T>) => {


  const render = records.length  > 0 ? 
    records.map((category)=>
          <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={category.id}>
          {renderItem(category)}
        </Col>
    ):""

  return   <Row>{render}</Row>
}

export default Gridlist
