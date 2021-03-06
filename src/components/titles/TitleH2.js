import React from 'react';

const TitleH2 = (props) => {
     return(
          <h2 className="textborder border-dark bg-primary mt-2 pt-2 pb-2 rounded text-center text-white">
          {props.children}</h2>
     );
}

export default TitleH2