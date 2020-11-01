const test = () => {
    console.log('aaa')
}

const test2 = () => {
    console.log('bbb')
}

// module.exports = {
//     test
// }

// export default test
const str = "123"

export { test, test2, str }

import MovieCard from './movieCard'

{/* <App>
    <MovieList movies={movieList} />
</App> */}
const MovieList = ({ movies }) => {
    {
        movies.map((movie, index) => {
            return (
                <React.Fragment>
                    <MovieCard movie={movie} class="col-3" />
                </React.Fragment>
            )
        })
    }

}
__________________________________________________
const MovieCard = ({ movie }) => {
    // const movie = props.movie
    // const {movie} = props
    return (
        <div>
            <p>title: {movie.title}</p>
            ...
        </div>
    )
}

export default MovieCard

{/* <ul>
    movies.map((item,index) => {
        return (
            <>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            </>
        )
    })
</ul> */}

// const name = ['mike', 'jack']


// const chars = ['q', 'w', 'e', 'r', 't']

// function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); } 

// let students = []
// for (let i = 0; i < 100; i++) {
//     const student = {}
//     let name = ''
//     const length = Math.floor(Math.random() * 8)
//     for (let j = 0; j < length; i++) {
//         name += shuffle(chars)[j]
//     }
//     student.name = name
//     students.push(student)
// }