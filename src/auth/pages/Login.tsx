import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, CheckCircle, Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange", // validate onChange for immediate feedback
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await login(data);
      console.log(response);
      // navigate("/");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  // Watch current input values to display checkmark if valid
  const emailValue = watch("email");
  const passwordValue = watch("password");

  return (
    <Container sx={{ width: "60%" }}>
      <Typography textAlign="center" variant="h4" gutterBottom>
        Sign in to Solacely
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box margin="normal" width="100%">
          <Typography
            component="label"
            htmlFor="email-input"
            sx={{ mb: 1, fontWeight: "600", display: "block" }}
          >
            Email
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
                    borderColor: !errors.email && emailValue ? "green" : undefined,
                    "&.Mui-focused": {
                      borderColor: !errors.email && emailValue ? "green" : undefined,
                    },
                  },
                }}
              />
            )}
          />
        </Box>

        <Box margin="normal" width="100%">
          <Typography
            component="label"
            htmlFor="password-input"
            sx={{ mb: 1, fontWeight: "600", display: "block" }}
          >
            Password
          </Typography>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                id="password-input"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <>
                      
                      <InputAdornment position="end">
                        <IconButton
                        sx={{
                          color: "#9EA0AB", //TODO use theme color
                        }}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff  /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                      {!errors.password && passwordValue && (
                        <InputAdornment position="end" sx={{ mr: 1 }}>
                          <Check color="success" sx={{ fontSize: 24 }} />
                        </InputAdornment>
                      )}
                    </>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: !errors.password && passwordValue ? "#3DC5A1" : undefined,
                    "&.Mui-focused": {
                      borderColor: !errors.password && passwordValue ? "#3DC5A1" : undefined,
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
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
