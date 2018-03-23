import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';

bootstrapTheme.baseFontSize = '18px';

// Overide default styles
// https://github.com/KyleAMathews/typography.js#published-typographyjs-themes
// bootstrapTheme.overrideThemeStyles = ({ rhythm }, options) => ({
//   body: {
//     fontSize: '30px',
//   },
//   'h2, h3': {
//     marginBottom: rhythm(1 / 2),
//     marginTop: rhythm(2),
//   },
// });

const typography = new Typography(bootstrapTheme);

export default typography;
