import React, { useRef, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const PasswordResetVerification: React.FC = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Focus previous if deleted
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 6) return;

    setLoading(true);
    try {
      console.log("Verifying code:", fullCode);
      // await authService.verifyCode(fullCode);
    } finally {
      setTimeout(() => setLoading(false), 3000);
    }
  };

  const maskEmail = (email: string) => {
    const [localPart, domain] = email.split("@");
    if (localPart.length <= 2) {
      return "*".repeat(localPart.length) + "@" + domain;
    }
    return (
      localPart[0] +
      "*".repeat(localPart.length - 2) +
      localPart[localPart.length - 1] +
      "@" +
      domain
    );
  };

  return (
    <Container sx={{ width: "60%" }}>
      <Typography
        textAlign="center"
        variant="h4"
        sx={{
          color: "#23262F",
          fontSize: 38,
          fontWeight: 700,
          mb: 2,
        }}
      >
        Security Verification
      </Typography>

      <Typography
        textAlign="center"
        variant="body1"
        sx={{
          color: "#9EA0AB",
          fontSize: 12,
          mb: 2,
        }}
      >
        To secure your account, please complete the following verification.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          textAlign="center"
          variant="body1"
          sx={{
            color: "#000",
            fontSize: 12,
            mb: 3,
          }}
        >
          Enter the 6 digit code sent to your email
        </Typography>

        <Typography
          textAlign="center"
          variant="body1"
          sx={{
            color: "success.main",
            fontSize: 12,
            mb: 3,
          }}
        >
          {maskEmail('lawkunchi@yahoo.com')}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {code.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(ref) => (inputRefs.current[index] = ref)}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: 24, height: 96 },
              }}
              sx={{ width: 83 }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            disabled={loading}
            sx={{ height: 55 }}
            onClick={() => console.log("Resend code")}
          >
            Resend Code
          </Button>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading || code.some((c) => !c)}
            sx={{ height: 55 }}
          >
            {loading ? <CircularProgress size={24} /> : "Continue"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PasswordResetVerification;
