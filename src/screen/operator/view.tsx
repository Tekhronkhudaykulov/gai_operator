import { ArrowRightOutlined } from "@ant-design/icons";
import Logo from "../../assets/img_gai.png";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { appStore } from "../../store";
import { useEffect } from "react";

const Operator = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  const navigate = useNavigate();
  const { id } = useParams();

  const { listById, getListById, operatorSendData } = appStore();

  useEffect(() => {
    getListById(id);
  }, []);

  return (
    <div className="flex">
      <div className=" w-[70%] !shadow-2xl">
        <div className="flex justify-between px-[20px]  h-[130px] bg-[#F6F6F7] items-center">
          <img
            className="w-[100px] h-[100px] object-contain"
            src={Logo}
            alt=""
          />
          <div>
            <p className="text-[35px] font-bold text-end"> {showTime}</p>
            <p className="text-[20px] font-bold">01.05.2024</p>
          </div>
        </div>
        <div className="p-[20px] flex items-center justify-center h-[450px] text-white bg-[black] ">
          <img
            className="w-[350px] h-[350px] object-contain"
            src={Logo}
            alt=""
          />
        </div>
        <div className="flex gap-[1px]">
          <Button
            className="h-[115px]  w-[100%] flex items-center justify-center text-[30px] font-bold"
            type="primary"
            danger
            onClick={() => navigate("/")}
          >
            Chiqish
          </Button>
          <Button
            className="h-[115px] w-[100%] flex items-center justify-center text-[30px] font-bold"
            type="primary"
            onClick={() => operatorSendData(id)}
          >
            Keyingi
            <ArrowRightOutlined />
          </Button>
        </div>
      </div>
      <div className="w-[30%] shadow-2xl flex flex-col gap-y-[10px]   bg-[#F6F6F7] p-[20px]">
        <div className="grid  grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
          <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
            <p className="text-[45px]  px-[35px] py-[20px] font-bold">
              {listById?.number}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-[20px] text-white !m-0">Nomer</p>
            <p className="text-[60px] text-white !m-0">{listById?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
