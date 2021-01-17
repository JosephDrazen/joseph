/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import TestimonyMDX from "../sections/testimony"

const Testimonies = ({ offset, factor = 0 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="#000"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.2}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
    <div id='awards'/>

      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(3, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <TestimonyMDX />
        </div>
      </Inner>
      
    </Content>
  </div>
)

export default Testimonies
