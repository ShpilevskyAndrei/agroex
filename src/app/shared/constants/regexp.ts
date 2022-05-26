const REGEXP_FOR_PHONE = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
const REGEXP_FOR_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { REGEXP_FOR_PHONE, REGEXP_FOR_EMAIL };
