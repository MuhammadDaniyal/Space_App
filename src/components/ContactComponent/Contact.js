import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
        <section className="contactus-section">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-12 col-lg-12 mx-auto">
                <div
                  className="row mx-auto"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <div className="col-12 col-lg-4 contact-leftside">
                    <h3 className="main-heading fw-bold">
                      Connect With Our <br /> Team.
                    </h3>
                    <p className="main-work-para">
                      We provide complete support to your queries.
                    </p>
                    <figure>
                      <img
                        src="./images/contact.png"
                        alt="contatUsImg"
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="col-12 col-lg-6 contact-rightside">
                    <form
                      action="https://formspree.io/f/mdovpvnj"
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-12 col-lg-6 ">
                          <input
                            type="text"
                            name="firstName"
                            id=""
                            placeholder="First Name"
                            autocomplete="off"
                            required="true"
                            className="my_input"
                          />
                          <span class="separator"> </span>
                        </div>
                        <div className="col-12 col-lg-6 ">
                          <input
                            type="text"
                            name="lastName"
                            id=""
                            placeholder="Last Name"
                            className="my_input"
                          />
                          <span class="separator"> </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 col-lg-6 ">
                          <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Email"
                            autocomplete="off"
                            required="true"
                            className="my_input"
                          />
                          <span class="separator"> </span>
                        </div>
                        <div className="col-12 col-lg-6 ">
                          <input
                            type="text"
                            name="phone"
                            id=""
                            placeholder="Phone Number"
                            autocomplete="off"
                            required="true"
                            className="my_input"
                          />
                          <span class="separator"> </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-12">
                          <textarea
                          rows={4}
                          cols={4}
                            type="text"
                            name="message"
                            id=""
                            placeholder="Enter your Message"
                            className="my_input"
                          />
                          <span class="separator"> </span>
                        </div>
                      </div>
                      <div
                        class="form-check form-checkbox-style"
                        style={{ textAlign: "left" }}
                      >
                        <input class="form-check-input" type="checkbox" />
                        <label
                          class="form-check-label"
                          className="main-work-para"
                        >
                          I agree that the Space App may contact me at the
                          email address or phone number above
                        </label>
                      </div>
                      <button type="submit" className="mybtn-contact">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Contact;
