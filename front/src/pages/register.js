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
import { useSnackbar } from "notistack";

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
  const now = new Date();
  const today = useMemo(() => {
    return `${now.getFullYear()}-${
      now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1
    }-${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}`;
  });
  const { enqueueSnackbar: snack } = useSnackbar();

  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("이메일 형식이 일치하지 않습니다."),
    password: yup.string().required("비밀번호를 입력해주세요."),
    nickname: yup.string().required("닉네임을 입력해주세요."),
    birth: yup.date().required("생년월일을 입력해주세요.").max(new Date()),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      nickname: "",
      birth: today,
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));

      axios({
        method: "post",
        url: "/auth/signup",
        data: values,
      })
        .then(function (res) {
          console.log(res);
          axios({
            method: "post",
            url: AUTH_LOGIN.path,
            data: values,
          }).then(function (res2) {
            axios.defaults.headers["Authorization"] =
              "Bearer " + res2.data.accessToken;
            location.href = "/main";
          });
        })
        .catch(function (err) {
          snack(err.response.data.message, {
            variant: "error",
          });
        });
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

                <Box className="m-0 w-[100%] rounded">
                  <TextField
                    name="nickname"
                    value={formik.values.nickname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.nickname && Boolean(formik.errors.nickname)
                    }
                    helperText={
                      formik.touched.nickname && formik.errors.nickname
                    }
                    label="닉네임"
                    fullWidth
                    variant="filled"
                    sx={inputStyle}
                    className="rounded"
                  />
                </Box>
                <Box className="m-0 w-[100%] rounded">
                  <TextField
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                    type="date"
                    label="생년월일"
                    defaultValue={today}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                  회원가입
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default login;
