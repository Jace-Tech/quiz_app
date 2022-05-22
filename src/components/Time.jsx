import { Text, Box, useInterval } from '@chakra-ui/react'
import React, { useState, useEffect }  from 'react'

const Time = ({ time, handleElapse, stop }) => {
    let mainTime = time / 1000
    let formatTime = ("" + mainTime).length > 1 ? `00:${mainTime}` : `00:0${mainTime}`

    return (
        <Text color={"gray.800"} fontWeight={600} fontSize={"2xl"}>{ formatTime }</Text>
    )
}

export default Time