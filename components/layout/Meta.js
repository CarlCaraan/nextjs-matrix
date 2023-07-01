import React, { Fragment } from "react";

function Meta({ title }) {
  return (
    <Fragment>
      <title>{title}</title>
      <meta
        name="title"
        content="Matrix Philippines - Software Solution for You"
      ></meta>
      <meta
        name="description"
        content="Matrix is a dynamic, innovative, and forward-thinking start-up company based in Laguna that takes great pride in providing top-notch, cutting-edge, and low cost-effective web design services to cater to all your online needs."
      ></meta>
      <meta
        name="keywords"
        content="Matrix Software Solution PH, Laguna, web design, innovative, dynamic, Matrix, Software, Solution, Philippines, cost-effective"
      ></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>

      {/* Google search console verification */}
      <meta
        name="google-site-verification"
        content="aZxL2aU9e_wvyo3AM7IBjmgnP1I61NefLYqI9xTXfl0"
      />
    </Fragment>
  );
}

export default Meta;
