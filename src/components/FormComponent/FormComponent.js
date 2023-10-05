import React, { useState } from "react";
import Layout from "../../Layout";
import "./FormComponent.css";

import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { NavLink } from "react-router-dom";

const FormComponent = () => {
  const [dateValue, setDateValue] = useState(null);
  const [result, setResult] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    date_time: new Date(dateValue).toLocaleString(),
    Voltage: 0,
    Current: 0,
    battery_temp: 0,
    wheel_rpm: 0,
    wheel_temp: 0,
  });
  const handleChange = (e) => {
    setData({ ...data, date_time: new Date(dateValue).toLocaleString(), [e.target.name]: e.target.value });
  };

  const handleDate = (date) => {
    setDateValue(date);
  }

  const resetForm = () => {
    setData({
      date_time: new Date(dateValue).toLocaleString(),
      Voltage: 0,
      Current: 0,
      battery_temp: 0,
      wheel_rpm: 0,
      wheel_temp: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    // setOpen(true)
    try {
      const response = await fetch('http://127.0.0.1:8000/detect_anomalies/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        resetForm();
        setOpen(true)
        setResult(response)
        console.log('Data sent successfully');
      } else {
        // Handle errors if the request fails
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }
  return (
    <Layout>

      <div className={`modal fade ${open ? 'show' : ''}`} tabIndex="-1" style={{ display: open ? 'block' : 'none' }} >
        <div class="modal-dialog" >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Anomaly Result</h1>
            </div>
            <div class="modal-body">
              {JSON.stringify(result)}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={() => {
                setOpen(false)
              }} >Close</button>
            </div>
          </div>
        </div>
      </div>

      <section className="form-section">
        <div className="container mydiv">
          <div className="row mx-auto">
            <div className="col-12 col-lg-12 mx-auto">
              <div
                className="row mx-auto"
                style={{ justifyContent: "space-evenly" }}
              >
                <div className="col-12 col-lg-4 form-leftside">
                  <h3 className="main-heading fw-bold">
                    Check For <br />
                    <span style={{ color: "#E43A19", fontSize: "7rem" }}>
                      Anomaly.
                    </span>
                  </h3>
                  <p className="main-work-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="col-12 col-lg-6 form-rightside">
                  <form
                    className="d-flex flex-column gap-4"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="row align-items-end">
                      <div className="col-12 col-lg-6 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoItem label={"Date and Time"}>
                            <DateTimePicker
                              value={dateValue}
                              onChange={handleDate}
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
                          type="number"
                          name="battery_temp"
                          id=""
                          value={data.battery_temp}
                          onChange={handleChange}
                          placeholder="Battery Temperature"
                          className="my_input"
                        />
                        <span class="separator"> </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 ">
                        <input
                          type="number"
                          name="Voltage"
                          id=""
                          value={data.Voltage}
                          onChange={handleChange}
                          placeholder="Voltage"
                          autocomplete="off"
                          required="true"
                          className="my_input"
                        />
                        <span class="separator"> </span>
                      </div>
                      <div className="col-12 col-lg-6 ">
                        <input
                          type="number"
                          name="Current"
                          id=""
                          value={data.Current}
                          onChange={handleChange}
                          placeholder="Current"
                          className="my_input"
                        />
                        <span class="separator"> </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-lg-6 ">
                        <input
                          type="number"
                          name="wheel_rpm"
                          id=""
                          value={data.wheel_rpm}
                          onChange={handleChange}
                          placeholder="Wheel RPM"
                          autocomplete="off"
                          required="true"
                          className="my_input"
                        />
                        <span class="separator"> </span>
                      </div>
                      <div className="col-12 col-lg-6 ">
                        <input
                          type="number"
                          name="wheel_temp"
                          id=""
                          value={data.wheel_temp}
                          onChange={handleChange}
                          placeholder="Wheel Temperature"
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
                    <NavLink to="/previousanalysis" className="mybtn-form">
                      See Previous Analysis
                    </NavLink>
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
