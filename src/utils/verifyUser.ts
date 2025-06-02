export const verifyUser = (
    users: User[],
    email: string,
    password: string
): boolean => {
       return users.some((user: User) => user.email === email && user.password === password);
};