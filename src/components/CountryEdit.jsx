import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AddData, fetchData, updateteData } from '../Redux/Action';

export const CountryEdit=()=>{
  const {id}=useParams()
  const [Country,setCountry]=useState("")
  const [City,setCity]=useState("")
  const [Population,setPopulation]=useState("")

  const navigate = useNavigate();
  // console.log(id)
  // console.log(Country)
  // console.log(City)
  // console.log(Population)
 
  const dispatch=useDispatch()
  useEffect(()=>{
      axios.get(`http://localhost:8080/data/${id}`)
      .then((res)=>{
        setCountry(res.data.Country);
        setCity(res.data.City);
        setPopulation(res.data.Population);
        
    })

    
  },[])
  const handleEdit=()=>{
   const editData={
    Country:Country,
    City:City,
    Population:Population,
   
   }
   
      dispatch(updateteData(editData,id))
      dispatch(fetchData())

      navigate('/show')
      
      
  }
 
    return(
     <Box>
<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
           Edit Your Record
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text"  value={Country} onChange={(e)=>setCountry(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={City} onChange={(e)=>setCity(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
           
            <FormControl >
              <FormLabel>Population</FormLabel>
              <InputGroup>
                <Input type="number" value={Population} onChange={(e)=>setPopulation(e.target.value)}  />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                   >
              
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleEdit}
                >
                Edit Details
              </Button>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
    </Flex>
     </Box>
    )
}