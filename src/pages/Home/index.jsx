import About from "../../components/About"
import { Footer } from "../../components/Footer"
import { Grid } from "../../components/Grid"
import Hero from "../../components/Hero"
import { HomeSection } from "./style"

function Home() {

  return (
    <HomeSection>
      <Hero />
      <Grid id="ourStyle" />
      <About/>
      <Footer/>
    </HomeSection>
  )
}
export default Home