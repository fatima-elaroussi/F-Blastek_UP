import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { actProfessionalRegister, resetUI } from '../../../slices/auth/professional/ProfessionalAuthSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ClientSignupType, signupSchema } from "../../../validation/ClientSignupSchema"
import { FormInput } from '../../form/index';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import useCheckEmailAvailability from '../../../hooks/useCheckEmailAvailability';
import { toast } from 'react-toastify';

function ClientRegisterForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector(state => state.ClientAuth);

    const client = localStorage.getItem("professional");
    const accessToken: string | null = JSON.parse(client)?.token;

    const {
        register,
        handleSubmit,
        getFieldState,
        trigger,
        formState: { errors }
    } = useForm<ClientSignupType>({
        mode: 'onBlur',
        resolver: zodResolver(signupSchema)
    });
    const submitForm: SubmitHandler<ClientSignupType> = async (data) => {
        try {
            const { firstname, lastname, email, password } = data;
            await dispatch(actProfessionalRegister({ firstname, lastname, email, password })).unwrap().then(() => {
                navigate('/login/applicant?message=account_created');
                toast("Registered successfully", { type: "success", position: "top-center" });
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const onInvalid = (errors) => console.error(errors)

    const {
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability
    } = useCheckEmailAvailability();

    const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger("email");
        const value = e.target.value;
        console.log(value);
        const { isDirty, invalid } = getFieldState("email");

        if (isDirty && !invalid && enteredEmail !== value) {
            // checking
            checkEmailAvailability(value);
        }

        if (isDirty && invalid && enteredEmail) {
            resetCheckEmailAvailability();
        }
    };

    useEffect(() => {
        return () => {
            dispatch(resetUI());
        }
    }, [dispatch])

    if (accessToken) {
        return <Navigate to="/client/dashboard" />
    }

    return (
        <div className="mx-auto max-w-[500px] bg-white border border-gray-200 shadow-sm mt-20 rounded-xl ">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login/applicant"
                            className="font-medium text-[#20B486] decoration-2 hover:underline"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>

                <div className="mt-5">
                    <form onSubmit={handleSubmit(submitForm, onInvalid)} className="grid gap-y-4">
                        <FormInput
                            label="First Name"
                            name="firstname"
                            register={register}
                            placeholder="John"
                            error={errors.firstname?.message}
                        />
                        <FormInput
                            label="Last Name"
                            name="lastname"
                            register={register}
                            placeholder="Doe"
                            error={errors.lastname?.message}
                        />
                        <FormInput
                            label="Email"
                            type="email"
                            name="email"
                            register={register}
                            onBlur={emailOnBlurHandler}
                            placeholder="email"
                            error={
                                errors.email?.message
                                    ? errors.email?.message
                                    : emailAvailabilityStatus === "notAvailable"
                                        ? "This email is already in use."
                                        : emailAvailabilityStatus === "failed"
                                            ? "Error from the server."
                                            : ""
                            }
                            formText={
                                emailAvailabilityStatus === "checking"
                                    ? "We're currently checking the availability of this email address. Please wait a moment."
                                    : ""
                            }
                            success={
                                emailAvailabilityStatus === "available"
                                    ? "This email is available for use."
                                    : ""
                            }
                        />
                        <FormInput
                            label="Password"
                            name="password"
                            type="password"
                            register={register}
                            placeholder="Password"
                            error={errors.password?.message}
                        />
                        <FormInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            register={register}
                            placeholder="Confirm Password"
                            error={errors.confirmPassword?.message}
                        />

                        <div className="flex items-center">
                            <div className="flex">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                                />
                            </div>
                            <div className="ms-3">
                                <label htmlFor="remember-me" className="text-sm">
                                    I accept the{' '}
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 decoration-2 hover:underline"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-sm font-semibold text-white bg-[#20B486] border border-transparent rounded-lg mt-4 hover:bg-[#318665] disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Sign up
                        </button>
                        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ClientRegisterForm

