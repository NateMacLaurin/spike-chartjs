import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm.jsx'
import FamousPersonList from '../FamousPersonList/FamousPersonList.jsx'

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);
  // On Load, do this thing
  useEffect(() => {
    console.log('in useEffect')
    fetchPeople();
  }, []);

  // GET request
  const fetchPeople = () => {
    axios.get('/people').then((response) => {
      console.log('this is the response from fetchPeople', response.data);

      // take the data from the response and assign it to the famousPeopleArray
      setPeopleArray(response.data);
    })
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log( `The person is ${famousPersonName} and they're famous for ${famousPersonRole}` );
    
    // create POST request to add this new person to the database
    axios.post('/people', {
      name: famousPersonName, 
      role: famousPersonRole
    }).then((response) => {
      console.log('Response:', response.data);
      fetchPeople();
      setPersonName('');
      setPersonRole('');
    }).catch((err) => {
      console.log(err);
    })
    // HINT: you will have to create a new object containing the famousPersonName and famousPersonRole values
    // the keys should be 'name' and 'role'
  
  }

    return (
      <section className="new-person-section">
        <FamousPersonForm 
          famousPersonName={famousPersonName}
          famousPersonRole={famousPersonRole}
          setPersonName={setPersonName}
          setPersonRole={setPersonRole}
          addPerson={addPerson}
          />
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
          {/* The list should go here. */}
          <FamousPersonList 
          famousPeopleArray={famousPeopleArray}
          />
      </section>
    );
}

export default FamousSection;
