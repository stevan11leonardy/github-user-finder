import React, { ReactNode, useMemo } from "react";
import Spinner from "../Spinner";

interface FetcherWrapper {
  isFetching?: boolean
  errorMessage?: unknown
  children: ReactNode
}

const Wrapper: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className="my-5 text-center flex items-center justify-center">
      {props.children}
    </div>
  )
}

const FetcherWrapper: React.FC<FetcherWrapper> = (props) => {
  const { errorMessage, isFetching, children } = props;

  if (isFetching) {
    return <Wrapper><Spinner /></Wrapper>
  }

  if (errorMessage) {
    return <Wrapper>Sorry, {`${errorMessage}`}</Wrapper>
  }

  return children
}

export default FetcherWrapper