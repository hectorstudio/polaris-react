import { darken } from 'polished'

const Theme = {
    primary: `#5683C6`,
    secondary: `#8390A4`,
    text: `#C8D4E0`,
    dark: `#2B303A`,
    light: `#F5F7FA`,
    darken: {
        primary: darken(0.2, '#5683C6')
    }
}

export default Theme