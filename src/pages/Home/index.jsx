import { Grid } from "../../components/Grid"
import Hero from "../../components/Hero"
import { HomeSection } from "./style"

function Home() {

  return (
    <HomeSection>
      <Hero />
      <Grid id="ourStyle" />
    </HomeSection>
  )
}
export default Home