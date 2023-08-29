// import Container from "../../Container";
import { useContext } from "react";
import Container from "../../Shared/Navbar/Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";
import { GlobalContext } from "../../../Providers/GlobalProvider";
import ToggleSearch from "./ToggleSearch";
import ToggleSearchRoute from "./ToggleSearchRoute";

export default function Navbar() {
  const { isToggleSearch } = useContext(GlobalContext);

  return (
    <div className="fixed w-full  z-10 shadow-sm">
      <div className=" border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center py-4 bg-white justify-between gap-3 md:gap-0">
            <Logo />
            {isToggleSearch ? <ToggleSearchRoute /> : <Search />}
            <MenuDropdown />
          </div>

          {/* toggle search  */}
          <ToggleSearch />
        </Container>
      </div>
    </div>
  );
}
