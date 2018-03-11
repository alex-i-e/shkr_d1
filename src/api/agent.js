import operators from './operators.json';

const Operator = {
    all: () => new Promise((resolve, reject) => {
        try {
            resolve(operators/*['asd', 'sadd', 'asdasd']*/); // new Promise(operators.json())
        } catch (err) {
            reject(err);
        }
    })
};
// () => fetch("./operators.json")
//     .then(res => res.json())
//     .then((body) => body.operator)

const Payment = {
    validate: () => new Promise((resolve, reject) => {
        try {
            resolve(!!Math.round(Math.random()));
        } catch (err) {
            reject(err);
        }
    })
};

export default {
    Operator,
    Payment,
};
