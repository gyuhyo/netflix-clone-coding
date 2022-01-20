import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WhiteButton from "components/common/WhiteButton";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Container
        className="flex flex-wrap flex-col p-0 text-white"
        maxWidth={false}
      >
        <Box
          sx={{
            background:
              "url('https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/ecc68814-1011-4ec3-9b69-6bff6dfbc561/KR-ko-20220117-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
            backgroundSize: "cover",
            minHeight: 700,
            borderBottom: "8px solid #222",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              minHeight: 700,
              boxShadow: "inset -70px -70px 150px #000",
            }}
          >
            <Box className="flex flex-wrap flex-row justify-between p-6">
              <Typography
                variant="h4"
                component="h4"
                color="error"
                className="font-bold"
              >
                NETFLIX
              </Typography>
              <Box className="flex flex-row gap-x-8">
                <WhiteButton>한국어</WhiteButton>
                <Link href="/asd">
                  <Button
                    variant="contained"
                    color="error"
                    className="pl-5 pr-5"
                  >
                    로그인
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              className="my-0 mx-auto py-[75px] text-center mt-[70px]"
              sx={{ maxWidth: 950, width: "100%" }}
            >
              <Typography
                variant="h3"
                className="font-bold"
                sx={{ wordBreak: "keep-all" }}
              >
                영화와 시리즈를 무제한으로.
              </Typography>
              <Typography
                variant="h5"
                className="max-w-[640px] m-[1rem] mx-auto"
                sx={{ wordBreak: "keep-all" }}
              >
                다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
              </Typography>
              <Typography
                variant="h6"
                className="mt-7"
                sx={{ wordBreak: "keep-all" }}
              >
                시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
                주소를 입력하세요.
              </Typography>
              <Box className="m-0 mx-auto mt-12 max-w-[60%] rounded flex flex-row flex-wrap">
                <TextField
                  className="w-[400px]"
                  variant="filled"
                  label="이메일 주소"
                  sx={{
                    background: "#fff",
                  }}
                />
                <Button
                  variant="contained"
                  color="error"
                  className="text-white text-xl w-[150px]"
                >
                  시작하기 &gt;
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="py-[70px] bg-black"
          sx={{ borderBottom: "8px solid #222" }}
        >
          <Box className="flex flex-wrap flex-row justify-between max-w-[950px] m-0 mx-auto w-[100%] text-center px-12 items-center">
            <Box className="flex-1 flex flex-col gap-y-8">
              <Typography variant="h3" className="font-bold text-left">
                TV로 즐기세요.
              </Typography>
              <Typography
                variant="h5"
                className="text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
                플레이어 등 다양한 디바이스에서 시청하세요.
              </Typography>
            </Box>
            <Box className="flex-1">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                width="400"
                height="300"
              />
            </Box>
          </Box>
        </Box>

        <Box
          className="py-[70px] bg-black"
          sx={{ borderBottom: "8px solid #222" }}
        >
          <Box className="flex flex-wrap flex-row justify-between max-w-[950px] m-0 mx-auto w-[100%] text-center px-12 items-center">
            <Box className="flex-1">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                width="382"
                height="286"
              />
            </Box>
            <Box className="flex-1 flex flex-col gap-y-8">
              <Typography
                variant="h3"
                className="font-bold text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.
              </Typography>
              <Typography
                variant="h5"
                className="text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                간편하게 저장하고 빈틈없이 즐겨보세요.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className="py-[70px] bg-black"
          sx={{ borderBottom: "8px solid #222" }}
        >
          <Box className="flex flex-wrap flex-row justify-between max-w-[950px] m-0 mx-auto w-[100%] text-center px-12 items-center">
            <Box className="flex-1 flex flex-col gap-y-8">
              <Typography
                variant="h3"
                className="font-bold text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                다양한 디바이스에서 시청하세요.
              </Typography>
              <Typography
                variant="h5"
                className="text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로
                스트리밍하세요. 추가 요금이 전혀 없습니다.
              </Typography>
            </Box>
            <Box className="flex-1">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                width="420"
                height="315"
              />
            </Box>
          </Box>
        </Box>

        <Box
          className="py-[70px] bg-black"
          sx={{ borderBottom: "8px solid #222" }}
        >
          <Box className="flex flex-wrap flex-row justify-between max-w-[950px] m-0 mx-auto w-[100%] text-center px-12 items-center">
            <Box className="flex-1">
              <img
                src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
                width="382"
                height="286"
              />
            </Box>
            <Box className="flex-1 flex flex-col gap-y-8">
              <Typography
                variant="h3"
                className="font-bold text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                어린이 전용 프로필을 만들어 보세요.
              </Typography>
              <Typography
                variant="h5"
                className="text-left"
                sx={{ wordBreak: "keep-all" }}
              >
                자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게
                이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
