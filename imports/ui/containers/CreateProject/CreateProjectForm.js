import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Gandalf from 'gandalf-validator';
import {Link} from 'react-router-dom';

import { Card, CardMedia } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import { Input } from 'semantic-ui-react';


import styles from './styles.css';

const projectImageStyles = {
  height: '220px',
  width: '300px',
  marginRight: '50px',
  background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 26%, rgba(247,247,247,1) 100%)'
}

const rolesCardStyles = {
  height: '40px',
  width: '60px',
  margin: '5px',
  padding: '0 10px',
  textAlign: 'center',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const roleStyles = {
  height: '100%',
  width: '100%',
  fontSize: '10px',
  color: '#A1A1A1'
}

class CreateProjectForm extends Gandalf {
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
          multiple: 'true'
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
          multiLine: 'true'
        },
        debounce: 300
      },
      {
        name: 'teamlocation',
        component: TextField,
        validators: [],
        errorPropName: 'errorText',
        props: {
          hintText: 'Enter Your Team\'s Location',
        },
        debounce: 300
      },
      {
        name: 'roles',
        component: TextField,
        validators: [],
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
        name: 'payment',
        component: RadioButtonGroup,
        validators: ['required'],
        props: {
          defaultSelected: 'Paid',
          label: 'isitpaid'
        },
        children: [
          <RadioButton key={'paid1'} name='paid' label='Paid' value='paid' />,
          <RadioButton key={'paid2'} name='unpaid' label='Unaid' value='unpaid' />
        ],
      }
    ]

    super(fields);

    this.rolesList = [];
  }

  componentDidMount() {
    // Simulate selection of first element in dropdown when component loads
    this.state.fields.categories.element.props.onChange(null, null, 'design');
  }

  handleSubmit() {

    const data = this.getCleanFormData();
    let file = document.getElementById('image-uploader').files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    let realPath = 'string';

    reader.onload = e => {
      let newData = {...data};
      newData.date = Date.now();
      newData.imageupload = e.target.result;
      newData.roles = this.rolesList;
      newData.team = [],


      Meteor.call('projects.addProject', newData);

      console.log(newData);
    }

    if(!data) return;

  }

  componentDidUpdate() {

    if(this.state.fields.imageupload.value && document.getElementById('project-image') !== undefined) {

      let file = document.getElementById('image-uploader').files[0];

      let reader = new FileReader();

      reader.onload = e =>  document.getElementById('project-image').style.background = `url(${e.target.result}) no-repeat center center / cover`;

      reader.readAsDataURL(file);

    }
  }

  addRoleToList(role) {
    if(role) this.rolesList.push(role);

    document.getElementById('roles-input').value = '';

    this.forceUpdate();
  }

  render() {
    const fields = this.state.fields;

    return (
      <Card>

        <h2 className='header-tab'>Create A New Project</h2>
        <form>

          <section className='image-upload-area'>
            <Card style={projectImageStyles} id='project-image' className='project-image'>
            </Card>
            <RaisedButton
              containerElement='label'
              label='Add an Image'>
                { fields.imageupload.element }
            </RaisedButton>
          </section>

          <section className='basic-info'>

            { fields.projectname.element } <br />
            { fields.projectdescription.element } <br />
            { fields.teamlocation.element } <br />

          </section>


          <section className='roles-list-area'>

            <ul className='roles-list'>
              {
                this.rolesList.map( (role) => {
                  return <Card style={rolesCardStyles}><li key={Date(Date.now()) + role} style={roleStyles}>{role}</li></Card>
                })
              }
            </ul> <br />
            <TextField id='roles-input' hintText='Who Are You Looking For?'/>
            <FlatButton
              label={'Add a Role'}
              onTouchTap={() => this.addRoleToList(document.getElementById('roles-input').value)}
            />

          </section>

          <div className="category-select-area">

            <h4>Select Categories:</h4>
            { fields.categories.element }
            { fields.payment.element }

          </div>

          <Link to='/' onClick={() => this.forceUpdate()}>
            <RaisedButton
              label='Submit'
              primary={true}
              onTouchTap={() => this.handleSubmit()}
            >
            </RaisedButton>
          </Link>

        </form>
      </Card>
    );
  }
}

export default CreateProjectForm;
