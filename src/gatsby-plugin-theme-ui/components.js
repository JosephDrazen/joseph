import React from "react"
import AwardsCard from "../components/AwardsCard"
import ProjectCard from "../components/ProjectCard"

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
}

export default components
