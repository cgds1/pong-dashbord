'use client';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthContainer() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="w-full max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
      {isRegistering ? <RegisterForm /> : <LoginForm />}
      <p className="mt-4 text-center text-sm text-black">
        {isRegistering
          ? '¿Ya tienes cuenta?'
          : '¿No tienes cuenta aún?'}
        <button
          className="ml-2 underline hover:text-gray-200"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Iniciar sesión' : 'Regístrate'}
        </button>
      </p>
    </div>
  );
}
