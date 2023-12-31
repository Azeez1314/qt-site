const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplate: "email",
        isRequired: true,
        placeholder: "Email address",
    },
     {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplate: "current-password",
        isRequired: true,
        placeholder: "Password",
    },
]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplate: "username",
        isRequired: true,
        placeholder: "Username",
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplate: "email",
        isRequired: true,
        placeholder: "Email address",
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplate: "current-password",
        isRequired: true,
        placeholder: "Password",
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplate: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password",
    },
]

export {loginFields, signupFields}
