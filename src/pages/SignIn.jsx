import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../Api';

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  //const pathname =
  //new URL(request.url).searchParams.get('redirectTo') || '/host';
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('login', true);
    return redirect('/host');
  } catch (err) {
    return err.message;
  }
}

const SignIn = () => {
  //const [form, setForm] = useState({
  //email: '',
  //password: '',
  //});
  //const [status, setStatus] = useState('idle');
  //const [error, setError] = useState(null);
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  // const navigate = useNavigate();

  //function handleChange(e) {
  // const { name, value } = e.target;
  // setForm((prev) => ({ ...prev, [name]: value }));
  //}
  //function //handleSubmit(e) {
  //e.preventDefault();
  //setStatus('submitting');
  //setError(null);
  //loginUser(form)
  //.then((data) => {
  //navigate('/host/vans', { replace: true });
  // })
  //.catch((error) => setError(error))
  //.finally(() => setStatus('idle'));
  //}

  return (
    <div className="flex flex-col items-center py-20 px-6 bg-gray-500 rounded-xl">
      {message && <h2 className="text-red-800 py-0"> {message}</h2>}
      {errorMessage && <h2 className="text-red-800 py-0"> {errorMessage}</h2>}

      <Form
        method="post"
        className="flex mt-12 gap-8 flex-col"
        //onSubmit={handleSubmit}
        replace
      >
        <label className="flex flex-col">
          <span className="mb-2 text-black font-medium ">Your Email</span>

          <input
            type="email"
            name="email"
            placeholder="what is your Email?"
            //value={form.email}
            //onChange={handleChange}
            className="bg-[#FF8C38] py-4 px-6 text-white rounded-lg placeholder:text-white
              outlined-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 text-black font-medium ">Your Password</span>
          <input
            type="password"
            name="password"
            placeholder="what is your password?"
            //value={form.password}
            //onChange={handleChange}
            className="bg-[#FF8C38] py-4 px-6 text-white rounded-lg placeholder:text-white
              outlined-none border-none font-medium"
          />
        </label>

        <button
          disabled={navigation.state === 'submitting'}
          className="bg-[#FF8C38] border-b-orange-600 text-white w-full rounded-xl py-4 font-sans"
        >
          {navigation.state === 'submitting' ? 'signing in...' : 'sign In'}
        </button>
      </Form>
    </div>
  );
};

export default SignIn;
