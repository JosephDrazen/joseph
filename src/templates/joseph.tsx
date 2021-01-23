import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Awards from "../components/awards"
import About from "../components/about"
import Testimonies from "../components/testimony"
import Contact from "../components/contact"

const Joseph = () => (
  <Layout>
    <Parallax pages={6}>
      <Hero offset={0} factor={0}/>
      <About offset={1} factor={1} />
      <Projects offset={2} factor={1} />
      <Awards offset={3} factor={1} />
      <Testimonies offset={4} factor={1} />
      <Contact offset={5} factor={1} />
    </Parallax>
  </Layout>
)

export default Joseph
