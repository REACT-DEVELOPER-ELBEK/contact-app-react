import React, { useState } from "react";
import "./ContactForms.scss";
import contactImg from "../../assets/add-user.png"

const ContactForms = () => {
  const [firstName, setFirstName] = useState("");
  const fName = (e) => {
    setFirstName(e.target.value.split(" "));
  };

  const [lastName, setLastName] = useState("");
  const lName = (e) => {
    setLastName(e.target.value.split(" "));
  };

  const [phoneNumber, setPhone] = useState("");
  const phoneNum = (e) => {
    setPhone(e.target.value.split(" "));
  };
  function close() {
    document.querySelector(".modal").style.marginTop = "-100%";
    addContact.style.display = 'block'
  }
  function modalOpen(){
    document.querySelector(".modal").style.marginTop = "0%";
    addContact.style.display = 'none'
  }
  return (
    <div className="form">
      <div className="container">
        <div className="form__wrapper">
          <div className="form__title">
            <h1>Contact App</h1>
          </div>
          <button id="addContact" onClick={modalOpen}><p><img src={contactImg} alt="" /> Add contact</p></button>
          <div className="modal">
            <h2>Enter info</h2>
            <form action="" class="form">
              <input
                type="text"
                placeholder="Name"
                onChange={fName}
                class="form__input"
                id="name"
              />
              <label for="name" class="form__label">
                First name
              </label>

              <input
                type="text"
                placeholder="Name"
                onChange={lName}
                class="form__input"
                id="name"
              />
              <label for="name" class="form__label">
                Last name
              </label>

              <input
                type="tel"
                onChange={phoneNum}
                pattern="^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$"
                class="form__input"
                id="email"
                required
              />
              <label for="tel" class="form__label">
                Phone number
              </label>
            </form>
            <div class="buttons">
              <button type="submit">Submit</button>
              <button onClick={close}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
