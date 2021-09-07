const colors = require('tailwindcss/colors');

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['PTserif', 'serif']
      },
      colors: {
        blue: colors.lightBlue,
        'k-blue': '#39c3fa',
        'k-green': '#1db956',
        'k-brown': '#92400E',
        'k-d-brown': '#643e29',
        'k-gray': '#3b4b59',
        'k-l-gray': '#c2d0dc',
        'k-xl-gray': '#dde7f0',
      },
      opacity: {
        '6': '.06',
        '8': '.08',
        '97': '.97'
      },
      height: {
        '2px': '2px',
        '3px': '3px',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      margin: {
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        DEFAULT: '0 0 18px 0 rgba(0, 20, 40, 0.02), 0 0 10px 0 rgba(0, 20, 40, 0.03), 0 0 3px 0 rgba(0, 20, 40, 0.05)',
      },
      maxWidth: {
        'xs': '320px'
      },
      fontSize: {
        'sm':  rem(15),
        'base':  rem(17),
        'lg':  rem(19),
        'xl':  rem(21),
        '2xl': rem(25)
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: rem(17),
            h1: {
              fontSize: rem(24),
            },
            h2: {
              '&:first-child': {
                marginTop: '0'
              }
            },
            h3: {
              fontSize: rem(25),
            },
            h4: {
              fontSize: rem(22),
            },
            h5: {
              fontSize: rem(20),
              fontWeight: 'bold',
              marginTop: em(28, 17),
              marginBottom: em(8, 17)
            },
            img: {
              margin: '0.5rem 0',
              '&:first-child': {
                marginTop: '0'
              }
            },
            a: {
              color: '#009ad2',
              textDecoration: 'none',
              '&:hover': {
                color: '#00a1dc',
                textDecoration: 'underline',
              },
            },
            dt: {
              fontSize: rem(19),
            }
          },
        },
        'md': {
          css: {
            fontSize: rem(17),
            h1: {
              fontSize: rem(26),
            },
            h3: {
              fontSize: rem(25),
            },
            h4: {
              fontSize: rem(22),
            },
            h5: {
              fontSize: rem(20),
            },
            img: {
              margin: '0.75rem 0',
              '&:first-child': {
                marginTop: '0'
              }
            },
            dt: {
              fontSize: rem(20),
            },
            p: {
              textAlign: 'justify'
            },
            ul: {
              textAlign: 'justify'
            }
          },
        },
        'lg': {
          css: {
            fontSize: rem(19),
            h1: {
              fontSize: rem(28),
            },
            h3: {
              fontSize: rem(27),
            },
            h4: {
              fontSize: rem(24),
            },
            h5: {
              fontSize: rem(21),
            },
            img: {
              margin: '1rem 0',
              '&:first-child': {
                marginTop: '0'
              }
            },
          },
        },
        'xl': {
          css: {
            fontSize: rem(21),
            h1: {
              fontSize: '2rem'
            }
          },
        }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
      padding: ['first'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
};
