import { CloseIcon, Search2Icon } from '@chakra-ui/icons'
import { Flex, Input, Link, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const SortingContainer = ({ filterBlogs, searchBlogs }) => {
    const [searchExpand, setSearchExpand] = useState(false) // to expand the search input
    return (
        <Flex
            gap={4}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
            height={'10vh'}
        >
            <Search2Icon fontSize={'1.5rem'}
                color={'#d5d1fb'}
                cursor={'pointer'}
                onClick={() => setSearchExpand(true)}
            />
            {searchExpand ?
                <>
                    <Input
                        type='text'
                        onChange={(e) => searchBlogs(e.target.value)}
                    />
                    <CloseIcon
                        fontWeight={'bold'}
                        cursor={'pointer'}
                        onClick={() => setSearchExpand(false)}
                    />
                </>
                :
                <>

                    <Flex
                        width={'90%'}
                        justifyContent={'space-around'}
                        fontWeight={'bold'}
                        fontSize={'1rem'}
                        display={{ base: "none", lg: 'flex' }}
                    >
                        <Link
                            className='sorting-links'
                            _hover={{ textDecoration: "none" }}
                            onClick={() => filterBlogs('EDUCATION')}
                        >

                            EDUCATION
                        </Link>
                        <Link
                            className='sorting-links'
                            _hover={{ textDecoration: "none" }}
                            onClick={() => filterBlogs('FOOD')}
                        >
                            FOOD
                        </Link>
                        <Link
                            className='sorting-links'
                            _hover={{ textDecoration: "none" }}
                            onClick={() => filterBlogs('TRAVEL')}
                        >
                            TRAVEL
                        </Link>
                        <Link
                            className='sorting-links'
                            _hover={{ textDecoration: "none" }}
                            onClick={() => filterBlogs('SOCIAL')}
                        >
                            SOCIAL
                        </Link>
                        <Link
                            className='sorting-links'
                            _hover={{ textDecoration: "none" }}
                            onClick={() => filterBlogs('All')}
                        >
                            All
                        </Link>
                    </Flex>
                    <Select 
                    display={{base:'block' , lg:'none'}}
                    placeholder="Category"
                    fontSize={{base:12 , md:'20px'}}
                    width={'40%'}
                    onChange={(e)=> filterBlogs(e.target.value)}
                    >
                        <option value="EDUCATION">EDUCATION</option>
                        <option value="FOOD">FOOD</option>
                        <option value="TRAVEL">TRAVEL</option>
                        <option value="SOCIAL">SOCIAL</option>
                        <option value="All">ALL</option>
                    </Select>
                </>
            }
        </Flex>
    )
}

export default SortingContainer