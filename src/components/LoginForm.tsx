'use client';
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: llamar a tu API de login (NextAuth o custom)
    console.log({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-black text-2xl text-center">Login</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 rounded bg-white bg-opacity-80 focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="px-4 py-2 rounded bg-white bg-opacity-80 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-bold rounded"
      >
        Entrar
      </button>
    </form>
  );
}
