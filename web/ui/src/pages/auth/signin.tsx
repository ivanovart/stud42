import Logo42 from '@assets/images/logo-42.svg';
import Logo from '@assets/images/logo.svg';
import Error from '@components/AuthError/AuthError';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

type PageProps = {};

export const LoginPage: NextPage<PageProps, {}> = () => {
  const {
    query: { callbackUrl, error },
  } = useRouter();

  return (
    <div className="w-[100vw] h-[100vh] flex items-center">
      <div className="hidden lg:block bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-sky-500 w-[61.80%] h-[100vh]"></div>
      <div className="lg:flex-1 p-8 lg:p-16 border-t-4 lg:border-t-0 lg:border-l-2 border-indigo-400 dark:border-indigo-600 bg-gradient-to-tl from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 w-full h-[100vh] flex flex-col justify-center">
        <div className="flex items-center">
          <Logo
            height={96}
            className="fill-slate-800 -top-3 relative  mr-4 dark:fill-white mt-4 mb-4"
          />
          <h1 className="text-8xl font-black py-5 mb-10 bg-clip-text text-transparent bg-gradient-to-r w-fit from-fuchsia-500 via-indigo-500 to-sky-500">
            Login
          </h1>
        </div>
        <div className="bg-emerald-600 px-6 py-4 text-white rounded mb-10">
          <h1 className="text-lg mb-2">
            Currently in <b>open</b> beta
          </h1>
          <p className="text-sm text-emerald-100 mb-2">
            The <b>s</b>
            <span className="opacity-50 line-through decoration-1">tud</span>
            <b>42</b> v3 beta is available to everyone!
          </p>
        </div>
        {error && <Error error={error as ErrorType} />}
        <p>Sign up with your 42 account to enjoy app</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-10">
          Only one step, click bellow !
        </p>

        <button
          className="w-fit flex flex-row group justify-center items-center bg-black hover:bg-slate-200 dark:hover:bg-white hover:text-black transition-all dark:border-0 border-black border-2 border-transparent text-white py-2 px-8 rounded uppercase my-4"
          onClick={() =>
            signIn('42-school', { callbackUrl: callbackUrl as string })
          }
        >
          <span>Sign in with</span>
          <Logo42
            height={18}
            className="ml-2 transition-all fill-white group-hover:fill-black"
          />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
