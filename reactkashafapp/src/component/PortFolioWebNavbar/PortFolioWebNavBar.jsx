import React from 'react'
import {
Icon,
useColorMode,
  Container,
    Flex,
    VStack,
    Heading,
    Text,
    GridItem,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    Button,
    Center,
    Stack,
    HStack,
    AspectRatio,
    Image,  
    Divider,
    li,
    Spacer,
    Square,
    Box,
    position,
  textDecoration
  } from "@chakra-ui/react";
  import { IconButton } from "@chakra-ui/button";
  import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaAddressBook, FaAmazon, FaCoins, FaAppStoreIos, FaGooglePlay, FaAlipay, FaAppStore, FaFacebook, FaWhatsapp } from 'react-icons/fa'
  import { BellIcon, CalendarIcon, InfoIcon, CheckCircleIcon, StarIcon, TimeIcon, WarningIcon, WarningTwoIcon, ViewIcon } from '@chakra-ui/icons'
  import { useMediaQuery } from '@chakra-ui/media-query';
  import { DiCodeignitor, DiAndroid, DiWebplatform, DiBootstrap, DiWordpress, DiDreamweaver, DiReact } from 'react-icons/di';
  
  
import {Link} from 'react-scroll';//npm add react-scroll

const PortFolioWebNavBar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "yellow";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


  const CircleIcon = (props) => (

      <Icon viewBox='0 0 200 200' {...props}>
          <path
              fill='currentColor'
              d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
      </Icon>
  )

  return ( 
    <Flex mt="19px"bg="yellow.800"  flexWrap={"wrap"}>
        <Heading color="#ff804c" fontFamily='Papyrus'>K</Heading>
        <IconButton ml="8" mt="0" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

<Spacer/>
  <Link  spy={true} to='Navbar' smooth ={true} activeClass='activeClass'>
     <Text ml="8px" mt="7px" color="#ffb814">Intro</Text></Link>

   <Link spy={true} to='Experience' smooth ={true} activeClass='activeClass'>
    <Text ml="8px" mt="7px" color="#ffb814">Experience</Text></Link>

   <Link spy={true} to='Projects' smooth ={true} activeClass='activeClass'>  
     <Text ml="8px" mt="7px"color="#ffb814">Projects</Text></Link>

   <Link  spy={true} to='Contact' smooth ={true} activeClass='activeClass'> 
    <Text ml="8px" mt="7px"color="#ffb814">Contact</Text></Link>

    <Link  spy={true} to='Services' smooth ={true} activeClass='activeClass'> 
    <Text ml="8px" mt="7px"color="#ffb814">Services</Text></Link>

   <Link spy={true} to='Skills' smooth ={true} activeClass='activeClass'>
        <Text ml="8px" mt="7px"color="#ffb814">Skills</Text></Link>

   <Link spy={true} to='About' smooth ={true} activeClass='activeClass'>
        <Text ml="8px" mt="7px"color="#ffb814">About</Text></Link>



{/*    

    <Text ml="8px" mt="7px" color="#ffb814">Experience</Text>
    <Text ml="8px" mt="7px"color="#ffb814">Projects</Text>
    <Text ml="8px" mt="7px"color="#ffb814">Contact</Text>
    <Text ml="8px" mt="7px"color="#ffb814">Skills</Text>
    <Text ml="8px" mt="7px"color="#ffb814">About</Text> */}
        <Spacer/>
<Text color="	  #ffb814" mt="7px" mr="9px"fontWeight={"bolder"}><a href="https://www.linkedin.com/in/kashaf-abdullah-482246207/">LinkedIn</a></Text>
<Button bg='#ff788a'ml="18px" mr="19px" color='black.700' fontWeight={"bold"}>Join Us</Button>
</Flex>
  
    
  )
}

export default PortFolioWebNavBar
