import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { actProfessionalLogin, resetUI } from '../../slices/auth/professional/ProfessionalAuthSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfessionalSigninType, signinSchema } from '../../validation/ProfessionalSigninSchema';
import { FormInput } from '../form/index';
import { Link, useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function ClientLoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const client = localStorage.getItem("client");
    const accessToken: string | null = JSON.parse(client)?.token;

    // const [searchParams, setSearchParams] = useSearchParams();
    // toast("Account created successfully", { type: "success" });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ProfessionalSigninType>({
        mode: 'onBlur',
        resolver: zodResolver(signinSchema)
    });
    const submitForm: SubmitHandler<ProfessionalSigninType> = (data) => {
        const { email, password } = data;
        dispatch(actProfessionalLogin({ email, password })).unwrap().then(() => {
            navigate('/professional/dashboard');
            toast("Login successful", { type: "success", position: "top-center" });
        }).catch((error) => {
            toast(`${error}`, { type: "error", position: "top-center" });
        });
    };

    useEffect(() => {
        return () => {
            dispatch(resetUI());
        }
    }, [dispatch])

    if (accessToken) {
        return <Navigate to="/professional/dashboard" />
    }

  return (
    <div className="mx-auto max-w-[500px] bg-white border border-gray-200 shadow-sm mt-20 rounded-xl">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">Sign In</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/register/applicant"
                            className="font-medium text-[#20B486] decoration-2 hover:underline"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>

                <div className="mt-5">
                    <form onSubmit={handleSubmit(submitForm)} className="grid gap-y-4">
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            register={register}
                            placeholder="email"
                            error={errors.email?.message}
                        />
                        <FormInput
                            label="Password"
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message}
                        />

                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-sm font-semibold text-white bg-[#20B486] border border-transparent rounded-lg mt-4 hover:bg-[#318665] disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ClientLoginForm