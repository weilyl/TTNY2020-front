import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NameInput extends React.Component {

    render () {
        return (
            
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}  

export default NameInput;