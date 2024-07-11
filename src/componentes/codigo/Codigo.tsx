'use client'
import React, { useState } from 'react';

const VerificationForm = () => {
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/mail/register/code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    code,
                }),
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {

                alert('¡Verificación exitosa! Usuario logeado.');
            } else {
                setError('Código de verificación incorrecto.');
            }
        } catch (error) {
            console.error('Error al verificar:', error);
            setError('Error al verificar el código de verificación.');
        }
    };

    return (
        <div className="max-w-sm mx-auto px-4 py-8 bg-white shadow-md rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-center text-teal-800 mb-8">AquaMaris Hotel</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-teal-900 font-semibold mb-2">Correo electrónico:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full py-2 px-3 rounded border border-teal-500 focus:outline-none focus:border-teal-700"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="code" className="block text-teal-900 font-semibold mb-2">Código de verificación:</label>
                    <input
                        id="code"
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        className="w-full py-2 px-3 rounded border border-teal-500 focus:outline-none focus:border-teal-700"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Verificar y Iniciar Sesión
                </button>
                {error && <p className="text-red-600 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default VerificationForm;