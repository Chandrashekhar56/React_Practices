import { useState, React} from 'react';
//import Button from '../../components/button';
import './signup.css';

function SignUpPage() 
{

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => 
  {
    alert("Data successfully submitted");
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Contact Number:', contact);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const handleReset = () => {
  
    setFirstName('');
    setLastName('');
    setContact('');
    setEmail('');
    setGender('');
    setPassword('');
    setConfirmPassword('');
  };

    return(
      <div className="form">
        <center><h1>SignUp</h1></center>
          <div className="form-body">
              <div className="firstname">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input" value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="contact">
                  <label className="form__label" htmlFor="contact">Contact Number </label>
                  <input  type="contact" id="contact" className="form__input" value={contact} 
                  onChange={(e) => setContact(e.target.value)} />
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="gender">
                  <label className="form__label" htmlFor="gender">Gender </label>
                  <input type="radio" id="gender" className="form__input_gender" name="gender" value={gender} 
                  checked={gender === 'male'} onChange={() => setGender('male')}/>Male

                  <input type="radio" id="gender" className="form__input_gender" name="gender" value={gender} 
                  checked={gender === 'female'} onChange={() => setGender('female')}/>female
              </div>
              <br/>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" value={password} 
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}/>
              </div>
          </div>
          <div className="footer">
              <button type="button" className="btn" onClick={handleSave}>Save</button>
              <button type="button" className="btn" onClick={handleReset}>Rest</button>
          </div>
      </div>      
    );      
}
export default SignUpPage;