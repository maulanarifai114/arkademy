const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

const newData = {
    name: "Raden Maulana Rifai Abdullah",
    email: "maulanarifai114@gmail.com",
    hobby: "Coding & Design",

};

const changeData = {
    ...data,
    ...newData
};

console.log(changeData);

function addressStCity({website}) {
    return `Website : ${website}`
}

console.log(addressStCity(data));