import React, { Component } from 'react';
import { Form } from './Contact.styles';




class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <article>
                <Form>
                    <label for="name">First name:</label><br />
                    <input type="text" id="name" placeholder='Name' /><br />

                    <label for="email">First name:</label><br />
                    <input type="text" id="email" placeholder='Email' /><br />

                    <label for="address">First name:</label><br />
                    <input type="text" id="address" placeholder='Address' /><br />

                    <label for="message">First name:</label><br />
                    <textarea id="message" rows="4" cols="50" placeholder='Write some message'></textarea><br />
                    <button  >Submit</button>
                </Form >
            </article >
        );
    }
}

export default Contact;
