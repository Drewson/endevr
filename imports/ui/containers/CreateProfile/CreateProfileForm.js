import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Gandalf from 'gandalf-validator';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import styles from './styles.css';

class CreateProfileForm extends Gandalf {
  constructor() {

    const state = {
      pictures: {}
    }

    const fields = [
      {
        name: 'name',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Name',
        },
        debounce: 300
      },
      {
        name: 'bio',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Some Information About Yourself',
        },
        debounce: 300
      },
      {
        name: 'location',
        component: TextField,
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Location',
        },
        debounce: 300
      },
      {
        name: 'skills',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Areas of Expertise',
        },
        debounce: 300
      },
      {
        name: 'email',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Areas of Expertise',
        },
        debounce: 300
      },
      {
        name: 'socialLinks',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter A Link to Your Social Media Profile',
        },
        debounce: 300
      }
    ]

    super(fields);
  }

  handleSubmit() {
    const data = this.getCleanFormData();

    if(!data) return;

  }

  render() {
    const fields = this.state.fields;

    return (
      <form>
        <h2>Create Your Profile</h2>

        <section className='image-upload-area'>
          <div className='profile-image-display'></div>
          <RaisedButton
            containerElement='label' // <-- Just add me!
            label='Add Image'>
              <input type="file" style={{ display: 'none' }} />
          </RaisedButton>
        </section>

        { fields.name.element } <br />
        { fields.bio.element } <br />
        { fields.location.element } <br />
        <div className='skills-list'></div> <br />
        { fields.skills.element } <br />
        { fields.email.element } <br />
        { fields.socialLinks.element } <br />

        <RaisedButton
            label='Submit'
        >
        </RaisedButton>
      </form>
    );
  }
}

export default CreateProfileForm;
