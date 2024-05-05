// import { Card } from "antd";

// import { useNavigate } from "react-router-dom";
// import { appStore } from "../../store";
// import { useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const Role = () => {
//   const navigate = useNavigate();
//   const { list, getList } = appStore();

//   useEffect(() => {
//     getList();
//   }, []);

//   return (
//     <div className="container mr-[auto] ml-[auto] flex justify-center flex-col items-center h-[100vh] ">
//       <div className="border p-[30px] rounded-[8px]  shadow-blue-500/50">
//         <p className="text-[40px] font-[700]">Operator</p>
//         <div className="flex flex-col w-[300px] gap-y-[20px]  img-bg">
//           <TextField
//             id="standard-basic"
//             className="!h-[45px]"
//             label="Логин"
//             variant="standard"
//           />
//           <TextField
//             id="standard-basic"
//             label="Пароль"
//             variant="standard"
//             type="password"
//             className="!h-[45px]"
//           />
//           <Button
//             variant="outlined"
//             onClick={() => navigate("/operator")}
//             className="!h-[50px]"
//           >
//             Вход
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Role;

// import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const Role = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mr-[auto] ml-[auto] flex justify-center flex-col items-center h-[100vh] ">
//       <div className="border p-[30px] rounded-[8px]  shadow-blue-500/50">
//         <p className="text-[40px] font-[700]">Operator</p>
//         <div className="flex flex-col w-[300px] gap-y-[20px]  img-bg">
//           <TextField
//             id="standard-basic"
//             className="!h-[45px]"
//             label="Логин"
//             variant="standard"
//           />
//           <TextField
//             id="standard-basic"
//             label="Пароль"
//             variant="standard"
//             type="password"
//             className="!h-[45px]"
//           />
//           <Button
//             variant="outlined"
//             onClick={() => navigate("/operator")}
//             className="!h-[50px]"
//           >
//             Вход
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Role;

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
        {list?.map((item: any) => (
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
