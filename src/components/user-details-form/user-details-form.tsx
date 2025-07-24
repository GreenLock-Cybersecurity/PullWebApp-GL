import { forwardRef, useImperativeHandle } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import './user-details-form.css';

export const UserDetailsForm = forwardRef(({ quantity }: { quantity: number }, ref) => {

    const {
        control,
        handleSubmit,
        register,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            usuarios: Array.from({ length: quantity }, () => ({
                owner_name: "",
                owner_last_name: "",
                owner_dpi: "",
                owner_phone: "",
                owner_email: "",
                confirmationMail: "",
                owner_birthdate: "",
            })),
        },
    });

    const { fields } = useFieldArray({
        control,
        name: "usuarios",
    });

    useImperativeHandle(ref, () => ({
        submit: (onSubmit: any) => handleSubmit(onSubmit)(),
    }));

    return (
        <form className="user-details-form-container">
            {fields.map((field, index) => {
                const email = watch(`usuarios.${index}.owner_email`);
                return (
                    <div key={field.id} className="user-details-form">
                        <h4>Assistant data &bull; {index + 1}</h4>
                        <div className="sep" />
                        <div className="form-content-container">
                            <div>
                                <label>Name:</label>
                                <input
                                    {...register(`usuarios.${index}.owner_name`, { required: "The name is required" })}
                                />
                                {errors.usuarios?.[index]?.owner_name && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_name.message}</p>
                                )}
                            </div>
                            <div>
                                <label>Surname:</label>
                                <input
                                    {...register(`usuarios.${index}.owner_last_name`, { required: "The surname is required" })}
                                />
                                {errors.usuarios?.[index]?.owner_last_name && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_last_name.message}</p>
                                )}
                            </div>
                            <div>
                                <label>DPI number:</label>
                                <input
                                    {...register(`usuarios.${index}.owner_dpi`, {
                                        required: "The DPI number is required",
                                        pattern: {
                                            value: /^[0-9]{13}$/,
                                            message: "The DPI must have 13 numeric digits",
                                        },
                                    })}
                                />
                                {errors.usuarios?.[index]?.owner_dpi && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_dpi.message}</p>
                                )}
                            </div>
                            <div>
                                <label>Telephone number:</label>
                                <input
                                    {...register(`usuarios.${index}.owner_phone`, {
                                        required: "The telephone is required",
                                        pattern: {
                                            value: /^[0-9]{8,15}$/,
                                            message: "Check the telephone",
                                        },
                                    })}
                                />
                                {errors.usuarios?.[index]?.owner_phone && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_phone.message}</p>
                                )}
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    {...register(`usuarios.${index}.owner_email`, {
                                        required: "The email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email",
                                        },
                                    })}
                                />
                                {errors.usuarios?.[index]?.owner_email && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_email.message}</p>
                                )}
                            </div>
                            <div>
                                <label>Email confirmation:</label>
                                <input
                                    type="email"
                                    {...register(`usuarios.${index}.confirmationMail`, {
                                        required: "The email confirmation is required",
                                        validate: (value) => value === email || "The emails do not match",
                                    })}
                                />
                                {errors.usuarios?.[index]?.confirmationMail && (
                                    <p className="user-form-error">{errors.usuarios[index].confirmationMail.message}</p>
                                )}
                            </div>
                            <div>
                                <label>Birthday date:</label>
                                <input
                                    type="date"
                                    {...register(`usuarios.${index}.owner_birthdate`, {
                                        required: "The birthday date is required",
                                    })}
                                />
                                {errors.usuarios?.[index]?.owner_birthdate && (
                                    <p className="user-form-error">{errors.usuarios[index].owner_birthdate.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </form>
    );
});
