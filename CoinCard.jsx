import React from 'react'
import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const CoinCard = ({id,name,img,symbol,price,currencySymbol='₹'})=>(
        <Link to={`/coin/${id}`} >
      
          <VStack 
          w={"52"}
          shadow={"2xl"}
          p={8}
          borderRadius={'lg'}
          transition={"all .3s"}
          m={4}
          css= {{
            "&:hover": {
              transform: "Scale(1.1)"
            }
          }}
          borderTop={"2px solid grey"}
          >
            <Image src={img} 
            w={"10"}
            h={'10'}
            objectFit={"contain"}
            alt={'Exchange'} 
            />
      
            <Heading size={'md'} noOfLines={1}>
              {symbol}
            </Heading>
      
            <Text noOfLines={1}>
              {name}
            </Text>
            <Text noOfLines={1}>
              {price? `${currencySymbol}${price}`: "NA"}
            </Text>
          </VStack>

      
        </Link>
      
      )


export default CoinCard;