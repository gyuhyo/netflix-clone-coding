import { CheckBox, Pages } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AUTH_LOGIN } from "apis/api_status";
import { useAxios } from "apis/auth/useAxios";
import axios from "axios";
import FilledText from "components/common/FilledText";
import Logo from "components/common/Logo";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useMemo } from "react";
import * as yup from "yup";

const inputStyle = {
  background: "#333",
  "& .MuiInputLabel-root": {
    color: "#8c8c8c",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& .MuiFilledInput-input": {
    color: "#fff",
  },
};

function login() {
  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("이메일 형식이 일치하지 않습니다."),
    password: yup.string().required("비밀번호를 입력해주세요."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));

      try {
        axios({
          method: "post",
          url: AUTH_LOGIN.path,
          data: values,
        }).then(function (res) {
          axios.defaults.headers["Authorization"] =
            "Bearer " + res.data.accessToken;
          location.href = "/main";
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container
      maxWidth={false}
      className="min-w-[100vw] min-h-[100vh] p-0 m-0"
      sx={{
        background:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Box
        className="min-h-[100vh] pl-12 pr-12 pt-5 flex flex-col"
        sx={{
          background: "rgba(0, 0, 0, 0.5)",
          boxShadow: "inset -70px -70px 150px #000",
        }}
      >
        <Box name="header" className="h-[auto]">
          <Logo size="h3" component="h3" style="font-bold" />
        </Box>
        <Box name="loginContainer" className="flex-1">
          <Paper
            className="w-[450px] m-auto my-[7px] p-12 flex flex-col gap-y-8"
            sx={{ background: "rgba(0, 0, 0, 0.7)", color: "#fff" }}
          >
            <Box>
              <Typography className="text-3xl font-bold">로그인</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit} className="grid gap-y-8">
              <Box className="grid gap-y-4">
                <Box className="m-0 w-[100%] rounded">
                  <TextField
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="이메일 주소 또는 전화번호"
                    fullWidth
                    variant="filled"
                    sx={inputStyle}
                    className="rounded"
                  />
                </Box>
                <Box className="m-0 w-[100%] rounded">
                  <TextField
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="비밀번호"
                    fullWidth
                    variant="filled"
                    sx={inputStyle}
                    className="rounded"
                  />
                </Box>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="error"
                  className="text-white py-3 text-lg"
                  fullWidth
                  type="submit"
                >
                  로그인
                </Button>
                <Box className="flex flex-row justify-around mt-2 text-xs items-center">
                  <FormControlLabel
                    control={<CheckBox defaultChecked />}
                    label="로그인 정보 저장"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: ".8rem",
                      },
                    }}
                  />
                  <Link href="/help">도움이 필요하신가요?</Link>
                </Box>
              </Box>
            </form>
            <Box className="flex flex-col gap-y-3 text-[#8c8c8c] text-sm">
              <Typography>KakaoTalk으로 로그인</Typography>
              <Typography>
                Netflix 회원이 아닌가요?{" "}
                <Link href="/register">
                  <Typography component="span" className="text-white">
                    지금 가입하세요
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default login;
