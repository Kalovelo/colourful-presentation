import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import ContactForm from "../components/contact/contact";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

export default ({ location }: { location: { pathname: string } }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const data = useStaticQuery(graphql`
    query {
      api {
        contact {
          title
          description
          error_message
          success_message
        }
      }
    }
  `);

  const [snackbar, setSnackbar] = useState(null);

  const snackBarMessage =
    snackbar == "error"
      ? data.api.contact.error_message
      : data.api.contact.success_message;

  return (
    <>
      <Layout>
        <SEO
          url={url + location.pathname}
          title={data.api.contact.title}
          description={data.api.contact.description}
        />
        <section>
          <Hero
            headTitle={data.api.contact.title}
            description={data.api.contact.description}
            element={<ContactForm setSnackbar={setSnackbar} />}
          />
        </section>
      </Layout>
      <Snackbar
        className={`contact__snackbar--${snackbar}`}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={!!snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(null)}
        message={snackBarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setSnackbar(null)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};
