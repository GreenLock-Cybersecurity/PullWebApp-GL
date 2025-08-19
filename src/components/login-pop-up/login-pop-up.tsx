import { useForm } from 'react-hook-form';
import { CloseXIcon } from '../../icons/icons';
import './login-pop-up.css'

interface LoginFormData {
    dpi: string;
    password: string;
}

export const LoginPopUp = (
    { onClose, handleAdminStatusChange }:
        {
            onClose: () => void;
            handleAdminStatusChange: (isAdmin: boolean) => void
        }) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        try {
            console.log('Datos del formulario:', data);
            // onClose();
            // reset();
        } catch (error) {
            console.error('Error en login:', error);
        }
    };

    return (
        <div className="login-pop-up">
            <div className="login-pop-up-content">
                <h2>Login for manage your reservation</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="dpi">DPI:</label>
                        <input
                            type="text"
                            id="dpi"
                            {...register('dpi', {
                                required: 'El DPI es requerido',
                                pattern: {
                                    value: /^\d{13}$/,
                                    message: 'El DPI debe tener exactamente 13 números'
                                }
                            })}
                            placeholder="Ingresa tu DPI (13 dígitos)"
                            maxLength={13}
                        />
                        {errors.dpi && (
                            <span className="error-message">{errors.dpi.message}</span>
                        )}
                    </div>
                    <div >
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', {
                                required: 'La contraseña es requerida',
                                minLength: {
                                    value: 6,
                                    message: 'La contraseña debe tener al menos 6 caracteres'
                                }
                            })}
                            placeholder="Ingresa tu contraseña"
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="submit-button"
                    >
                        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                </form>
                <button className='close-button' onClick={onClose}>
                    <CloseXIcon strokeColor='white' />
                </button>
            </div>
        </div>
    )
}