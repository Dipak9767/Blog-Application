import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../Images/img1.jpg'
import { ArrowForwardIcon } from '@chakra-ui/icons';

const LandingCard = () => {

    return (
        <Flex
            width={'100%'}
            height={{ lg: '78vh', base: '100vh' }}
            direction={{ lg: 'row', base: 'column' }}
            className='hoverClass'
            cursor={'pointer'}
        >
            <Box
                width={{ lg: '65%', base: '100%' }}
                height={{ lg: '100%', base: '63%', md: '75%', sm: '70%' }}
                overflow={'hidden'}
            >

                <Img src={img}
                    width={'100%'}
                    height={'100%'}
                    style={{ objectFit: "cover" }}
                    className='imgHover'
                />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                width={{ base: '100%', lg: '35%' }}
                height={{ lg: '100%', base: '37%', sm: '30%', md: '25%' }}
                bg={'#483f76'}
                justifyContent={{ lg: 'center', base: 'center' }}
                px={{ base: 2, lg: 4 }}
                gap={4}
                py={{ base: 0, lg: 8 }}
                fontSize={{ base: 12, lg: '1rem' }}
                textAlign={'left'}
                color={'#fff'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                    bg={'#483f76'}
                    justifyContent={'center'}
                    textAlign={'left'}
                    gap={1}
                    color={'#fff'}
                >

                    <h6 style={{ color: '#b0a6f9' }}>28 April hello world</h6>
                    <Heading fontSize={{ base: '1rem', sm: '1.5rem', lg: '2.2rem' }}>Lorem ipsum dolor sit amet.</Heading>
                    <p style={{ color: '#b9a8b1' }}> Illo laudantium nihil libero sunt sint fuga consequatur blanditiis illum nulla mollitia natus numquam quidem quo labore earum at distinctio voluptatibus, sequi aliquam maxime. Ullam, maxime possimus facere iste, quibusdam quis hic enim obcaecati itaque sed soluta ab neque ipsam, laboriosam doloribus.</p>
                </Box>
                < Text marginTop={{ base: '0', lg: '5rem' }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#b0a6f9' }}>READ ARTICLE  <ArrowForwardIcon className='arrowHover' /> </Text>
            </Box>
        </Flex>
    )
}

export default LandingCard