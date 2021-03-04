const colors = require('tailwindcss/colors');

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'serif': ['PTserif', 'serif']
      },
      colors: {
        blue: colors.lightBlue,
        'k-blue': '#38BFF8',
        'k-green': '#22C55E',
        'k-brown': '#92400E',
        'k-gray': '#3b4b59'
      },
      opacity: {
        '97': '.97'
      },
      height: {
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
        DEFAULT: '0 0 15px 0 rgba(0, 0, 0, 0.02), 0 1px 9px 0 rgba(0, 0, 0, 0.03), 0 1px 4px 0 rgba(0, 0, 0, 0.03)',
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
              fontSize: rem(29),
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
              fontSize: rem(30),
            },
            h3: {
              fontSize: rem(25),
            },
            h4: {
              fontSize: rem(22),
            },
            img: {
              margin: '0.75rem 0',
              '&:first-child': {
                marginTop: '0'
              }
            },
            dt: {
              fontSize: rem(20),
            }
          },
        },
        'lg': {
          css: {
            fontSize: rem(19),
            h1: {
              fontSize: rem(32),
            },
            h3: {
              fontSize: rem(27),
            },
            h4: {
              fontSize: rem(24),
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
