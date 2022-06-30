import React from "react";
import { useForm } from "react-hook-form";
import { Box, Text, Flex, Input, Checkbox } from "@chakra-ui/react";

const Award = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Flex bg="#E2E8F0" w="full" className="flex-col px-[24px] py-[16px]">
      <Text className="text-3xl font-bold">領獎資料</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>姓名</p>
        <input
          defaultValue="請輸入真實姓名"
          {...register("name", { required: true })}
        />
        <p>手機</p>
        <input
          defaultValue="請輸入聯絡手機號碼"
          {...register("phone", { required: true })}
        />
        <p>信箱</p>
        <input
          defaultValue="請輸入E-mail"
          {...register("email", { required: true })}
        />
        <p>居住縣市</p>
        <input
          defaultValue="請輸入獎項寄送地址"
          {...register("address", { required: true })}
        />

        {errors.name && <span>This field is required</span>}

        <input type="submit" />
      </form>
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
