import React from "react";

function DemoOutput(props) {
  console.log('DemoOutput is running');
  return <p>{props.show ? 'This is a new paragraph!' : ''}</p>
}

export default React.memo(DemoOutput);