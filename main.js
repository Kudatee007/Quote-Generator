let btn = document.querySelector('.new-quote')
let quote = document.querySelector(".quote")
let person = document.querySelector('.person')

const quotes = [
    {
        quote:'I wanna be the man there"it has lotta good meaning"',
        person:'Big-Man'
    },
    {
        quote: 'Life actually plays us the way it wants "positive mind"',
        person: 'Strong-Man'
    },
    {
        quote: 'Lotta things way fit make man go crazy',
        person: 'Sabi-Man'
    },
    {
        quote: "Zero worries cause i'm okay with whatever my future serves me 'Positive Mind'",
        person: 'Ok-Man'
    },
    {
        quote: 'Tired of making millions We should start chasing billionz',
        person: 'That-Man'
    },
    {
        quote: "I know i'm gonna be great...#Zero Fugazzi",
        person: 'Roll-Man'
    },
    {
        quote: 'Still have a long way to go #Focus#....Even tho i no dey focus',
        person: 'Fed-Man'
    },
    {
        quote: 'Life is fucking hard..You Find it hard to make money..But we all wanna settle for a better life.',
        person: 'YO-Man'
    }

]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})