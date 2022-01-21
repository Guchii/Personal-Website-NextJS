import NextLink from "next/link";
import { Flex, Link, Button, IconButton, useColorMode } from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        p={6}
        gap={6}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems={"center"}
        direction={{ sm: "column-reverse", md: "row" }}
        maxWidth={1400}
        width={"100%"}
        mx="auto"
      >
        <Flex
          gap={4}
          width={"100%"}
          justifyContent={{ sm: "center", md: "flex-start" }}
          wrap={{ sm: "wrap" }}
        >
          <LinkItem text="Home" href="/" />
          <LinkItem text="About" href="/about" />
          <LinkItem text="Projects" href="/projects" />
          <LinkItem text="Contact" href="/contact" />
          <LinkItem
            text="Blog"
            href="https://guchiii.hashnode.dev/"
            isExternal
          />
        </Flex>
        <Flex
          gap={3}
          marginLeft={{ sm: "none", md: "auto" }}
          width={{ sm: "100%", md: "auto" }}
        >
          <IconButton
            aria-label="Search database"
            icon={<BsFillMoonFill />}
            onClick={toggleColorMode}
            width={{ sm: "100%", md: "auto" }}
          />
          <Button
            onClick={() => window.open("/Resume.pdf", "_self")}
            colorScheme="teal"
            display={{ sm: "none", md: "block" }}
          >
            Resume
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const LinkItem = ({ text, href, isExternal }) => {
  if (!isExternal)
    return (
      <NextLink href={href || "/"} passHref>
        <Link _focus={{ boxShadow: "none" }}>{text}</Link>
      </NextLink>
    );
  return (
    <Link _focus={{ boxShadow: "none" }} href={href || "/"} isExternal>
      {text}{" "}
      <BiLinkExternal
        style={{ display: "inline", transform: "translateY(4px)" }}
      />
    </Link>
  );
};

export default Header;
