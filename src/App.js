import {data} from './data' ; 
import Card from './Components/Card';;

function App() {
  const dataShow = data.map(item => <Card key={item.id} img={item.image} title={item.title} desc={item.desc} review={item.review} price ={item.price}/>);
  return (
    <div style={{display:"flex"  , justifyContent:"center" , alignItems:"center" , gap :"15px" , flexWrap:"wrap" }}>
      {dataShow}
    </div>
  );
}

export default App;
