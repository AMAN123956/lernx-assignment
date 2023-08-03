import Header from "./header";
import BodyLeft from "./content/left";
import BodyRight from "./content/right";

const Body = () => {
  return (
    <div
      className="fixed top-16 left-64 right-0 mb-4"
      style={{ overflowY: "scroll", height: "calc(100% - 10%)" }}
    >
      <Header />
      <div className="flex w-full">
        <BodyLeft />
        <BodyRight />
      </div>
    </div>
  );
};

export default Body;
