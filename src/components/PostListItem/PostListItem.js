import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 2px 3px 2px 3px;
  max-height: 22px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  background-color: darkgrey;
  cursor: pointer;
`;

export const PostListItem = ({ post, onView }) => {
  const { title } = post;
  return (
    <Wrapper>
      <div>{title}</div>
      <Button onClick={onView}>
        View
      </Button>
    </Wrapper>
  )
};
