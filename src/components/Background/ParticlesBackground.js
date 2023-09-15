import React from 'react'
import Particles from "react-tsparticles"
import particlesConfig from './Config/particles-config'
//import {loadFull} from "tsparticles"
import {useCallback} from 'react'
import {loadSlim} from 'tsparticles-slim'

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine =>{
        console.log(engine);
        await loadSlim(engine);

    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles 
            id = "tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options = {particlesConfig}>
         </Particles>            
    )
}
export default ParticleBackground