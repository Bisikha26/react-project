// service file will be responsible for handling direct communication with backend

const mockData = [
    {
        name: "Bisikha Subedi",
        age: 25,
    },
    {
        name : "Chris Evans",
        age: 40,
    },
    {
        name: "John Doe",
        age: 39,
    },
];

const getAll = () => {
    return mockData;
}


const addListing = (name, age) => {
    const listing = {
        name,
        age,
    };
    return listing;
}

export default {
    getAll,
    addListing,
};

