<template src="@/templates/form.html"></template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "Form",
  data() {
    return {
      //emailvalue: null,
      // reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

      education: [
        { value: null, text: "Choose..." },
        { value: "SEE", text: "SEE" },
        { value: "+2", text: "+2" },
        { value: "Bachelors", text: "Bachelors" },
        { value: "Masters", text: "Masters" },
      ],
      gendervalue: null,
      gender: [
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" },
      ],

      interestvalue: [],
      interest: [
        { text: "Information Technology", value: "Information Technology" },
        { text: "Sports", value: "Sports" },
        { text: "Reading", value: "Reading" },
      ],

      form: {
        name: null,
        age: null,
        //emailvalue: null,
        education: null,
        gendervalue: null,
        interestvalue: [],
      },
    };
  },
  validations: {
    gendervalue: {
      required,
    },
    interestvalue: {
      required,
    },

    // emailvalue: {
    //      required,
    //      minLength: minLength(5)
    //  },

    form: {
      education: {
        required,
      },
      name: {
        required,
        minLength: minLength(5),
      },

      age: {
        required,
        minLength: minLength(2),
      },
    },
  },

  computed: {
    genderstate() {
      return Boolean(this.gendervalue);
    },
    intereststate() {
      return this.interestvalue.length === 2;
    },
  },

  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    //    isEmailValid: function() {
    //       return (this.emailvalue == "")? "" : (this.reg.test(this.emailvalue)) ? 'has-success' : 'has-error';

    //   },

    resetForm() {
      this.gendervalue = null;
      //this.emailvalue = null
      this.interestvalue = [];
      this.form = {
        name: null,

        age: null,
        education: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
      console.log(
        this.form.name,
        this.form.age,
        this.form.education,
        this.gendervalue,
        this.interestvalue
      );
    },
  },
};
</script>