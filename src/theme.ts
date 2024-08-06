import  {ThemeConfig} from 'tailwindcss/types/config'

 const theme: Partial<ThemeConfig> = {
    colors: {
        primary:'#201E43',
        secondary: '#134B70',
        focus:'#eeeeee',
        active: '#508C9B',
        negative: '#A91D3A',
        negativeLight: '#C73659'
    },
    screens:{
        xs: '350px',
        s: '550px',
    }
}

export default theme;