interface Palette {
  purple: string
  green: string
  red: string
  black: string
  white: string
}

interface TextVariants {
  header: {
    fontFamily: string
    fontSize: number
    fontWeight: string
  }
  body: {
    fontFamily: string
    fontSize: number
  }
}

export interface Theme {
  colors: {
    background: string
    foreground: string
    primary: string
    success: string
    danger: string
    failure: string
  }
  spacing: {
    s: number
    m: number
    l: number
    xl: number
  }
  textVariants: TextVariants
}

const palette: Palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
}

export const theme: Theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
}

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
}
