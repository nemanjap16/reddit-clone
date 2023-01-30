import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput/SearchInput";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex justify="" align="center">
        <Image src="/images/redditFace.svg" height="30px" alt="Reddit Logo" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
          alt="Reddit Text"
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
