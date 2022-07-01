import React from "react";
import { useForm } from "react-hook-form";
import {
  Text,
  Flex,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Invoice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Flex w="full" className="flex-col px-[24px]">
      <Text className="text-3xl font-bold my-[24px]">電子發票資訊</Text>
      <form onSubmit={handleSubmit(onSubmit)} className="px-[8px]">
        <p>發票號碼</p>
        <Input
          placeholder="英文2碼+數字8碼"
          className="border-[1px] bg-white border-[#E2E8F0] my-[8px]"
          {...register("name", { required: true })}
        />
        <p>發票日期</p>
        <Input
          placeholder="選擇日期"
          className="border-[1px] bg-white border-[#E2E8F0] my-[8px]"
          {...register("phone", { required: true })}
        />
        <p>隨機碼</p>
        <Input
          placeholder="數字4碼"
          className="border-[1px] bg-white border-[#E2E8F0] my-[8px]"
          {...register("email", { required: true })}
        />
        <p className="text-sm text-[#718096]">
          無QR code之傳統發票，無法參加登錄活動。
        </p>
        {errors.name && <span>This field is required</span>}
        <InputGroup className="bp mt-[20px] rounded-lg">
          <Input type="submit" className="text-white font-bold" value="送出" />
          <InputRightElement>
            <ArrowForwardIcon
              className="mr-[200px]"
              style={{ color: "white" }}
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  );
};

export default Invoice;
