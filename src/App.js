import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import data from './component/data';



 function App() {
  
const cards = data.map(item => {
return (
    <Card 
        key = {item.id}
        item = {item}
        //or the spread method could be used as
        //{...item}
        // and then removing the item. in the card
    />
)
})        

return (
<div>
    <Navbar />
    <Hero />
    <section className="cards-list">
    {cards}
    </section>
    
</div>
)
}


export default App