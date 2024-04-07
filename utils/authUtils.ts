export const getLoggedInUser = () => {
    const userString = localStorage.getItem('user');
    if (userString) {
        try {
            return JSON.parse(userString);
        } catch (error) {
            console.error('Error parsing user data from localStorage:', error);
            return null;
        }
    }
    return null;
};