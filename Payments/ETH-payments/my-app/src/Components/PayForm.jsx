import { Dropdown } from "@nextui-org/react";

export const SettypeForm = ()=>{
  const [option,setoption] = useState(null);

  const handleDropdownChange = (event, { value }) => {
    setoption(value);
    console.log(value);
  };
  return( 
    <>
    <Dropdown>
      <Dropdown.Button flat>Reserve Type:</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions"> 
      <Dropdown.Item key="new">Opciones De Tour:</Dropdown.Item>
        <Dropdown.Item key="otavalo">Otavalo</Dropdown.Item>
        <Dropdown.Item key="papallacta">Papallacta</Dropdown.Item>
        <Dropdown.Item key="quilotoa">Quilotoa</Dropdown.Item>
        <Dropdown.Item key="cuyabeno">Cuyabeno</Dropdown.Item>
        <Dropdown.Item key="cotopaxis">Cotopaxi Summit </Dropdown.Item>
        <Dropdown.Item key="mindo">Mindo</Dropdown.Item>
        <Dropdown.Item key="cotopaxih">Cotopaxi Hike</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h1>{`paying for ${option}`}</h1> 
    </>
   
    
  ) 

}