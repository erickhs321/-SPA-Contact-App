import React from "react";

class ContactCell extends React.Component {
  render() {
    const { data, type, avatar } = this.props;
    console.log(data);
    if (avatar) {
      return (
        <span className="contact__avatar">
          <img src={data}></img>
        </span>
      );
    } else {
      return <span className="contact__data">{data}</span>;
    }
  }
}

export default ContactCell;
