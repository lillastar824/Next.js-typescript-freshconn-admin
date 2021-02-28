import React, { useEffect, useCallback } from 'react';
import Dashboard from './dashboard';
import nookies from 'nookies';
import { firebaseAdmin } from '../utils/firebaseAdmin';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return { props: {} as never };
  }
};

export const useInterval = (
  _callback: (...args: any[]) => any,
  delay: number
) => {
  const callback = useCallback(_callback, []);
  useEffect(() => {
    let id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Dashboard message={props.message} />
}