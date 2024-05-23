import React from 'react'
import './style.css'
export default function StyleSheet(props) {
  const {primary}=props || {};
    let className=primary ? 'primary':''; 
  return (
    <div>
        <h1 className={`${className} font-xl`}>Welcome in React</h1>
    </div>
  );
}

