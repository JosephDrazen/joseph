import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Awards from "../components/awards"
import About from "../components/about"
import Contact from "../components/contact"

const Joseph = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={0} />
      <About offset={1} factor={1} />
      <Projects offset={1.5} factor={1.5} />
      <Awards offset={2} factor={2}/>
    </Parallax>
  </Layout>
)

export default Joseph
