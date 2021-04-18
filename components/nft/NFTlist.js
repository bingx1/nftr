import React, { useState, useCallback } from 'react';
import NFTcardmini from './NFTcardmini';
import { Grid } from '@material-ui/core';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const fetcher = async (url) => {
  console.log('Sending a request to API endpoint: ', url);
  const res = await fetch(url);
  if (res.ok) return await res.json();
  console.log('error in response', res);
  return null;
};

function getUser(url) {
  if (typeof window !== 'undefined') {
    const [user, setUser] = useState();
    const [autoLoaded, setAutoLoaded] = useState(false);

    const loadUser = useCallback(async () => {
      const newUser = await fetcher(url);
      setUser(newUser);
    }, [url]);

    useEffect(() => {
      if (!autoLoaded) {
        loadUser();
        setAutoLoaded(true);
      }
    }, [autoLoaded, setAutoLoaded, loadUser]);
    return user;
  }
  return null;
}

function Items(props) {
  const user = getUser(`/api/user/1068412`);
  if (!user) return <div></div>;
  // return <div> {data.list}</div>
  else {
    console.log('Received payload from API, ', user);
    return (
      <>
        {user.list.map((NFTObj, i) => (
          <NFTcardmini
            id={i}
            issuer={NFTObj.issuer}
            recipient={NFTObj.recipient}
            event={NFTObj.event}
            image={NFTObj.image}
            description={NFTObj.description}
          />
        ))}
      </>
    );
  }
}

export default Items;
