import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Develope width={40} height={40} /> Full Stack Developer
</Title>
<Description>
I love to create design which speaks, Keep it clean, minimal and simple. and i love putting this idea into reallity using the latest and industry standard solutions
</Description>
<Description>
<strong>I like to Design , Code and Solve Problems</strong>
        <p>
 Web Apps Design and Developement , Desktop and Mobile Apps , Backend and RestAPI Development , 3rd Party Integerations etc...
</p>
</Description>
<Description>
<strong>Tools</strong>
        <p>
 MERN and MEAN Stack , Flutter , Laravel , NodeJS and Express JS, Firebase , Mongodb and Mysql and Figma etc...
</p>
</Description>

            </Main>


            <Main>
<Title>
    <Develope width={40} height={40} /> VAS Engineer
</Title>
<Description>
I work in a big telecom company to provide Value Adding Services with quality and ease of use
</Description>
<Description>
<strong>Platforms I work on</strong>
<p>
USSD , SMSC , MMSC , DMC , OTA , VoiceMail and CRBT etc...
</p>
</Description>
<Description>
<strong>SKills</strong>
<p>
Docker and Containers, Virtual Machines , Java and maven , System Integration , RestApi ,  Bash , DevOps , Clustors and many more
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
