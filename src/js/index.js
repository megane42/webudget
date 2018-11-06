import React    from 'react'
import ReactDom from 'react-dom'
import CountUp  from 'react-countup'

ReactDom.render(
  <CountUp end={50} />,
  document.getElementById('counter-number')
);
