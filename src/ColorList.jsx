import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((item, index) => {
        return <SingleColor key={nanoid()} color={item} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
