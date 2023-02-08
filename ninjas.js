const ninjas = ['Naruto', 'Takashi','Shiban'];

const students = [
    {name:'naruto', belt: 'black'},
    {name:'haru', belt: 'orange'},
    {name:'shiban', belt: 'black'},
    {name:'takashi', belt: 'grey'},
]

const blackBeltStudents = students.filter(({belt}) => belt === 'black');


const showOnlyStudentsName = students.map(({name,...rest}) =>  rest);




const greet = () => {
    console.log('Greetings from Japanee!');
}

export { ninjas, blackBeltStudents, showOnlyStudentsName, students }

export default greet;
