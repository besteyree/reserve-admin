import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const CreateSms = () => {
  const [flow_id, setFlowId] = useState("");
  const [sender, setSender] = useState("");

  let { id } = useParams();
  const [restaurant_id] = useState(id);

  const submitSms = async (e) => {
    e.preventDefault();

    const data = {
      flow_id,
      sender,
    };

    const res = await axios
      .post(`/sms_messages_store/${restaurant_id}`, data)
      .catch((err) => {
        console.log("Err", err);
      });
  };
  return (
    <>
      <Header />

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add SMS</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">SMS</li>
              <li className="breadcrumb-item active">Add SMS</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                 

                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Flow Id
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="flow_id"
                          onChange={(e) => setFlowId(e.target.value)}
                          value={flow_id}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Sender
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="sender"
                          className="form-control"
                          onChange={(e) => setSender(e.target.value)}
                          value={sender}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => submitSms(e)}
                        >
                          Add SMS
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default CreateSms;
