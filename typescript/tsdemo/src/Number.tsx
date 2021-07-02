import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.span``;


const Number: React.FunctionComponent<{count:number}> = ({count}) = <Container>{count}</Container>

export default Number;