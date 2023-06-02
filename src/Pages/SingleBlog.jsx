import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setBlogs } from "../Redux/Actions"
import { ToastMessage } from "../Utils/ToastMessage"

const SingleBlog = () => {

  const { id } = useParams(); // fetching id of selected blog
  const [blog, setBlog] = useState({}); // to hold the data of selected blog
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toastMessage } = ToastMessage();


  let blogs = useSelector((state) => state.blogs)// fetching all blogs 

  // to find and set the Blog
  const setBlogData = () => {

    // finding selected blog from all blogs using id
    let data = blogs.filter((data) => data.id === id)
    setBlog(data[0])

  }

  // to delete the blog
  const deleteBlog=(id)=>{
     // deleting selected blog from all blogs using id
      let newList = blogs.filter((blog)=> blog.id !== id)
      //updating localstaorage
      localStorage.setItem('allBlogs' , JSON.stringify(newList));
      // updating state
      dispatch({
        type: setBlogs,
        payload: newList
      })

      toastMessage({
        status:200,
        message:"Deleted Successfuly"
      })
      // navigating to the home page
      navigate('/')
  }

  useEffect(() => {
    setBlogData()
  }, [])

  return (
    <Flex
      width={{ lg: '80vw', md: '85vw', base: '95vw' }}
      height={'auto'}
      margin={'auto'}
      flexDirection={'column'}
      p={4}
      gap={2}
    >
      <Flex
        alignItems={'center'}
        justifyContent={{ md: 'end', base: 'center' }}
        gap={4}
        height={"8vh"}
      >
        <Button
          bg={'#7A6BB0'}
          borderRadius="8px"
          py="4"
          lineHeight="1"
          px={{ base: 8, lg: 16 }}
          size="sm"
          color={'white'}
          className='btn'
          onClick={() => navigate(`/edit-blog/${blog.id}`)}
        >
          EDIT
        </Button>
        <Button
          bg={'red'}
          borderRadius="8px"
          py="4"
          px={{ base: 8, lg: 16 }}
          lineHeight="1"
          size="sm"
          color={'white'}
          className='btn'
          onClick={()=>deleteBlog(blog.id)}
        >
          DELETE
        </Button>
      </Flex>
      <Box
        width={'100%'}
        height={'auto'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}

        gap={'3rem'}
      >
        <Box
          width={'100%'}
          height={'60vh'}

        >
          <Img
            src={blog.image}
            width={'100%'}
            height={'100%'}
            objectFit={'cover'}
          />
        </Box>
        <Box
          width={'100%'}
          height={'auto'}

          textAlign={'center'}
          gap={'3rem'}
        >
          <Heading
            fontSize={{ lg: '2.5rem', md: '2rem', base: '1.5rem' }}
          >{blog.title}</Heading>
          <Flex
            width={'100%'}
            height={'10vh'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={4}
            fontSize={{ lg: '18px', base: '15px' }}
          >
            <Text
              borderRight={'1px solid #B0A6F9'}
              paddingRight={4}
              fontWeight={'500'}
              color={'#B0A6F9'}
            >{blog.username}
            </Text>
            <Text
              borderRight={'1px solid #B0A6F9'}
              paddingRight={4}
              textAlign={'center'}
              fontWeight={'500'}
              color={'#B0A6F9'}

            >
              {blog.date}
            </Text>
            <Text
              fontWeight={'500'}
              color={'#B0A6F9'}
            >
              {blog.category}
            </Text>
          </Flex>
          <Text
            textAlign={'left'}
            fontSize={{ base: '12px', md: '15px', lg: '18px' }}
          >
            {blog.textBody}
          </Text>
        </Box>
      </Box>
    </Flex>


  )
}

export default SingleBlog