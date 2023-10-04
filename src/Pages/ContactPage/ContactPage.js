import React from "react";
import Contact from "../../components/ContactComponent/Contact";

import Layout from "../../Layout";

const ContactPage = () => {
  return (
    <>
      <Layout>
      <div style={{paddingTop:"6rem"}}>
        <Contact />
      </div>
      </Layout>
    </>
  );
};

export default ContactPage;
