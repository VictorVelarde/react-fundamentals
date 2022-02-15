// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import * as PropTypes from 'prop-types'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


function Box({size, style, children}) {
  const classes = `box box--${size}`
  const styles = {fontStyle: 'italic', ...style }
  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  )
}

function Box2({size, style, ...otherProps}) {
  const classes = `box box--${size}`
  const styles = {fontStyle: 'italic', ...style }
  return (
    <div className={classes} style={styles} {...otherProps}/>
  )
}

Box.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box2 id="helloIdProp" size="large" style={{backgroundColor: 'red'}}>
        large orange box
      </Box2>
    </div>
  )
}

export default App
