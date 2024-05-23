import { Component,React } from 'react';
// import Button from '../../components/button';
import './signup.css';

class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {firstName:'', lastName:'', contact:'', email:'', gender:'', password:'', confirmPassword:'',};
  }

  handleSave = () => {
      
    const { firstName, lastName, contact, email, gender, password, confirmPassword,} = this.state;

      alert("Data successfully submitted");
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Contact Number:', contact);
      console.log('Email:', email);
      console.log('Gender:', gender);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
   
  };

  handleReset = () => {
    this.setState({ firstName:'', lastName:'', contact:'', email:'', gender:'', password:'', confirmPassword:'',});
  };

  render() 
  { 
    const { firstName, lastName, contact, email,  gender,  password,  confirmPassword,} = this.state;
    return (
      <div className="form">
        <center>
          <h1>SignUp</h1>
        </center>
        <div className="form-body">
          <div className="firstname">
            <label className="form__label" htmlFor="firstName"> First Name{' '}</label>
            <input className="form__input" type="text" id="firstName" value={firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })} />
          </div>

          <div className="lastname">
            <label className="form__label" htmlFor="lastName"> Last Name{' '} </label>
            <input type="text" id="lastName" className="form__input" value={lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}/>
          </div>

          <div className="contact">
            <label className="form__label" htmlFor="contact"> Contact Number{' '} </label>
            <input type="contact" id="contact" className="form__input" value={contact}
              onChange={(e) => this.setState({ contact: e.target.value })}/>
          </div>

          <div className="email">
            <label className="form__label" htmlFor="email"> Email{' '} </label>
            <input type="email"  id="email"  className="form__input"  value={email}
              onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>

          <div className="gender">
            <label className="form__label" htmlFor="gender">  Gender{' '} </label>
            <input  type="radio"  id="male"  className="form__input_gender"  name="gender"  value="male"
            checked={gender === 'male'} onChange={() => this.setState({ gender: 'male' })}/>Male
          
            <input type="radio"  id="female"  className="form__input_gender"  name="gender"  value="female"
            checked={gender === 'female'} onChange={() => this.setState({ gender: 'female' })} />Female
          </div>
          <br />

          <div className="password">
            <label className="form__label" htmlFor="password"> Password{' '} </label>
            <input className="form__input"  type="password"  id="password" value={password}
              onChange={(e) => this.setState({ password: e.target.value })} />
          </div>

          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword"> Confirm Password{' '}</label>
            <input className="form__input"  type="password"  id="confirmPassword" value={confirmPassword}
              onChange={(e) =>this.setState({ confirmPassword: e.target.value })} />
          </div>
        </div>

        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSave}>Save</button>
          <button type="button" className="btn" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default SignUpPage
