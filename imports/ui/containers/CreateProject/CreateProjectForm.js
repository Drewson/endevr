import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Gandalf from 'gandalf-validator';

import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { Input } from 'semantic-ui-react';


// import styles from './styles.css';

class CreateProjectForm extends Gandalf {
  constructor() {

    const state = {
      pictures: {}
    }

    const fields = [
      {
        name: 'imageupload',
        component: Input,
        errorPropName: 'errorText',
        props: {
          style: {display: 'none'},
          hintText: 'Upload an Image',
          type: 'file',
        }
      },
      {
        name: 'projectname',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Project\'s Name',
        },
        debounce: 300
      },
      {
        name: 'projectdescription',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Describe your project',
        },
        debounce: 300
      },
      {
        name: 'teamlocation',
        component: TextField,
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Team\'s Location',
        },
        debounce: 300
      },
      {
        name: 'lookingfor',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'What Roles Are You Looking To Fill?',
        },
        debounce: 300
      },
      {
        name: 'category',
        component: DropDownMenu,
        validators: ['required'],
        getValueInOnChange: (e, key, value) => value,
        children: [
          <MenuItem key={1} value="design" primaryText="Design" />,
          <MenuItem key={2} value="web/software development" primaryText="Web/Software Development" />,
          <MenuItem key={3} value="ux/ui" primaryText="UX/UI" />,
          <MenuItem key={4} value="digital marketing" primaryText="Digital Marketing" />,
          <MenuItem key={5} value="general" primaryText="General" />
        ],
      },
      {
        name: 'paid',
        component: RadioButton,
        validators: ['required'],
        props: {
          label: 'Paid'
        },
        debounce: 300
      },
      {
        name: 'unpaid',
        component: RadioButton,
        validators: ['required'],
        props: {
          label: 'Unpaid'
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
        <h2>Create A New Project</h2>

        <section className='image-upload-area'>
          <div className='profile-image-display'></div>
          <RaisedButton
            containerElement='label'
            label='Add an Image'>
              { fields.imageupload.element }
          </RaisedButton>
        </section>

        { fields.projectname.element } <br />
        { fields.projectdescription.element } <br />
        { fields.teamlocation.element } <br />
        <div className='roles-list'></div> <br />
        { fields.lookingfor.element } <br />
        { fields.category.element } <br />
        <div className="payment-select-area">
          <h4>Select a Category</h4>
          { fields.paid.element }
          { fields.unpaid.element }
        </div>

        <RaisedButton
            label='Submit'
        >
        </RaisedButton>
      </form>
    );
  }
}

export default CreateProjectForm;
