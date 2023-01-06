import Vue from "vue";
import {
  required,
  email,
  min,
  confirmed,
  alpha,
  alpha_dash,
  alpha_spaces,
  max,
  digits,
  mimes,
  size,
  length,
  alpha_num,
  // between,
} from "vee-validate/dist/rules";
import { ValidationProvider, extend } from "vee-validate";

extend("required", required);
extend("email", email);
extend("min", min);
extend("max", max);
extend("confirmed", confirmed);
extend("alpha", alpha);
extend("alpha_dash", alpha_dash);
extend("alpha_num", alpha_num);
extend("alpha_spaces", alpha_spaces);
extend("digits", digits);
extend("size", size);
extend("mimes", mimes);
extend("length", length);
// extend("between", between);
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
