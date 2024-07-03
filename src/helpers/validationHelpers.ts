// helpers/validationHelpers.ts

export const validateName = (name: string): string => {
    if (name.length > 27) {
      return 'El nombre no puede tener más de 27 caracteres';
    }
    return '';
  };
  
  export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Formato de email inválido';
    }
    return '';
  };
  
  export const validatePhone = (phone: string): string => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      return 'El teléfono debe ser un número y tener más de 8 dígitos';
    }
    return '';
  };
  
  export const validatePassword = (password: string, confirmPassword: string): string => {
    if (password !== confirmPassword) {
      return 'Las contraseñas no coinciden';
    }
  
    if (password.length <= 6) {
      return 'La contraseña debe tener más de 6 caracteres';
    }
  
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      return 'La contraseña debe contener al menos una letra mayúscula';
    }
  
    return '';
  };
  
  