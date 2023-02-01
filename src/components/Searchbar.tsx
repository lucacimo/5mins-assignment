import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type SearchBarProps = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const Searchbar = ({ setSearchTerm }: SearchBarProps) => {
  const [state, setState] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Box bg={useColorModeValue("gray.700", "gray.900")} px={10} py={10}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search movie"
          onChange={handleChange}
          color="white"
        />
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
