import React, { useState } from 'react';
import Data from './data';
const cssFile = {

  div: {
    backgroundColor: 'rgb(195, 215, 201)',
    display: 'block',
    margin: '30px auto',
  },

  label: {
    color: 'black',
    fontSize: '20px',
  },

  input: {
    width: 'auto',
  },

  radioInput: {
    marginTop: '7px',
  },

  button: {
  },

  ShowData: {
    margin: '30px auto',
  },
};
export default function Practices1() {

  const [usersList, setUsersList] = useState([{
    username: 'Shekhar sati',
    useremail: 'shekhar56@gmail.com',
    usergender: 'male',
  }]);

  const [currentUser, setCurrentUser] = useState({
    username: '',
    useremail: '',
    usergender: '',
  });

  const handleChange = (e) => {
    const input = e.target.value;
    setCurrentUser({ ...currentUser, [e.target.name]: input });
  };

  const handleClick = () => {
    if (currentUser?.editable) {
      if (currentUser.username || currentUser.useremail || currentUser.usergender) {
        setUsersList((pre) => {
          pre[currentUser.index] = { username: currentUser.username, useremail: currentUser.useremail, usergender: currentUser.usergender }
          return pre;
        })
      }
      setCurrentUser({
        username: '',
        useremail: '',
        usergender: '',
      });
    }
    else {
      if (currentUser.username || currentUser.useremail || currentUser.usergender) {
        setUsersList([...usersList, currentUser]);
      }
      setCurrentUser({
        username: '',
        useremail: '',
        usergender: '',
      });
    }
  };

  const onRowPress = ({ rowData, rowIndex }) => {
    setCurrentUser({
      username: rowData.username,
      usergender: rowData.usergender,
      useremail: rowData.useremail,
      editable: true,
      index: rowIndex
    });
  }
  const deletePress = ({ rowData, rowIndex }) => {
    setUsersList((prev) => {
      return prev.filter((item, index) => index != rowIndex)
    })
    console.log(usersList);
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={cssFile.ShowData}>
        <Data data={usersList} columns={[{ label: 'Name', dataKey: 'username' }, { label: 'Email', dataKey: 'useremail' }, { label: 'Gender', dataKey: 'usergender' }]} onRowPress={onRowPress} deletePress={deletePress} />
      </div>
      <div style={cssFile.div}>
        <br />
        <label style={cssFile.label}>UserName</label><br />
        <input
          style={cssFile.input}
          type='text'
          name='username'
          value={currentUser.username}
          onChange={handleChange}
        /><br /><br />
        <label style={cssFile.label}>UserEmail</label><br />
        <input
          style={cssFile.input}
          type='text'
          name='useremail'
          value={currentUser.useremail}
          onChange={handleChange}
        /><br /><br />
        <label style={cssFile.label}>UserGender </label><br />
        <input
          style={cssFile.radioInput}
          type='radio'
          name='usergender'
          value='male'
          checked={currentUser.usergender === 'male'}
          onChange={handleChange}
        />Male
        <input
          style={cssFile.radioInput}
          type='radio'
          name='usergender'
          value='female'
          checked={currentUser.usergender === 'female'}
          onChange={handleChange}
        />Female
        <br /><br />
        <button style={cssFile.button} type='button' onClick={handleClick}>{currentUser?.editable ? 'Edit User' : 'Add User'}</button>
      </div>
    </div>
  );
}
