import { darken } from 'polished'

const Theme = {
    primary: `#518AFF`,
    secondary: `#8390A4`,
    text: `#aeb9c4`,
    dark: `#2B303A`,
    light: `#F5F7FA`,
    darken: {
        primary: darken(0.2, '#518AFF')
    },
    alerts: {
        success: `#81A35A`,
        error: `#E83C50`,
        info: `#4C6EAC`
    }
}

export default Theme