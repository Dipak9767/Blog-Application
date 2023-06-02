import React from 'react'
import {
    Flex,
    Button,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <>
            <Flex px={4}
                justifyContent={'space-between'}
                alignItems={'center'}
                h={'12vh'}
                m={'auto'}
                w={{ base: '80vw', lg: '900px', xl: '1200px' }}
            >

                <Link
                    to={'/'}
                >
                    <pre>
                        <Text fontSize={{ sm: '1.5rem', base: '1rem' }}><i>B L O G</i></Text>
                    </pre>
                </Link>
                <Link
                    to={'/create-blog'}
                >
                    <Button
                        bg={'#35d073'}
                        color={'#fff'}
                        px={{ sm: 12, base: 4 }}
                        py={4} fontWeight={'bold'}
                    >Create Blog</Button>
                </Link>
            </Flex>
        </>
    );
}

export default NavBar