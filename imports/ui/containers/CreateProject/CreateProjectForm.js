import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Gandalf from 'gandalf-validator';

import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
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
        validators: ['required'],
        props: {
          style: {display: 'none'},
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
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Team\'s Location',
        },
        debounce: 300
      },
      {
        name: 'roles',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'What Roles Are You Looking To Fill?',
        },
        debounce: 300
      },
      {
        name: 'categories',
        component: DropDownMenu,
        validators: ['required'],
        getValueInOnChange: (e, key, value) => value,
        children: [
          <MenuItem key={1} label='Design' value='design' primaryText='Design' />,
          <MenuItem key={2} label='Web/Software Development' value='web/software development' primaryText='Web/Software Development' />,
          <MenuItem key={3} label='UX/UI' value='ux/ui' primaryText='UX/UI' />,
          <MenuItem key={4} label='Digital Marketing' value='digital marketing' primaryText='Digital Marketing' />,
          <MenuItem key={5} label='General' value='general' primaryText='General' />
        ]
      },
      {
        name: 'radiogroup',
        component: RadioButtonGroup,
        validators: ['required'],
        props: {
          defaultSelected: 'Paid',
          label: 'isitpaid'
        },
        children: [
          <RadioButton name='paid' label='Paid' value='paid' />,
          <RadioButton name='unpaid' label='Unaid' value='unpaid' />
        ],
      }
    ]

    super(fields);
  }

  componentDidMount() {
    // Simulate selection of first element in dropdown when component loads
    this.state.fields.categories.element.props.onChange(null, null, 'design');
  }

  handleSubmit() {
    console.log('Works!');

    const data = this.getCleanFormData();
    console.log(data);

    if(!data) return;

  }

  componentDidUpdate() {

    if(this.state.fields.imageupload.value) {

    document.getElementById('profile-image').style.background = `url(${this.state.fields.imageupload.value})`

    }
  }

  render() {
    const fields = this.state.fields;

    return (
      <form>
        <h2>Create A New Project</h2>

        <section className='image-upload-area'>
          <div id='profile-image' className='profile-image-display'></div>
          <RaisedButton
            containerElement='label'
            label='Add an Image'
            onTouchTap={() => this.previewProfileImage()}
          >
              { fields.imageupload.element }
          </RaisedButton>
        </section>

        { fields.projectname.element } <br />
        { fields.projectdescription.element } <br />
        { fields.teamlocation.element } <br />
        <div className='roles-list'></div> <br />
        { fields.roles.element } <br />
        { fields.categories.element } <br />
        <div className="payment-select-area">
          <h4>Select a Category</h4>
          { fields.radiogroup.element }
        </div>

        <RaisedButton
          label='Submit'
          onTouchTap={() => this.handleSubmit()}
        >
        </RaisedButton>
      </form>
    );
  }
}

export default CreateProjectForm;
