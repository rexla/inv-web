import React from "react";
import { Box, Text, Flex, Input, Checkbox } from "@chakra-ui/react";
import { Direction } from "@mui/material";

const Award = () => {
  return (
    <Flex bg="#E2E8F0" w="full" className="flex-col px-[24px] py-[16px]">
      <Text className="text-3xl font-bold">領獎資料</Text>
      <Box py="16px">
        <Text color="#2D3748" className="font-medium text-xs py-[4px]">
          姓名
        </Text>
        <Input placeholder="請輸入真實姓名" bg="white" />
      </Box>
      <Box py="16px">
        <Text color="#2D3748" className="font-medium text-xs py-[4px]">
          手機
        </Text>
        <Input placeholder="請輸入聯絡手機號碼" bg="white" />
      </Box>
      <Box py="16px">
        <Text color="#2D3748" className="font-medium text-xs py-[4px]">
          信箱
        </Text>
        <Input placeholder="請輸入E-mail" bg="white" />
      </Box>
      <Box py="16px">
        <Text color="#2D3748" className="font-medium text-xs py-[4px]">
          居住縣市
        </Text>
        <Input placeholder="請輸入獎項寄送地址" bg="white" />
      </Box>
      <Flex>
        <Checkbox bg="white" h="full"></Checkbox>
        <Text color="#718096" ml="2">
          已詳閱本網頁「活動登錄」欄上方之「活動獎項」、「活動辦法」、以及「泰山企業股份有限公司蒐集處理及利用個人資料告知事項」（下簡稱「告知事項」），除對其全部內容本人均清楚瞭解及全部同意外，並在此鄭重聲明：本人將上開個人資料按如下「確認送出」按鈕而提供予泰山企業股份有限公司（下簡稱泰山公司）前，泰山公司業向本人以個別通知之方式，清楚告知上述「活動獎項」、「活動辦法」、以及「告知事項」全部，本人業已清楚瞭解泰山公司蒐集、處理、及利用本人個人資料之蒐集情形、目的及用途，並允許及同意泰山公司依告知事項之內容，蒐集、處理、及利用本人之個人資料。
        </Text>
      </Flex>
    </Flex>
  );
};

export default Award;
