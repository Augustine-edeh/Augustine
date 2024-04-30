import Headeroom from "react-headroom";
import HeadNav from "./navigation/HeadNav";

const Header = () => {
  return (
    <Headeroom disableInlineStyles>
      <HeadNav />
    </Headeroom>
  );
};

export default Header;
