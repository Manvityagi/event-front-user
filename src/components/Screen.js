import React from 'react'
import Select from 'react-select';

const screens = [
    { label: "Delhi", value: 1 },
    { label: "Mumbai", value: 2 },
    { label: "Hyderabad", value: 3 },
    
  ];
  
  const App = () => (
    <div className="container-fluid">
        <div className="slottime">
        <div className="row">
        <div className="col-md-1">
          <Select options={ screens } />
        </div>
        
      </div>
        </div>
      
    </div>
  );
  
  export default App