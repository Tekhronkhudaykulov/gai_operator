// import Operator from "../../../public/Operator.png";
import { useEffect } from "react";
import Logo from "../../assets/img_gai.png";
import { appStore } from "../../store";
import QueueCard from "../../components/queueCard";
import "./style.scss";
import Button from "@mui/material/Button";

import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { listById, getListById, operatorSendData } = appStore();

  useEffect(() => {
    getListById(id);
  }, []);

  return (
    <div>
      <div className="flex  items-center bg-[#004138] py-[3px]">
        <div className="w-[200px] flex items-center justify-center">
          <img
            src={Logo}
            className="w-[100px] h-[100px] object-contain"
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <p className="text-center text-[45px]  text-white">
            Электронная очередь / Elektron navbat
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-[5px]">
        <div className="bg-[#ffffff]">
          <div className="bg-[#DB0000] flex items-center justify-center py-[20px]  text-white">
            <p className="uppercase text-[35px] font-bold">
              ожидание / kutish{" "}
            </p>
          </div>
          <div className="imgBanner h-[70vh] bg-contain bg-center">
            <div className="mt-[20px] card-container px-[10px] ">
              {/* <QueueCard
                title="A"
                section="MIB"
                num={100}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="B"
                section="MAb"
                num={101}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="C"
                section="Kassa"
                num={2}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="A"
                section="MIB"
                num={100}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="B"
                section="MAb"
                num={101}
                bg="#DB0000"
                textBg="#DB0000"
              /> */}
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff]">
          <div className="bg-[#2EA006] flex items-center justify-center py-[20px]  text-white">
            <p className="uppercase text-[35px] font-bold">
              ожидание / kutish{" "}
            </p>
          </div>
          <div className="imgBanner h-[70vh] bg-contain bg-center">
            <div className="mt-[20px] card-container px-[10px] ">
              <QueueCard
                title="A"
                section="MIB"
                num={listById?.number}
                bg="#2EA006"
                textBg="#2EA006"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-[10px] justify-center mt-[-40px]">
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          className="!bg-[#DB0000] h-[80px] !text-[25px]"
        >
          Chiqish/Выход
        </Button>
        <Button
          variant="outlined"
          className="!bg-[#2EA006] !text-white h-[80px] !text-[25px]"
          onClick={() => operatorSendData(id)}
        >
          Keyingi/Следующий
        </Button>
      </div>
    </div>
  );
};

export default Home;
