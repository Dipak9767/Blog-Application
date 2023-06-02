import React from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {

  return (
    <Box
      height={'75vh'}
      display={'flex'}
      flexDirection={'column'}
      gap={'2%'}
      cursor={'pointer'}
      className='hoverClass'
    >
      <Box
        width={'100%'}
        height={'49%'}
        overflow={'hidden'}
      >
        <Img
          src={blog.image}
          width={'100%'}
          height={'100%'}
          className='imgHover'
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'100%'}
        height={'49%'}
        justifyContent={'center'}
        textAlign={'left'}
        gap={1}
        py={2}
        px={4}
        color={'#fff'}
        fontSize={'15px'}
        borderLeft={'1px solid #b0a6f9'}
        borderRight={'1px solid #b0a6f9'}
      >

        <h6 style={{ color: '#b0a6f9' }}>{`${blog.date} ${blog.category}`}</h6>
        <Heading color={'black'} noOfLines={{ base: 1, md: 2 }} fontSize={{ base: '1rem', sm: '1.5rem', lg: '1.8rem' }}>{blog.title}</Heading>
        <Text style={{ color: '#b9a8b1' }}
          noOfLines={3}
        >
          {blog.textBody}
        </Text>
        <Link
          to={`/single-blog/${blog.id}`}
        >
          < Text
            marginTop={{ base: '1rem' }}
            fontWeight={'bold'}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#b0a6f9' }}

          >READ ARTICLE  <ArrowForwardIcon className='arrowHover' />
          </Text>

        </Link>
      </Box>
    </Box>
  )
}

export default BlogCard