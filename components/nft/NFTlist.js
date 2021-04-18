import React from 'react';
import NFTcardmini from './NFTcardmini';
import { Grid } from '@material-ui/core';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then(console.log(url), (res) => res.json());

function useUser (id) {
  console.log("Sending a request to API endpoint: ", `/api/user/${id}`)
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}


function Items(props) {
  console.log("Passed down student id to NFTList", props.id);
  const {data, isLoading, isError} = useUser(props.id)
  if (isError) return <div>Failed to load user</div>;
  if (isLoading) return <div>Loading...</div>;
  // return <div> {data.list}</div>
  if (data) return console.log("Received payload from API, ", data);
  // return (
    // <Grid container spacing={1} justify='center'>
      {/* {data.list[0]} */}
      {/* {data["list"]} */}
      {/* {data.list.map((NFTObj, i) => (
        <NFTcardmini
          id={i}
          issuer={NFTObj.issuer}
          recipient={NFTObj.recipient}
          event={NFTObj.event}
          image={NFTObj.image}
          description={NFTObj.description}
        />
      ))} */}
    // </Grid>
  // );
}

export default Items;
