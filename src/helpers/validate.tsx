import { Habitacion, HabitacionError } from "@/interfaces/HabitacionInterface";

export const validateRegister = (values: Habitacion): HabitacionError => {
    const errors: HabitacionError = {};

    if (!values.type) {
        errors.type = "Type is required";
    }

    const price = Number(values.price);
    if (isNaN(price) || price <= 0) {
        errors.price = "Price is required and must be a positive number";
    }

    if (!values.description) {
        errors.description = "Description is required";
    }

    if (!values.state) {
        errors.state = "State is required";
    }

    const roomNumber = Number(values.roomNumber);
    if (isNaN(roomNumber) || roomNumber <= 0) {
        errors.roomNumber = "Room number is required and must be a positive number";
    }

    if (!Array.isArray(values.services) || values.services.length === 0) {
        errors.services = "At least one service is required";
    }

    if (!Array.isArray(values.images) || values.images.length === 0) {
        errors.images = "At least one image is required";
    }

    return errors;
}

