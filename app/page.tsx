import { Container } from "./components/container";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <Navbar />
        <Hero />
        </Container>
    </div>
  )
}