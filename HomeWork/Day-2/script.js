const heading = React.createElement('h1', {}, 'Topics Covered')
const paraOne = React.createElement('p', {}, 'The following is a list of all the topics we cover in the MDN learning area.')

const aOne = React.createElement('a', {href:"https://developer.mozilla.org/en-US/docs/Learn"}, 'Getting started with the web')

const pTwo = React.createElement('p', {style:{marginLeft:'10px'}}, 'Provides a practical introduction to web development to complete beginners.')

const aTwo = React.createElement('a', {href:"https://classroom.google.com/c/NjY1Mjk0MDM5NjAz/a/NjY1Mjk0MDM5Njc2/details"}, 'HTML - Structuring the web')

const pThree = React.createElement('p', {style:{marginLeft:'10px'}}, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.')

const aThree = React.createElement('a', {href:"https://classroom.google.com/c/NjY1Mjk0MDM5NjAz/a/NjY1Mjk0MDM5Njc2/details"}, 'CSS - Styling the web')

const pFour = React.createElement('p', {style:{marginLeft:'10px'}}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS. ")


const div = React.createElement('div',{style:{width:'35%'}}, [heading, paraOne, aOne, pTwo, aTwo, pThree, aThree, pFour])

ReactDOM.render(div, document.getElementById('root'));