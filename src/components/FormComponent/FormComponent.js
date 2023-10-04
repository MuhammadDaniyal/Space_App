import React, { useState } from "react";
import Layout from "../../Layout";
import "./FormComponent.css";

import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const FormComponent = () => {
  const [dateValue, setDateValue] = useState(null);
  const handleDateChange = (date) => {
    setDateValue(date);
  };
  console.log(new Date(dateValue).toLocaleString());
  return (
    <Layout>
      <section className="form-section">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 col-lg-12 mx-auto">
              <div
                className="row mx-auto"
                style={{ justifyContent: "space-evenly" }}
              >
                <div className="col-12 col-lg-4 form-leftside">
                  <h3 className="main-heading fw-bold">
                    Cheak For <br /> 
                    <span style={{color:"#E43A19", fontSize:"7rem"}}>
                    Anomaly.
                    </span>
                  </h3>
                  <p className="main-work-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="col-12 col-lg-6 form-rightside">
                  <form
                    action="https://formspree.io/f/mdovpvnj"
                    className="d-flex flex-column gap-4"
                    method="POST"
                  >
                    <div className="row align-items-end">
                      <div className="col-12 col-lg-6 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoItem label={"Date and Time"}>
                            <DateTimePicker
                              value={dateValue}
                              onChange={handleDateChange}
                              views={[
                                "year",
                                "month",
                                "day",
                                "hours",
                                "minutes",
                                "seconds",
                              ]}
                            />
                          </DemoItem>
                        </LocalizationProvider>
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
                    <button type="submit" className="mybtn-form">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormComponent;
