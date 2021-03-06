function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M6.2 9c-.5 0-.8-.4-.8-.8C5.4 6.1 6.5 4 7.9 3c1-.7 2.6-1 4.1-1 2 0 3.9.5 4.9 1.4 1.2 1.1 1.7 2.4 1.7 4.3 0 1.2-.3 2.1-.9 2.9-.3.5-1 1.1-1.9 1.9l-1 .8c-.5.4-.7.9-.7 1.5v.5c-.1.4-.4.6-.8.6h-2.7c-.3 0-.6-.3-.6-.7V15c0-.7.2-1.3.5-1.9.3-.5.6-.9 1-1.2l1.8-1.4c.3-.2.6-.5.8-.8.4-.5.5-1 .5-1.6 0-.7-.2-1.3-.6-1.9-.4-.6-1-.8-2.1-.8-1.6 0-2.8 1.3-2.8 2.8.1.4-.3.8-.7.8H6.2zm4.8 9h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1z" /></svg>;
});