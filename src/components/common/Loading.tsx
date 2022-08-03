import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <Oval
      height={70}
      width={70}
      color="#666666"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#666666"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;
