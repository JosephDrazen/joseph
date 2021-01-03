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
    <Parallax pages={4}>
      <Hero offset={0} factor={0} />
      <About offset={1} factor={1} />
      <Projects offset={1.8} factor={0} />
      <Awards offset={2.4} factor={0}/>
    </Parallax>
  </Layout>
)

export default Joseph
