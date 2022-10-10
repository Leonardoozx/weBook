import { useRouter } from 'next/router';
import { useContext } from 'react';
import context from '../context/context';
import SignInButton from '../components/Login/SignInButton';
import PasswordInput from '../components/Login/PasswordInput';

function SignIn() {
  const router = useRouter();

  const { genericState, setGenericState } = useContext(context);

  const onSubmitClick = (e) => {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <form onSubmit={onSubmitClick}>
      Wellcome to our library!
      <br />
      <br />
      <label htmlFor="emailInput">
        Email:
        <input
          name="emailInput"
          id="emailInput"
          type="text"
          onChange={setGenericState}
          value={genericState.emailInput}
        />
      </label>
      <PasswordInput />
      <SignInButton />
        {/* button for going to signup page */}
        <button type='button' onClick={ () => router.push('/signup') }>Sign up</button>
    </form>
  )
}

export default SignIn;