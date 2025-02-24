import { useState } from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react"
import { bsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();
    return (
        <Box >
            <Flex
                cursor={'pointer'}
                bg={'gray.100'}
                borderBottom={'1px'}
                borderColor={'gray.200'}
                padding={'2'}
                fontWeight={'black'}
                fontSize={'lg'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={() => setSearchFilters((prevfilters) => !prevfilters)}
            >
                <Text>search properties by filters</Text>  
                <Icon paddingLeft={'2'} w={'7'} as={bsFilter}/>  
            </Flex>
            {searchFilters && <SearchFilters/>}
        </Box>
    )
}
export default Search