import React from "react";
import ContactCell from "./ContactCell";

class Contact extends React.Component {
  render() {
    const defaultShowInfos = [
      "avatar",
      "name",
      "phone",
      "country",
      "admissionDate",
      "company",
      "department",
    ];
    const { data, showInfos = defaultShowInfos } = this.props;

    return (
      <article className="contact">
        {showInfos.map((info, i) => {
          return (
            <ContactCell
              avatar={i === 0}
              data={data[info] || data.columns[i]}
            />
          );
        })}
      </article>
    );
  }
}

export default Contact;
