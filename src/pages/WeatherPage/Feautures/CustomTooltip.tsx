import React from "react";
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ 
          border: '1px solid #ccc', 
          borderRadius: '5px', 
          padding: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
            
          <h4 style={{ margin: '0' }}>{label}</h4>
          <p style={{ margin: '0' }}>Температура: {payload[0].value}°C</p>
        </div>
      );
    }
  
    return null;
  };

  export default CustomTooltip