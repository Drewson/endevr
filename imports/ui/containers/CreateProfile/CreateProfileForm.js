import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';
import Gandalf from 'gandalf-validator';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { Input } from 'semantic-ui-react';


import styles from './styles.css';


const skillsCardStyles = {
  height: '40px',
  width: 'auto',
  margin: '5px',
  padding: '0 5px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const skillStyles = {
  height: '100%',
  width: '100%',
  fontSize: '10px',
  color: '#A1A1A1'
}

class CreateProfileForm extends Gandalf {
  constructor() {

    const fields = [
      {
        name: 'imageupload',
        component: Input,
        validators: ['required'],
        props: {
          style: {display: 'none'},
          type: 'file',
          id: 'image-uploader'
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
        validators: [],
        onChangeHandler: (e, value) => value,
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
          hintText: 'Enter Your Email Address'
        },
        debounce: 300
      },
      {
        name: 'socialLinks',
        component: TextField,
        validators: [],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your LinkedIn Profile',
        },
        debounce: 300
      }
    ]

    super(fields);

    this.skillsList = [];
  }

  handleSubmit() {

    const data = this.getCleanFormData();

    let file = document.getElementById('image-uploader').files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = e => {
      let newData = {...data};
      newData.userId = Meteor.userId();
      newData.imageupload = e.target.result;
      newData.skills = this.skillsList;

      console.log(newData);

      Meteor.call('profiles.addProfile', newData);

    }

    if(!data) return;

  }

  componentDidUpdate() {

    if( this.state.fields.imageupload.value && (document.getElementById('profile-image').style.background !== undefined) ) {

      let file = document.getElementById('image-uploader').files[0];

      let reader = new FileReader();

      reader.onload = e =>  document.getElementById('profile-image').style.background = `url(${e.target.result}) no-repeat center / cover`;

      reader.readAsDataURL(file);
    }

  }

  addSkillToList(skill) {
    if(skill) this.skillsList.push(skill);

    document.getElementById('skills-input').value = '';

    this.forceUpdate();
  }

  render() {

    const fields = this.state.fields;

    return (
      <Card className='card'>
        <h2 className='header-tab'>Create Your Profile</h2>
        <form onSubmit={ this.handleSubmit }>

          <section className='image-upload-area'>

            <div id='profile-image' className='profile-image-display'></div>
            <RaisedButton
              containerElement='label'
              label='Add an Image'>
                { fields.imageupload.element }
            </RaisedButton>

          </section>

          <section className='general-info'>
            { fields.name.element } <br />
            { fields.bio.element } <br />
            { fields.location.element } <br />
            { fields.email.element } <br />
            { fields.socialLinks.element } <br />

            <ul className='skills-list'>
              {
                this.skillsList.map( (skill) => {
                  return <Card style={skillsCardStyles}><li style={skillStyles}>{skill}</li></Card>
                })
              }
            </ul> <br />
            <TextField id='skills-input' hintText='Enter Your Skills'/> <br />
            <FlatButton
              label={'Add a Skill'}
              primary={true}
              onTouchTap={() => this.addSkillToList(document.getElementById('skills-input').value)}
            />

          </section>




          <div className='submit-button-wrapper'>
            <Link to='/yourprofile' >

                <RaisedButton
                    label='Submit'
                    primary={true}
                    style={{width: '70px'}}
                    onTouchTap={() => this.handleSubmit()}
                >
                </RaisedButton>

            </Link>
          </div>

        </form>
      </Card>
    );
  }
}

export default CreateProfileForm;
