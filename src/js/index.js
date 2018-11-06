import React    from 'react'
import ReactDom from 'react-dom'
import CountUp  from 'react-countup'

ReactDom.render(
  <CountUp end={100} />,
  document.getElementById('counter')
);
