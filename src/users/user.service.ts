let userDb = [
    {
        id: 1,
        fullname: "Linet",
        phone: "+254715864788",
        address: "Mwea",
        score: 30
    },
    {
        id: 2,
        fullname: "Jane",
        phone: "+254715864788",
        address: "Nairobi",
        score: 20
    },
    {
        id: 3,
        fullname: "Chris",
        phone: "+254715864788",
        address: "Kutus",
        score: 10
    },
    {
        id: 4,
        fullname: "Grace",
        phone: "+254715864788",
        address: "Laikipia",
        score: 30
    },
    {
        id: 5,
        fullname: "David",
        phone: "+254715864788",
        address: "Thika",
        score: 30
    }
]
export const allUsersService = async (q?: string, limit?: number) => {
    if (q) return userDb.filter(user => user.fullname.includes(q));
    if (limit) return userDb.slice(0, limit);
    return userDb;
}
export const getUserService = async (id: number) => {
    return userDb.find(user => user.id === id);
}

export const createUserService = async (user: any) => {
    user.id = userDb.length + 1;
    userDb.push(user)
    return user;
}