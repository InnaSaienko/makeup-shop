export const verifyUser = (
    user: { email: string; password: string },
    email: string,
    password: string
): boolean => {
       return user.email === email && user.password === password;
};