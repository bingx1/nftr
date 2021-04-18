import React from 'react';
import NFTcardmini from './NFTcardmini';
import { Grid } from '@material-ui/core';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then(console.log(url), (res) => res.json());

<<<<<<< HEAD
function Items(props) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const { data, error } = useSWR(
  //   router.query.id ? `/api/user/${router.query.id}` : null,
  //   fetcher
  // );

  // if (error) return <div>Failed to load user</div>;
  // if (!data) return <div>Loading...</div>;
  // console.log(data);
=======
function useUser (id) {
  console.log("Sending a request to API endpoint: ", `/api/user/${id}`)
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)
>>>>>>> 850ce42bb1426218d4291cf8d08c417c628cdbca

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

<<<<<<< HEAD
  return (
    <Grid container justify='flex-start'>
      {data.map((NFTObj, i) => (
=======

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
>>>>>>> 850ce42bb1426218d4291cf8d08c417c628cdbca
        <NFTcardmini
          id={i}
          issuer={NFTObj.issuer}
          recipient={NFTObj.recipient}
          event={NFTObj.event}
          image={NFTObj.image}
          description={NFTObj.description}
          handleNFTClick={props.handleNFTClick}
        />
      ))} */}
    // </Grid>
  // );
}

export default Items;
