import {
    Button,
    Anchor,
    Checkbox,
    PasswordInput,
    TextInput,
    rem,
    Radio,
    Group,
    Divider as MantineDivider,
  } from "@mantine/core";
  import { IconAt, IconCheck, IconLock } from "@tabler/icons-react";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import { registerUser } from "../../Services/UserService";
  import { signupValidation } from "../../Services/FormValidation";
  import { notifications } from "@mantine/notifications";
  import { Link } from "react-router-dom";
  
  const Form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
  };
  
  const SignUp = () => {
    const [data, setData] = useState(Form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(Form);
    const navigate = useNavigate();
    const handleChange = (event: any) => {
      if (typeof event === "string") {
        setData({ ...data, accountType: event });
        return;
      }
      const name = event.target.name;
      const value = event.target.value;
      setData({ ...data, [name]: value });
      setFormError({ ...formError, [name]: signupValidation(name, value) });
      if (name === "password" && data.confirmPassword !== "") {
        const err = data.confirmPassword !== value ? "Password do not match." : "";
        setFormError({
          ...formError,
          [name]: signupValidation(name, value),
          confirmPassword: err,
        });
      }
      if (name === "confirmPassword") {
        setFormError({
          ...formError,
          confirmPassword:
            data.password !== value ? "Passwords do not match." : "",
        });
      }
    };
    const handleSubmit = () => {
      let valid = true;
      const newFormError: { [key: string]: string } = {};
      (Object.keys(data) as (keyof typeof data)[]).forEach((key) => {
        if (key === "accountType") return;
        if (key !== "confirmPassword") {
          newFormError[key] = signupValidation(key, data[key]);
        } else if (data[key] !== data["password"]) {
          newFormError[key] = "Passwords do not match.";
        }
        if (newFormError[key]) valid = false;
      });
      setFormError(newFormError);
      if (valid == true) {
        registerUser(data)
          .then((res) => {
            setData(Form);
            notifications.show({
              title: "Registered Successfully",
              message: "Redirecting to Login Page 🌟",
              withCloseButton: true,
              icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
              color: "teal",
              withBorder: true,
              className: "!border-green-500",
            });
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          })
          .catch((err) => {
            notifications.show({
              title: "Registration Failed",
              message: err.response?.data?.errorMessage || "Something went wrong.",
              withCloseButton: true,
              icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
              color: "red",
              withBorder: true,
              className: "!border-red-500",
            });
          });
      }
    };
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blueblack1 via-blueblack2 to-bluegrey1/30 py-12">
        <div className="relative w-full max-w-md bg-blueblack2/80 backdrop-blur-lg border border-bluegrey1/30 shadow-2xl rounded-2xl px-8 py-10 flex flex-col justify-center gap-5 overflow-hidden">
          {/* Top Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-32 bg-gradient-to-b from-bluegrey1/40 to-transparent rounded-full blur-2xl opacity-60 z-0" />
          {/* Centered Icon */}
          <div className="flex justify-center z-10 relative mb-2">
            <div className="w-14 h-14 rounded-full border-2 border-bluegrey1 bg-blueblack1/60 flex items-center justify-center shadow-lg">
              <span className="block w-6 h-6 rounded-full bg-gradient-to-br from-bluegrey1 to-blue-400/80" />
            </div>
          </div>
          {/* Title and Subtitle */}
          <div className="text-3xl font-bold text-white text-center z-10">Create Account</div>
          <div className="text-center text-bluegrey2 mb-2 z-10">Please enter your details to sign up.</div>
          {/* Form Fields */}
          <TextInput
            value={data.name}
            error={formError.name}
            name="name"
            onChange={handleChange}
            withAsterisk
            className="text-bluegrey3 group"
            label={<span className="text-bluegrey1">Full Name</span>}
            placeholder="Your Name"
            styles={{ input: { background: 'rgba(36, 48, 62, 0.7)', color: '#CCD0CF', borderRadius: '0.75rem', border: '1px solid #4A5C6A', transition: 'box-shadow 0.2s, border-color 0.2s' },
              root: { },
            }}
            classNames={{ input: 'hover:border-bluegrey1 focus:border-bluegrey1 focus:shadow-lg hover:shadow-md' }}
          />
          <TextInput
            value={data.email}
            error={formError.email}
            name="email"
            onChange={handleChange}
            withAsterisk
            className="text-bluegrey3 group"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            label={<span className="text-bluegrey1">Your email</span>}
            placeholder="Your Email"
            styles={{ input: { background: 'rgba(36, 48, 62, 0.7)', color: '#CCD0CF', borderRadius: '0.75rem', border: '1px solid #4A5C6A', transition: 'box-shadow 0.2s, border-color 0.2s' } }}
            classNames={{ input: 'hover:border-bluegrey1 focus:border-bluegrey1 focus:shadow-lg hover:shadow-md' }}
          />
          <PasswordInput
            value={data.password}
            error={formError.password}
            name="password"
            onChange={handleChange}
            withAsterisk
            className="text-bluegrey3 group"
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={0.5} />}
            label={<span className="text-bluegrey1">Password</span>}
            placeholder="Password"
            styles={{ input: { background: 'rgba(36, 48, 62, 0.7)', color: '#CCD0CF', borderRadius: '0.75rem', border: '1px solid #4A5C6A', transition: 'box-shadow 0.2s, border-color 0.2s' } }}
            classNames={{ input: 'hover:border-bluegrey1 focus:border-bluegrey1 focus:shadow-lg hover:shadow-md' }}
          />
          <PasswordInput
            value={data.confirmPassword}
            error={formError.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            withAsterisk
            className="text-bluegrey3 group"
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={0.5} />}
            label={<span className="text-bluegrey1">Confirm Password</span>}
            placeholder="Confirm Password"
            styles={{ input: { background: 'rgba(36, 48, 62, 0.7)', color: '#CCD0CF', borderRadius: '0.75rem', border: '1px solid #4A5C6A', transition: 'box-shadow 0.2s, border-color 0.2s' } }}
            classNames={{ input: 'hover:border-bluegrey1 focus:border-bluegrey1 focus:shadow-lg hover:shadow-md' }}
          />
          {/* Divider with OR */}
          <div className="flex items-center gap-3 my-2 z-10">
            <div className="flex-1 h-px bg-bluegrey1/30" />
            <span className="text-bluegrey2 text-xs font-semibold">OR</span>
            <div className="flex-1 h-px bg-bluegrey1/30" />
          </div>
          {/* Radios */}
          <Radio.Group
            value={data.accountType}
            onChange={handleChange}
            label={<span className="text-bluegrey1">You are?</span>}
            description={<span className="text-bluegrey2">This is anonymous</span>}
            withAsterisk
          >
            <Group mt="xs">
              <Radio
                className="px-6 py-4 border hover:bg-blueblack2/60 has-[:checked]:bg-bluegrey1/10 has-[:checked]:border-bluegrey1 border-blueblack2 rounded-lg text-bluegrey3"
                value="APPLICANT"
                label={<span className="text-bluegrey3">Applicant</span>}
              />
              <Radio
                className="px-6 py-4 border hover:bg-blueblack2/60 has-[:checked]:bg-bluegrey1/10 has-[:checked]:border-bluegrey1 border-blueblack2 rounded-lg text-bluegrey3"
                value="EMPLOYER"
                label={<span className="text-bluegrey3">Employer</span>}
              />
            </Group>
          </Radio.Group>
          {/* Checkbox */}
          <Checkbox
            className="text-bluegrey3"
            label={
              <>
                accept <Anchor href="#" className="text-bluegrey1 underline">terms & conditions</Anchor>
              </>
            }
          />
          {/* Signup Button */}
          <Button onClick={handleSubmit} variant="filled" className="bg-bluegrey1 hover:bg-bluegrey2 text-blueblack2 font-bold transition-colors duration-200 rounded-xl py-2 text-lg">
            Signup
          </Button>
          {/* Footer */}
          <div className="mx-auto text-bluegrey2 text-center mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
