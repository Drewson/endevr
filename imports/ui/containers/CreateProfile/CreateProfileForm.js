import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Gandalf from 'gandalf-validator';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Input } from 'semantic-ui-react';


import styles from './styles.css';

class CreateProfileForm extends Gandalf {
  constructor() {

    const state = {
      pictures: {}
    }

    const fields = [
      {
        name: 'imageupload',
        component: Input,
        validators: ['required'],
        props: {
          style: {display: 'none'},
          type: 'file',
          id: 'image-uploader',
        }
      },
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
        validators: [],
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
        validators: [],
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
    console.log(data);

    if(!data) return;

  }

  componentDidUpdate() {

    if(this.state.fields.imageupload.value) {

      let file = document.getElementById('image-uploader').files[0];

      let reader = new FileReader();

      reader.onload = e =>  document.getElementById('profile-image').style.background = `url(${e.target.result})`;

      reader.readAsDataURL(file);
    }

  }

  render() {

    const fields = this.state.fields;

    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>Create Your Profile</h2>

        <section className='image-upload-area'>
          <div id='profile-image' className='profile-image-display'></div>
          <RaisedButton
            containerElement='label'
            label='Add an Image'>
              { fields.imageupload.element }
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
            onTouchTap={() => this.handleSubmit()}
        >
        </RaisedButton>
      </form>
    );
  }
}

export default CreateProfileForm;
