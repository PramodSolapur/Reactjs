import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingCon>
      <img
        src="https://mdarpan.mahindra.com/img/loading.gif"
        alt="Loading Gif"
      />
    </LoadingCon>
  );
};

export default Loading;

const LoadingCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
`;
