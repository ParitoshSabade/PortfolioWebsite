import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isLoading: false,
      isSent: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    // Display the loading spinner while sending the email
    this.setState({ isLoading: true });

    // Send email using EmailJS
    emailjs
      .send(
        'service_vz3vf6e', // Replace with your EmailJS service ID
        'template_7hk7bb4', // Replace with your EmailJS template ID
        {
          name: name,
          email: email,
          message: message,
        },
        'JUd6u_oKyBOd88x_v' // Replace with your EmailJS user ID
      )
      .then((response) => {
        // Email sent successfully
        this.setState({
          name: '',
          email: '',
          message: '',
          isLoading: false,
          isSent: true,
        });
      })
      .catch((error) => {
        // Error sending email
        console.log('Error sending email:', error);
      });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { name, email, message, isLoading, isSent } = this.state;

    return (
      <section id="contact">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Contact</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {isSent ? (
              <div className="message-sent">
                <p>Thank you for contacting. I will get back to you as soon as possible.</p>
                <button
                  type="button"
                  className="submit-btn"
                  onClick={() => this.setState({ isSent: false })}
                >
                  Back
                </button>
              </div>
            ) : (
              <form onSubmit={this.handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Name:</label>
                  <input
                    type="text"
                    id="contact-name"
                    value={name}
                    onChange={this.handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email:</label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={this.handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message:</label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={this.handleMessageChange}
                    required
                  ></textarea>
                </div>
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
