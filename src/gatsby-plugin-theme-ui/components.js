import React from "react"
import AwardsCard from "../components/AwardsCard"
import ProjectCard from "../components/ProjectCard"
import TestimonyCard from "../components/TestimonyCard"


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
}

export default components
