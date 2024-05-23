import React from 'react'
import styled from 'styled-components'

const Form=styled.form`
    border: 3px solid blue;
    width: 270px;
    margin: auto;
    height: 250px;
    background-color: black;
    margin-top: 100px;
    border-radius:30px 0px 30px 0px;
    
    &:hover {
        border: 2px solid red;
        color: white;
      }
`

const Label=styled.label`
font-size: 20px;
text-align: left;
color: #ececf1;
marging-top:10px;
`
const Input=styled.input`
width:200px;
height:20px;
&:hover{
    border: 2px solid red;
}
`
const Button = styled.button`
background: black;
border-radius: 3px;
border: 2px solid #0008ff;
width: 100px;
color: white;
height: 30px;

&:hover {
    border: 2px solid red;
    color: white;
  }
`

export default function StyledComponents() {
  return (
    <div>
        <Form>
            <br/>
            <Label>Email</Label><br/><br/>
            <Input/><br/><br/>
            <Label>Password</Label><br/><br/>
            <Input/><br/><br/>
            <Button>Login</Button>
        </Form>
    </div>
  )
}
