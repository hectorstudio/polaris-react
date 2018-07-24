import { darken } from 'polished'

const Theme = {
    primary: `#6b5697`,
    secondary: `#FFFFFF50`,
    text: `#5D6680`,
    dark: `#282137`,
    light: `#F5F7FA`,
    background: `#171B32`,
    darken: {
        primary: darken(.2, '#6b5697'),
        dark: darken(.1, '#282137'),
    },
    alerts: {
        success: `#81A35A`,
        error: `#E83C50`,
        info: `#4C6EAC`
    },
    layout: {
        header: '6rem',
        sidebar: '25rem',
        search: '35rem'
    }
}

export default Theme