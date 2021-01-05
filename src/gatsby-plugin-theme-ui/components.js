import React from "react"
import AwardsCard from "../components/AwardsCard"
import ProjectCard from "../components/ProjectCard"
import TestimonyCard from "../components/TestimonyCard"
import ValuesCard from "../components/ValuesCard"

const components = {
  ProjectCard: ({ link, title, children }) => (
    <ProjectCard link={link} title={title}>
      {children}
    </ProjectCard>
  ),
  AwardsCard: ({ date, title, name, children }) => (
    <AwardsCard date={date} title={title} name={name}>
      {children}
    </AwardsCard>
  ),
  TestimonyCard: ({ name, role, children }) => (
    <TestimonyCard name={name} role={role}>
      {children}
    </TestimonyCard>
  ),
  ValuesCard: ({ title, imga, children }) => (
    <ValuesCard title={title} imga={imga}>
      {children}
    </ValuesCard>
  ),
}

export default components
