
// console.log(React)

const h1 = React.createElement('h1', {
    style: {
        font:'72px', 
        textAlign : 'center'
    }
}, "Learn Web Development")

const pOne = React.createElement('p', {}, 'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.')

const pTwoPartOne = React.createElement('span', {}, 'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ')

const anchorTag = React.createElement('a', {href:"https://developer.mozilla.org/en-US/docs/Learn"}, 'the rest of MDN,')

const pTwoPartTwo = React.createElement('span',{}, ' and other intermediate to advanced resources that assume a lot of previous knowledge.')

const pThree = React.createElement('p', {}, 'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.')


const div = React.createElement('div', {style: {width:'60%'}}, [h1, pOne, pTwoPartOne, anchorTag, pTwoPartTwo, pThree])

// const root = document.getElementById('root');
// ReactDOM.render(div, root);

ReactDOM.render(div, document.getElementById('root'))









