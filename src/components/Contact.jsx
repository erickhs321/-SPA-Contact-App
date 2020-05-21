import React from "react";
import dayjs from "dayjs";
class Contact extends React.Component {
  render() {
    const {
      avatar,
      name,
      phone,
      country,
      company,
      admissionDate,
      department,
    } = this.props.data;

    return (
      <article className='contact' data-testid='contact'>
        <span className='contact__avatar'>
          <img src={avatar} alt='avatar'></img>
        </span>
        <span className='contact__data' data-testid='contact-name'>
          {name}
        </span>
        <span className='contact__data' data-testid='contact-phone'>
          {phone}
        </span>
        <span className='contact__data' data-testid='contact-country'>
          {country}
        </span>
        <span className='contact__data' data-testid='contact-date'>
          {dayjs(admissionDate).format("DD/MM/YYYY")}
        </span>
        <span className='contact__data' data-testid='contact-company'>
          {company}
        </span>
        <span className='contact__data' data-testid='contact-department'>
          {department}
        </span>
      </article>
    );
  }
}

export default Contact;
