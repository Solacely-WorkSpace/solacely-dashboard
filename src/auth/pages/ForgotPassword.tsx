import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
  CircularProgress,
  Link,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { authService } from "../services/AuthService";
import AUTH_ROUTES from "../config/authRouteList";

type FormData = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      await authService.forgotPassword(formData);
      navigate(AUTH_ROUTES.RESET_PASSWORD_VERIFY.PATH);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword((show) => !show);
  // };

  const emailValue = watch("email");

  return (
    <Container sx={{ width: "60%" }}>
      <Typography textAlign="center" variant="h4" sx={{
        color: '#23262F',
        fontSize: 38,
        fontWeight: 700,
        mb:2
      }}>
        Forgot Password
      </Typography>
      <Typography textAlign="center" variant="body1" sx={{
        color: '#9EA0AB',
        fontSize: 12,
        mb:2
      }}>
        For security purposes, no withdrawals are permitted for 24 hours after
        password changed.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box margin="normal" width="100%">
          <Typography
            component="label"
            htmlFor="email-input"
            sx={{ mb: 1, fontWeight: "600", display: "block" }}
          >
            Enter your account email
          </Typography>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                id="email-input"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  endAdornment:
                    !errors.email && emailValue ? (
                      <InputAdornment position="end">
                        <Check color="success" sx={{ fontSize: 24, mr: 1 }} />
                      </InputAdornment>
                    ) : null,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor:
                      !errors.email && emailValue ? "green" : undefined,
                    "&.Mui-focused": {
                      borderColor:
                        !errors.email && emailValue ? "green" : undefined,
                    },
                  },
                }}
              />
            )}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading || !isValid}
          sx={{ height: 55 }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Continue"
          )}
        </Button>

        <Box
          sx={{ display: "flex", justifyContent: "center", mt: 2}}
        >
          <Link
            href={AUTH_ROUTES.LOGIN.PATH}
            color="primary"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            Nevermind, I got it
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default ForgotPassword;
