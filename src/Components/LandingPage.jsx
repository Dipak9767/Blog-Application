import React from "react";
import {
    Flex,
  
} from "@chakra-ui/react";
import LandingCard from "./LandingCard";
import BlogsContainer from "./BlogsContainer";


const LandingPage = () => {


    return (
        <Flex
            direction={'column'}
            
            gap={4}
            justifyContent={'space-between'}
            alignItems={'center'}
            h={'auto'}
            w={{base:'80vw' ,lg: '900px', xl: '1200px'}}
            margin={'auto'}
            >
            
            <LandingCard />
            <BlogsContainer/>
        </Flex>
    );
}

export default LandingPage