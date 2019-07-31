import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { updateItem } from '../../../../client/src/redux/actions/itemActions';

class UpdateItem extends Component {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const updatedItem = {
      name: this.state.name
    };

    console.log(updatedItem);
    console.log(this.state.name);
    // Update item via updateItem action
    this.props.updateItem(updatedItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {/* <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Update Item
        </Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Items List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Update item'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Update Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// dispatch actions to state in store
const mapDispatchToProps = dispatch => {
  return {
    updateItem: updatedItem => {
      dispatch(updateItem(updatedItem)); // need to include all relevant fields to Add a new object
    }
  };
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateItem);
