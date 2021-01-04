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
    <Parallax pages={5}>
      <Hero offset={0} factor={0} />
      <About offset={1} factor={0} />
      <Projects offset={2} factor={0} />
      <Awards offset={3} factor={0}/>
      <Testimonies offset={4} factor={0}/>
    </Parallax>
  </Layout>
)

export default Joseph
