import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

export default () => {
  const [open, setOpen] = React.useState(false);
  const [cookies, setCookie] = useCookies(["hide_cookie_notice"]);

  useEffect(() => {
    if (!cookies["hide_cookie_notice"]) setOpen(true);
  }, []);

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent) => {
    updatePreferences();
    setOpen(false);
  };

  const updatePreferences = () => {
    let expiration = new Date();
    expiration.setTime(expiration.getTime() + 1000 * 60 * 24 * 30);
    setCookie("hide_cookie_notice", "1", { path: "/", expires: expiration });
  };

  const data = useStaticQuery(graphql`
    query {
      api {
        cookieNotice {
          text
        }
      }
    }
  `);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      onClose={handleClose}
      message={data.api.cookieNotice.text}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};
