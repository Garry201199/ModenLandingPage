import { Billing, Buisness, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './comp'
import styles from './styles'

function App() { 
  return (
    <div className="bg-[#00040f] overflow-hidden text-white w-full ">
      <div className={`${ styles.flexCenter }  ${styles.paddingX} `}>
        <div className={`${styles.boxwidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}   `}>
        <div className={`${styles.boxwidth}`}>
          <Hero/>
        </div>
      </div>
       

       <div className={`${styles.paddingX}   ${styles.flexStart}  `}>
        <div className={`${styles.boxwidth}`}>

         <Stats/>
         <Buisness/>
         <CardDeal/>
         <Billing/>
         <Testimonials/>
         <Clients/>
         <CTA />
         <Footer/>
        </div>
       </div>
    </div>
  )
}

export default App
