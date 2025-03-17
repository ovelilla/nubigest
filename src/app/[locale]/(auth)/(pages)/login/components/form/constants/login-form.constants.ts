const constants = {
  ALERT_PROPS: {
    ERROR: {
      type: "error",
      role: "alert",
    },
    SUCCESS: {
      type: "success",
      role: "status",
    },
  },
  BUTTON_PROPS: {
    LINK_FORGOT_PASSWORD: {
      href: "/reset",
      label: "¿Olvidaste tu contraseña?",
    },
    SUBMIT: {
      fullWidth: true,
      label: "Login",
      showLabel: false,
      type: "submit",
    },
    TOGGLE_PASSWORD: {
      ["aria-label"]: "Mostrar contraseña",
    },
  },
  FIELD_PROPS: {
    EMAIL: {
      labelProps: {
        htmlFor: "email",
      },
      labelText: "Email",
      inputProps: {
        autoComplete: "username",
        id: "email",
        name: "email",
        placeholder: "john.doe@example.com",
        type: "email",
        ["aria-describedby"]: "email-helper",
      },
      messageProps: {
        id: "email-helper",
      },
    },
    PASSWORD: {
      labelProps: {
        htmlFor: "password",
      },
      labelText: "Password",
      inputProps: {
        autoComplete: "current-password",
        id: "password",
        name: "password",
        placeholder: "******",
        type: "password",
        ["aria-describedby"]: "password-helper",
      },
      messageProps: {
        id: "password-helper",
      },
    },
    PASSWORD_TYPE_HIDDEN: "password",
    PASSWORD_TYPE_VISIBLE: "text",
  },
} as const;

export default constants;
