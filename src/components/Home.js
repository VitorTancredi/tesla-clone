import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rigthBtnText="Existing inventory"
                backgroundImg="model-s.jpg"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rigthBtnText="Existing inventory"
                backgroundImg="model-y.jpg"
            />
             <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rigthBtnText="Existing inventory"
                backgroundImg="model-3.jpg"
            />
             <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                leftBtnText="Custom Order"
                rigthBtnText="Existing inventory"
                backgroundImg="model-x.jpg"
            />
             <Section 
                title="Lowest Cost Solar Panel in America"
                description="Money-back guatantee"
                leftBtnText="Order now"
                rigthBtnText="Learn more"
                backgroundImg="solar-panel.jpg"
            />
             <Section 
                title="Solar for New Roofs"
                description="Solar rood Costs Less Than a new Roof Plus Solar Panel"
                leftBtnText="Order now"
                rigthBtnText="Learn more"
                backgroundImg="solar-roof.jpg"
            />
             <Section 
                title="Accessories"
                description="8 "
                leftBtnText="Order now"
                backgroundImg="accessories.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
