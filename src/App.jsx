import './App.css'
import Button from './components/Button';
import CardProduct from './components/CardProduct';
import FlexContainer from './components/FlexContainer';
import NavBar from './components/NavBar';

function App() {


  


  return (
    <>

    <div style={ { display:"flex", justifyContent:"space-between"} }>
      <NavBar/>
    </div>


      <section className="card-products">
        <FlexContainer>

          <div className="card-product-container" style={ { display:"flex", flexDirection:"row", gap:"25px"} }>

            <CardProduct 
              img={"/images/pululos/pululoWavesKing.png"}
              name={"Pululo Rey De Las Olas"}
              price={12.4}
              text={"Este pululo es el rey de las olas"}
            />

            <CardProduct
              img={"/images/pululos/pululoPirata.png"}
              name={"Pululo Pirata"}
              price={6.9}
              text={"Este pululo es un pirata"}
            />


          </div>

        </FlexContainer>

      </section>  

    </>
  )
}

export default App
