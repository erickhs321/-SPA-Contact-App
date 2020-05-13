import React from "react";
import Contact from "./Contact";
import ContactCell from "./ContactCell";

class Contacts extends React.Component {
  render() {
    const { data, columnsData, showInfos } = this.props;
    return (
      <section className="contacts">
        <>
          <article className="contact">
            <span className="contact__avatar">
              <img src={data}></img>
            </span>
            {columnsData.map((column) => {
              return <span className="contact__data">{column}</span>;
            })}
          </article>
          {data.map((item) => {
            return <Contact showInfos={showInfos} data={item} key={item.id} />;
          })}
        </>
      </section>
    );
  }
}

export default Contacts;
