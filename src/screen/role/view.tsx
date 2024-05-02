import { Card } from "antd";
import Operator from "../../../public/Operator.png";
import { useNavigate } from "react-router-dom";
import { appStore } from "../../store";
import { useEffect } from "react";
const Role = () => {
  const navigate = useNavigate();
  const { list, getList } = appStore();

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="flex gap-[20px] items-center justify-center mt-[50px]">
        {list.data?.map((item: any) => (
          <Card
            hoverable
            style={{ width: 350, padding: 10 }}
            cover={<img alt="example" src={Operator} />}
            onClick={() => navigate(`/operator/${item.id}`)}
          >
            <p className="font-bold text-[30px]">{item.name}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Role;
