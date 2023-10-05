import React, { useState } from "react";
import Layout from "../../Layout";
import "./FormComponent.css";

import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { NavLink } from "react-router-dom";

const arrayOfObjects = [
  {
    status: "Anomalies Detected",
    anomalies: [
      "Current",
      "Battery Temperature",
      "Voltage",
      "Wheel RPM",
      "Wheel Temperature",
    ],
  },
  { status: "Normal" },
  // Add more objects as needed
];

const FormComponent = () => {
  const [dateValue, setDateValue] = useState(null);
  const [result, setResult] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    date_time: new Date(dateValue).toLocaleString(),
    Voltage: "",
    Current: "",
    battery_temp: "",
    wheel_rpm: "",
    wheel_temp: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      date_time: new Date(dateValue).toLocaleString(),
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (date) => {
    setDateValue(date);
  };

  const resetForm = () => {
    setData({
      date_time: new Date(dateValue).toLocaleString(),
      Voltage: "",
      Current: "",
      battery_temp: "",
      wheel_rpm: "",
      wheel_temp: "",
    });
  };

  function displayRandomObject() {
    const randomIndex = Math.floor(Math.random() * arrayOfObjects.length);
    let randomObject = arrayOfObjects[randomIndex];
    if (randomObject.status !== "Normal") {
      const randomElements = randomObject.anomalies
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      randomObject = { ...randomObject, anomalies: randomElements };
    } else {
      resetForm();
    }
    setResult(randomObject);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("DATA: ", data);
    displayRandomObject();
    setOpen(true);
  };
  return (
    <Layout>
      <div
        className={`modal fade ${open ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: open ? "block" : "none" }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title modal_title" id="exampleModalLabel">
                Anomaly Result
              </h1>
              <button
                type="button"
                class="btn-close modal_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setOpen(false);
                }}
              ></button>
            </div>
            <div class="modal-body">
              <h2
                className={`modal_h2 ${
                  result?.status !== "Normal"
                    ? "modal_h2_red"
                    : "modal_h2_green"
                }`}
              >
                {result?.status}
              </h2>
              {result?.anomalies && (
                <div className="modal_div">
                  {result?.anomalies.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              )}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet.
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
