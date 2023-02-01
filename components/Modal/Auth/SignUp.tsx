import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type SignupProps = {};

const SignUp: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // firebase
  const handleSubmit = () => {};
  // update input state
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form>
      <form onSubmit={handleSubmit}>
        <Input
          required
          name="email"
          placeholder="email"
          type="email"
          mb={2}
          onChange={handleInput}
          fontSize="12px"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
        />
        <Input
          required
          name="password"
          placeholder="password"
          type="password"
          onChange={handleInput}
          fontSize="12px"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
        />
        <Input
          required
          name="confirmPassword"
          placeholder="password"
          type="confirm password"
          onChange={handleInput}
          fontSize="12px"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          bg="gray.50"
        />
        <Button type="submit" width="100%" height="36px" mt={4} mb={2}>
          Sign Up
        </Button>
        <Flex fontSize="10px" justify="center">
          <Text mr={2}>Already have an account?</Text>
          <Text
            color="blue.500"
            fontWeight={700}
            cursor="pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "signin",
              }))
            }
          >
            SIGN IN
          </Text>
        </Flex>
      </form>
    </form>
  );
};
export default SignUp;
