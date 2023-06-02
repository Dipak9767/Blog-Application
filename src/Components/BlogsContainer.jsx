import { Grid, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SortingContainer from './SortingContainer'
import BlogCard from './BlogCard'
import { useSelector } from 'react-redux'

const BlogsContainer = () => {

  const [allBlogs, setAllBlogs] = useState([]) // to hold all Blogs

  let blogs = useSelector((state) => state.blogs) // fetching all blogs

  // filtering based on category
  const filterBlogs = (category) => {

    if (category === 'All') {

      setAllBlogs(blogs)
    } else {

      let newBlogs = blogs.filter((blog) => category.toLowerCase() === blog.category.toLowerCase())
      setAllBlogs(newBlogs)
    }
  }

  // searching based on title
  const searchBlogs = (search) => {

    if (search === '') {

      setAllBlogs(blogs)
    } else {

      let newBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
      setAllBlogs(newBlogs)
    }
  }

  useEffect(() => {
    setAllBlogs(blogs)

  }, [blogs])

  return (
    <Flex
      width={'100%'}
      flexDirection={'column'}
      gap={4}
    >
      <SortingContainer filterBlogs={filterBlogs} searchBlogs={searchBlogs} />
      {
        allBlogs.length > 0 ?
          <Grid templateColumns={{ lg: [" 1fr  1fr 1fr"], base: [" 1fr"], md: ["1fr 1fr"] }} gap={4} paddingBottom={'1rem'}>
            {
              allBlogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))
            }
          </Grid>
          :
          <Text fontSize={'2rem'} width={'100%'} textAlign={'center'} p={'2rem'}>No Blogs Create Some </Text>
      }

    </Flex>
  )
}

export default BlogsContainer