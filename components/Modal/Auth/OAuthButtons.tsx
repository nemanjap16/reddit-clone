import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction="column" width="100%" gap={2}>
      <Button variant="oauth">
        <Image
          src="/images/googlelogo.png"
          alt="Google logo"
          height="16px"
          pr={2}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Continue with GitHub</Button>
    </Flex>
  );
};
export default OAuthButtons;
