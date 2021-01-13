import React from 'react'
import Particles from 'react-tsparticles'
import { withTheme } from 'styled-components'

class HeroParticles extends React.Component {
    render() {
        return(
        <React.Fragment>
            <Particles
            id="tsparticles"
            height="80vh"
            options={{
            fpsLimit: 60,
            particles: {
                number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
                },
                color: {
                value: '#ff0000',
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true,
                },
                },
                shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: this.props.theme.body,
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src:
                    'https://cdn.matteobruni.it/images/particles/github.svg',
                    width: 100,
                    height: 100,
                },
                },
                opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 3,
                    opacity_min: 0.1,
                    sync: false,
                },
                },
                size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false,
                },
                },
                line_linked: {
                enable: true,
                distance: 100,
                color: 'random',
                opacity: 0.4,
                width: 1,
                triangles: {
                    enable: true,
                    color: this.props.theme.text,
                    opacity: 0.1,
                },
                },
                move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
                },
            },
            retina_detect: true,
            background: {
                color: this.props.theme.body,
                image: '',
                position: '50% 50%',
                repeat: 'no-repeat',
                size: 'cover',
            },
            }}
        />
        </React.Fragment>
        )
    }
}

export default withTheme(HeroParticles);